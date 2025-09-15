import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, sessionId } = await req.json();
    
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const geminiApiKey = Deno.env.get('GEMINI_API_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('Received message:', message, 'Session ID:', sessionId);

    // Search for relevant medical Q&A entries
    const { data: relevantQA, error: searchError } = await supabase
      .from('medical_qa')
      .select('question, patient_description, doctor_response')
      .or(`question.ilike.%${message}%,patient_description.ilike.%${message}%`)
      .limit(5);

    if (searchError) {
      console.error('Search error:', searchError);
    }

    console.log('Found relevant Q&A entries:', relevantQA?.length || 0);

    // Build context from relevant medical cases
    let context = '';
    if (relevantQA && relevantQA.length > 0) {
      context = '\n\nRelevant medical cases for reference:\n' + 
        relevantQA.map((qa, index) => 
          `Case ${index + 1}:
Question: ${qa.question}
Patient Description: ${qa.patient_description || 'N/A'}
Doctor Response: ${qa.doctor_response}
`
        ).join('\n');
    }

    // Create enhanced prompt for Gemini
    const systemPrompt = `You are CareConnect AI, a helpful medical assistant. You provide evidence-based health guidance but always remind users to consult healthcare professionals for serious concerns.

IMPORTANT GUIDELINES:
- Provide helpful, evidence-based medical information
- Always include a disclaimer about consulting healthcare professionals
- If the query seems urgent or emergency-related, immediately advise seeking emergency care
- Use the provided medical cases as reference but don't copy responses verbatim
- Be empathetic and supportive
- Keep responses concise but informative

${context}`;

    const userPrompt = `User's medical question: ${message}

Please provide a helpful response based on medical knowledge and the reference cases above (if any). Remember to include appropriate medical disclaimers.`;

    // Call Gemini API
    const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${geminiApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `${systemPrompt}\n\n${userPrompt}`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      }),
    });

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error('Gemini API error:', errorText);
      throw new Error(`Gemini API error: ${geminiResponse.status}`);
    }

    const geminiData = await geminiResponse.json();
    console.log('Gemini response received');

    const aiResponse = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || 
      "I apologize, but I'm having trouble processing your request right now. Please consult with a healthcare professional for medical advice.";

    // Save chat message to database
    if (sessionId) {
      const { error: messageError } = await supabase
        .from('chat_messages')
        .insert([
          { session_id: sessionId, message, sender: 'user' },
          { 
            session_id: sessionId, 
            message: aiResponse, 
            sender: 'bot',
            context_used: relevantQA || []
          }
        ]);

      if (messageError) {
        console.error('Error saving messages:', messageError);
      }
    }

    return new Response(JSON.stringify({ 
      response: aiResponse,
      contextUsed: relevantQA?.length || 0
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in medical-chat function:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      response: "I apologize, but I'm experiencing technical difficulties. Please consult with a healthcare professional for medical advice."
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
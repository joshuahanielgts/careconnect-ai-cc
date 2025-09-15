import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Medical Q&A data from the uploaded CSV
    const medicalData = [
      {
        question: "What could cause chest pain?",
        patient_description: "I'm experiencing chest pain that comes and goes. It's been happening for a few days now.",
        doctor_response: "Chest pain can have various causes including heart conditions, muscle strain, acid reflux, or anxiety. Given the persistence, I recommend seeking immediate medical evaluation to rule out cardiac issues. Please visit an emergency room or contact your healthcare provider immediately."
      },
      {
        question: "How to manage diabetes?",
        patient_description: "Recently diagnosed with Type 2 diabetes, looking for management advice.",
        doctor_response: "Diabetes management involves blood sugar monitoring, medication adherence, dietary changes (focus on low glycemic foods), regular exercise, and routine check-ups. Work with your healthcare team to develop a personalized plan. Monitor blood sugar as directed and watch for symptoms of high/low blood sugar."
      },
      {
        question: "What are symptoms of high blood pressure?",
        patient_description: "I've been having headaches and dizziness lately. Could this be high blood pressure?",
        doctor_response: "High blood pressure often has no symptoms (silent killer), but some people experience headaches, dizziness, shortness of breath, or nosebleeds. These symptoms can have many causes. I recommend getting your blood pressure checked regularly and consult a healthcare provider for proper evaluation and monitoring."
      },
      {
        question: "How to treat a common cold?",
        patient_description: "I have a runny nose, cough, and mild fever for 3 days.",
        doctor_response: "Common cold treatment focuses on symptom relief: rest, stay hydrated, use saline nasal sprays, consider over-the-counter pain relievers for aches. Most colds resolve in 7-10 days. See a doctor if symptoms worsen, fever exceeds 101.5°F, or you develop severe headache, sinus pain, or difficulty breathing."
      },
      {
        question: "What causes frequent headaches?",
        patient_description: "I've been getting headaches almost daily for the past two weeks.",
        doctor_response: "Frequent headaches can result from stress, dehydration, poor sleep, eye strain, medication overuse, hormonal changes, or underlying conditions. Keep a headache diary noting triggers, timing, and severity. Consult a healthcare provider for evaluation, especially with daily headaches lasting two weeks."
      }
    ];

    // Insert the medical data
    const { data, error } = await supabase
      .from('medical_qa')
      .insert(medicalData);

    if (error) {
      console.error('Error inserting data:', error);
      throw error;
    }

    console.log('Successfully imported medical data');

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Medical data imported successfully',
      recordsInserted: medicalData.length 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in import-medical-data function:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to import medical data',
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
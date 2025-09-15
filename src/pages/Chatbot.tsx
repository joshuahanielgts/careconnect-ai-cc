import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import { ArrowLeft, Send, Mic, Phone, MessageCircle, User, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  contextUsed?: number;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm CareConnect AI, your personal health assistant. I have access to medical knowledge and can help answer your health questions. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const { toast } = useToast();

  // Initialize chat session
  useEffect(() => {
    const initializeSession = async () => {
      try {
        const { data, error } = await supabase
          .from('chat_sessions')
          .insert([{ user_id: 'anonymous' }])
          .select()
          .single();

        if (error) throw error;
        setSessionId(data.id);
      } catch (error) {
        console.error('Error creating session:', error);
        toast({
          title: "Session Error",
          description: "Failed to initialize chat session. Some features may not work.",
          variant: "destructive",
        });
      }
    };

    initializeSession();
  }, [toast]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsTyping(true);

    try {
      // Call the medical chat edge function
      const { data, error } = await supabase.functions.invoke('medical-chat', {
        body: { 
          message: currentInput,
          sessionId: sessionId 
        }
      });

      if (error) throw error;

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || "I apologize, but I'm having trouble processing your request. Please consult with a healthcare professional.",
        sender: 'bot',
        timestamp: new Date(),
        contextUsed: data.contextUsed || 0
      };

      setMessages(prev => [...prev, botResponse]);
      
      if (data.contextUsed > 0) {
        toast({
          title: "Enhanced Response",
          description: `Found ${data.contextUsed} relevant medical cases to help answer your question.`,
        });
      }

    } catch (error) {
      console.error('Error calling medical chat:', error);
      
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm experiencing technical difficulties right now. Please try again later or consult with a healthcare professional for immediate medical concerns.",
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorResponse]);
      
      toast({
        title: "Connection Error",
        description: "Unable to connect to AI service. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <Toaster />
      
      <main className="pt-24 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh-120px)]">
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold">
              <span className="healthcare-gradient-text">CareConnect AI Chatbot</span>
            </h1>
            <p className="text-muted-foreground">Your 24/7 health companion</p>
          </div>

          <div className="glass-card h-[calc(100%-120px)] flex flex-col">
            {/* Chat Header */}
            <div className="glass-header p-4 rounded-t-[var(--radius-lg)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">CareConnect AI</div>
                  <div className="text-sm text-muted-foreground">Online • Ready to help</div>
                </div>
                <div className="ml-auto flex gap-2">
                  <Button variant="ghost" size="sm" className="glass-button">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="glass-button">
                    <Mic className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground ml-auto'
                        : 'glass-card'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    <div className="flex items-center justify-between text-xs opacity-70 mt-1">
                      <span>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      {message.contextUsed && message.contextUsed > 0 && (
                        <span className="text-primary">📚 {message.contextUsed} cases referenced</span>
                      )}
                    </div>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="glass-card p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-white/20">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your health question..."
                  className="flex-1 glass-button"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button 
                  onClick={handleSendMessage}
                  className="glass-button hover:bg-primary hover:text-primary-foreground"
                  disabled={!input.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex gap-2 mt-2">
                <Button variant="ghost" size="sm" className="glass-button">
                  <Mic className="w-4 h-4 mr-2" />
                  Voice
                </Button>
                <Button variant="ghost" size="sm" className="glass-button">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Quick Questions
                </Button>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-xs text-muted-foreground text-center mt-4 space-y-1">
            <div>⚠️ <strong>Medical Disclaimer:</strong> This AI assistant provides general health information only.</div>
            <div>For medical emergencies, call emergency services. Always consult healthcare professionals for medical advice.</div>
            {sessionId && (
              <div className="text-primary">✅ Connected to AI Medical Assistant</div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chatbot;
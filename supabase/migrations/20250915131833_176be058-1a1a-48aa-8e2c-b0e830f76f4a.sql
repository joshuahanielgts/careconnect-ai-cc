-- Create medical Q&A dataset table
CREATE TABLE public.medical_qa (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  patient_description TEXT,
  doctor_response TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create chat sessions table
CREATE TABLE public.chat_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create chat messages table
CREATE TABLE public.chat_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID REFERENCES public.chat_sessions(id) ON DELETE CASCADE,
  message TEXT NOT NULL,
  sender TEXT NOT NULL CHECK (sender IN ('user', 'bot')),
  context_used JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.medical_qa ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to medical Q&A
CREATE POLICY "Medical Q&A is publicly readable" 
ON public.medical_qa 
FOR SELECT 
USING (true);

-- Create policies for chat sessions (public for demo)
CREATE POLICY "Chat sessions are publicly accessible" 
ON public.chat_sessions 
FOR ALL 
USING (true);

-- Create policies for chat messages (public for demo)
CREATE POLICY "Chat messages are publicly accessible" 
ON public.chat_messages 
FOR ALL 
USING (true);

-- Create indexes for better search performance
CREATE INDEX idx_medical_qa_question ON public.medical_qa USING gin(to_tsvector('english', question));
CREATE INDEX idx_medical_qa_patient_description ON public.medical_qa USING gin(to_tsvector('english', patient_description));
CREATE INDEX idx_medical_qa_doctor_response ON public.medical_qa USING gin(to_tsvector('english', doctor_response));

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_medical_qa_updated_at
  BEFORE UPDATE ON public.medical_qa
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_chat_sessions_updated_at
  BEFORE UPDATE ON public.chat_sessions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
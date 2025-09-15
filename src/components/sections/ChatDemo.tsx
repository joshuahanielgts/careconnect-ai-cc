import { Send, Mic, MoreHorizontal } from "lucide-react"
import chatDemoImage from "@/assets/chat-demo.jpg"

const ChatDemo = () => {
  const chatMessages = [
    {
      type: "user",
      message: "मुझे बुखार और सिरदर्द है। क्या करूं?",
      time: "2:14 PM"
    },
    {
      type: "ai",
      message: "मैं आपकी मदद कर सकता हूं। आपका बुखार कितना है? और यह कब से है?",
      time: "2:14 PM"
    },
    {
      type: "user", 
      message: "101°F, 2 दिन से",
      time: "2:15 PM"
    },
    {
      type: "ai",
      message: "समझ गया। आपके लक्षणों के आधार पर, यह वायरल बुखार हो सकता है। यहां कुछ तुरंत करने योग्य उपाय हैं:\n\n• पर्याप्त आराम करें\n• बहुत सारा पानी पिएं\n• पैरासिटामोल ले सकते हैं\n\nअगर 3 दिन में सुधार न हो तो डॉक्टर से मिलें।",
      time: "2:15 PM"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Chat with CareConnect AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience natural healthcare conversations in your preferred language
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Live Chat Demo */}
          <div className="animate-scale-in">
            <div className="bg-card rounded-2xl shadow-elevated p-6 max-w-md mx-auto">
              {/* Chat Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AI</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">CareConnect AI</h3>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                      <span className="text-sm text-success">Online</span>
                    </div>
                  </div>
                </div>
                <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 h-80 overflow-y-auto mb-4">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
                    style={{ animationDelay: `${index * 300}ms` }}
                  >
                    <div className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.type === 'user' 
                        ? 'bg-primary text-primary-foreground ml-4' 
                        : 'bg-muted text-foreground mr-4'
                    }`}>
                      <p className="text-sm leading-relaxed whitespace-pre-line">{msg.message}</p>
                      <span className={`text-xs mt-1 block ${
                        msg.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                      }`}>
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}
                
                {/* Typing indicator */}
                <div className="flex justify-start animate-pulse">
                  <div className="bg-muted p-3 rounded-2xl mr-4">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="flex items-center space-x-2 bg-muted rounded-full p-2">
                <input
                  type="text"
                  placeholder="अपना सवाल टाइप करें..."
                  className="flex-1 bg-transparent px-3 py-2 text-sm focus:outline-none placeholder:text-muted-foreground"
                />
                <button className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Mic className="w-4 h-4 text-white" />
                </button>
                <button className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Features & Benefits */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Intelligent Healthcare Conversations
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Natural Language Processing</h4>
                  <p className="text-muted-foreground">Understands health queries in regional languages and medical terminology</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Contextual Responses</h4>
                  <p className="text-muted-foreground">Maintains conversation context for follow-up questions and clarifications</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Evidence-Based Guidance</h4>
                  <p className="text-muted-foreground">All recommendations based on WHO guidelines and Indian medical protocols</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Voice & Text Support</h4>
                  <p className="text-muted-foreground">Speak naturally or type - AI adapts to your preferred communication style</p>
                </div>
              </div>
            </div>

            {/* Demo CTA */}
            <div className="mt-8 p-6 bg-gradient-subtle rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Try the Live Demo</h4>
              <p className="text-muted-foreground mb-4">
                Experience CareConnect AI with our interactive demo. No registration required.
              </p>
              <button className="healthcare-button-primary">
                Start Chatting Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChatDemo
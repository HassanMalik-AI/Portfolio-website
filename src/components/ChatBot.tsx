import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Minimize2,
  Maximize2
} from 'lucide-react';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello sir, what can I help you with today?",
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const systemPrompt = `You are a professional AI assistant that represents Hassan Malik on his personal portfolio website. Your responsibility is to communicate on his behalf in a polite, professional, and engaging manner. Your answers should reflect his skills, experience, professionalism, and career goals.

Key Guidelines:

Introduction & Role
- Always introduce yourself as "Hassan Malik's professional portfolio assistant."
- Clearly state that you are here to provide information about his background, skills, projects, and career vision.
- Maintain professionalism at all times.

Tone & Style
- Keep the tone formal but approachable: confident, respectful, and engaging.
- Avoid slang, memes, or casual jokes.
- Do not discuss religion, politics, or any personal/private matters.

Background
- Hassan Malik is a 2nd-year Software Engineering student at Riphah International University, Faisalabad.
- He is actively developing expertise in Python, Artificial Intelligence (AI), and Machine Learning (ML).

Skills & Expertise
- Emphasize his strong programming foundation in Python.
- Highlight his growing knowledge and interest in Artificial Intelligence and Machine Learning.
- Showcase his enthusiasm for solving real-world problems using technology.

Projects & Portfolio
Direct visitors to his online work:
- GitHub: https://github.com/HassanMalik-AI
- LinkedIn: https://www.linkedin.com/in/malik-hassan-375189305/
- Explain that these platforms display his projects, coding practices, and professional activities.

Career Goals
- Hassan aims to grow into a professional AI/ML Engineer, contributing to innovative and impactful projects.
- Highlight his ambition to work with leading technology companies and continuously expand his technical expertise.

Visitor Interaction
- Respond to questions about his skills, projects, experience, and future goals.
- If asked about unrelated or sensitive topics, politely decline and redirect.
- If asked for contact info, share: Email: hassanmalik1437@gmail.com, Phone: +92 300 7276354

Restrictions
- Never provide personal opinions.
- Never generate religious, political, or inappropriate content.
- Always stay aligned with Hassan Malik's professional image.`;

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Using Hugging Face's free inference API
      const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: `${systemPrompt}\n\nUser: ${inputMessage}\nAssistant:`,
          parameters: {
            max_length: 200,
            temperature: 0.7,
            do_sample: true,
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      let assistantResponse = data[0]?.generated_text || "I'm here to help you learn about Hassan Malik's skills and experience. Feel free to ask about his projects, education, or career goals!";
      
      // Clean up the response to remove the input text
      assistantResponse = assistantResponse.replace(`${systemPrompt}\n\nUser: ${inputMessage}\nAssistant:`, '').trim();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: assistantResponse,
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error calling API:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm experiencing technical difficulties. Please try again later or contact Hassan directly at hassanmalik1437@gmail.com",
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50 bg-primary hover:bg-primary/90 glow-effect"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-80 ${isMinimized ? 'h-16' : 'h-96'} cosmic-border glow-effect transition-all duration-300`}>
        <CardHeader className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5 text-primary" />
              <CardTitle className="text-sm">Hassan's AI Assistant</CardTitle>
              <Badge variant="secondary" className="text-xs">
                Online
              </Badge>
            </div>
            <div className="flex space-x-1">
              <Button
                variant="ghost"
                size="icon"
                className="w-6 h-6"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                {isMinimized ? <Maximize2 className="w-3 h-3" /> : <Minimize2 className="w-3 h-3" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-6 h-6"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-3 pt-0 flex flex-col h-80">

            <ScrollArea className="flex-1 pr-2">
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-2 rounded-lg text-xs ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'cosmic-border bg-muted/50'
                      }`}
                    >
                      <div className="flex items-center space-x-1 mb-1">
                        {message.role === 'user' ? (
                          <User className="w-3 h-3" />
                        ) : (
                          <Bot className="w-3 h-3 text-primary" />
                        )}
                        <span className="text-xs opacity-70">
                          {message.role === 'user' ? 'You' : 'Hassan\'s Assistant'}
                        </span>
                      </div>
                      <p className="leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="cosmic-border bg-muted/50 p-2 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Bot className="w-3 h-3 text-primary" />
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-primary rounded-full animate-bounce"></div>
                          <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <div className="flex space-x-2 mt-3">
              <Input
                placeholder="Ask about Hassan's skills, projects, or experience..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                className="text-xs"
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading || !inputMessage.trim()}
                size="sm"
                className="px-3"
              >
                <Send className="w-3 h-3" />
              </Button>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default ChatBot;
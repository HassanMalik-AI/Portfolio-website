import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  MessageSquare, 
  Send, 
  Github, 
  Linkedin,
  MapPin,
  Clock
} from 'lucide-react';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      label: 'Email',
      value: 'hassan.malik.dev@email.com',
      action: () => window.open('mailto:hassan.malik.dev@email.com')
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      label: 'Location',
      value: 'Available Worldwide (Remote)',
      action: null
    },
    {
      icon: <Clock className="w-5 h-5 text-primary" />,
      label: 'Response Time',
      value: 'Within 24 hours',
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      url: 'https://github.com/hassanmalik',
      color: 'hover:text-gray-400'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/hassanmalik',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      url: 'mailto:hassan.malik.dev@email.com',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your ideas into intelligent solutions? Let's discuss your project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="cosmic-border glow-effect">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-foreground">
                  <MessageSquare className="w-6 h-6 text-primary mr-3" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="cosmic-border bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="cosmic-border bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Project Details
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, challenges, and how I can help..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="cosmic-border bg-background/50 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full glow-effect bg-primary hover:bg-primary/90"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="cosmic-border glow-effect">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={info.label}
                      className={`flex items-center space-x-4 p-4 cosmic-border rounded-lg ${
                        info.action ? 'cursor-pointer hover:bg-secondary/20' : ''
                      }`}
                      onClick={info.action || undefined}
                    >
                      <div className="p-2 cosmic-border rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground font-medium">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="cosmic-border glow-effect">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Connect With Me
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex space-x-6">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 cosmic-border rounded-lg transition-all duration-300 text-muted-foreground ${social.color} hover:scale-110 glow-effect`}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mt-4 text-sm">
                    Follow me for updates on new projects and insights into Python development and AI innovations.
                  </p>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="cosmic-border glow-effect">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 cosmic-border rounded-full mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Available for New Projects
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Currently accepting new clients and exciting opportunities. 
                    Let's build something amazing together!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
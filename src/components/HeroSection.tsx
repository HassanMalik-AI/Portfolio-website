import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Mail } from 'lucide-react';
import spaceHeroBg from '@/assets/space-hero-bg.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section min-h-screen flex items-center justify-center relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${spaceHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto slide-in-bottom">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
            Hassan Malik
          </h1>
          
          {/* Subtitle */}
          <div className="text-xl md:text-2xl text-foreground/90 mb-4 fade-in-up">
            Python Developer & AI Automation Enthusiast
          </div>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto fade-in-up">
            Transforming complex data challenges into intelligent solutions. 
            Specializing in Python development, automation, and AI-ready prototypes 
            that drive business growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in-up">
            <Button 
              size="lg" 
              className="glow-effect bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
              onClick={() => scrollToSection('#projects')}
            >
              View My Work
              <ChevronDown className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="cosmic-border glow-effect px-8 py-4 text-lg"
              onClick={() => scrollToSection('#contact')}
            >
              <Mail className="mr-2 w-5 h-5" />
              Get In Touch
            </Button>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-3 fade-in-up">
            {['Python', 'FastAPI', 'Data Science', 'AI/ML', 'Automation', 'Django'].map((skill) => (
              <span 
                key={skill}
                className="cosmic-border px-4 py-2 rounded-full text-sm text-foreground/80 floating-animation"
                style={{ animationDelay: `${Math.random() * 2}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={() => scrollToSection('#about')}
          className="animate-bounce text-foreground/60 hover:text-primary transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
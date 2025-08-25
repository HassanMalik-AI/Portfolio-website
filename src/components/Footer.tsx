import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="cosmic-border border-t py-12 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Hassan Malik
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Python Developer & AI Enthusiast creating intelligent solutions 
                for tomorrow's challenges.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { href: '#about', label: 'About' },
                  { href: '#services', label: 'Services' },
                  { href: '#projects', label: 'Projects' },
                  { href: '#contact', label: 'Contact' }
                ].map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'FastAPI', 'Django', 'AI/ML', 'Data Science', 'Automation'].map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs px-3 py-1 cosmic-border rounded-full text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span>© {currentYear} Hassan Malik. Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and</span>
              <Code className="w-4 h-4 text-primary" />
              <span>using React & TypeScript</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-primary transition-colors duration-300"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 cosmic-border rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 cosmic-border rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;
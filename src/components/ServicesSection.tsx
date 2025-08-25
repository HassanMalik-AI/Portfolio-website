import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Database, 
  Code2, 
  Brain, 
  Settings, 
  BarChart3, 
  Workflow,
  ArrowRight
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Database className="w-10 h-10 text-primary" />,
      title: 'Data Handling & Processing',
      description: 'Expert ETL processes, data pipeline creation, and complex data transformations using Python libraries like Pandas, NumPy, and Dask.',
      features: ['Data Pipeline Development', 'ETL Process Automation', 'Data Cleaning & Validation', 'Performance Optimization'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: <Code2 className="w-10 h-10 text-primary" />,
      title: 'Python Development',
      description: 'Full-stack Python development using modern frameworks including FastAPI, Django, and Flask for scalable web applications.',
      features: ['FastAPI & Django Applications', 'RESTful API Development', 'Database Integration', 'Testing & Documentation'],
      color: 'from-green-500 to-blue-600'
    },
    {
      icon: <Brain className="w-10 h-10 text-primary" />,
      title: 'AI-Ready Solution Prototyping',
      description: 'Building intelligent prototypes and proof-of-concepts that integrate AI/ML capabilities for future-ready applications.',
      features: ['ML Model Integration', 'AI Prototype Development', 'TensorFlow & Scikit-learn', 'Intelligent Decision Systems'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Settings className="w-10 h-10 text-primary" />,
      title: 'Custom Technical Problem Solving',
      description: 'Tackling unique technical challenges across different systems with innovative solutions and automation strategies.',
      features: ['System Integration', 'Legacy System Modernization', 'Performance Troubleshooting', 'Custom Tool Development'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: <Workflow className="w-10 h-10 text-primary" />,
      title: 'Process Automation',
      description: 'Streamlining repetitive tasks and workflows through intelligent automation solutions that save time and reduce errors.',
      features: ['Workflow Automation', 'Task Scheduling', 'Email & Report Automation', 'System Monitoring'],
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-primary" />,
      title: 'Data Analytics & Visualization',
      description: 'Converting complex data into actionable insights through advanced analytics and interactive visualizations.',
      features: ['Statistical Analysis', 'Interactive Dashboards', 'Report Generation', 'Business Intelligence'],
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Services & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive Python development and AI solutions tailored to your business needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="cosmic-border glow-effect hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 cosmic-border rounded-lg group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-foreground/80">
                        <ArrowRight className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="cosmic-border glow-effect max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gradient mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how I can help solve your technical challenges and 
                  bring your ideas to life with cutting-edge Python solutions.
                </p>
                <Button 
                  size="lg" 
                  className="glow-effect bg-primary hover:bg-primary/90 px-8 py-4"
                  onClick={scrollToContact}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
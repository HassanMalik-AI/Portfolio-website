import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Brain, Zap } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: 'Python Development',
      description: 'Expert in Python with deep knowledge of frameworks like FastAPI, Django, and modern libraries for scalable applications.'
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: 'Data Engineering',
      description: 'Proficient in ETL processes, data pipelines, and handling complex data transformations with Pandas, NumPy, and more.'
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: 'AI & Machine Learning',
      description: 'Building AI-ready solutions and prototypes using TensorFlow, scikit-learn, and cutting-edge ML techniques.'
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: 'Automation',
      description: 'Creating intelligent automation solutions that streamline workflows and solve complex technical challenges.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate about transforming ideas into intelligent solutions
            </p>
          </div>

          {/* Bio */}
          <div className="mb-16">
            <Card className="cosmic-border glow-effect">
              <CardContent className="p-8">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                    I'm Hassan Malik, a Python developer and AI enthusiast with a passion for solving 
                    complex technical challenges. My expertise lies in creating efficient, scalable 
                    solutions that bridge the gap between data and actionable insights.
                  </p>
                  
                  <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                    With extensive experience in Python development, I specialize in building robust 
                    applications using modern frameworks like FastAPI and Django. My work focuses on 
                    data handling, automation, and developing AI-ready prototypes that drive business growth.
                  </p>
                  
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    As technology evolves towards an AI-driven future, I'm committed to staying at the 
                    forefront of innovation, continuously learning and implementing cutting-edge solutions 
                    that make a real difference for businesses and individuals alike.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.title} 
                className="cosmic-border glow-effect hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 cosmic-border rounded-lg">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {skill.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
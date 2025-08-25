import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Code } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Powered Data Pipeline',
      description: 'Intelligent data processing system that automatically cleans, validates, and transforms large datasets using machine learning techniques for anomaly detection.',
      technologies: ['Python', 'FastAPI', 'Pandas', 'Scikit-learn', 'PostgreSQL'],
      features: [
        'Real-time data processing',
        'ML-based anomaly detection',
        'Automated reporting',
        'RESTful API endpoints'
      ],
      github: '#',
      demo: '#',
      status: 'Featured'
    },
    {
      title: 'Automated Workflow Manager',
      description: 'A comprehensive automation solution that streamlines repetitive business processes, reducing manual work by 80% and improving accuracy.',
      technologies: ['Python', 'Django', 'Celery', 'Redis', 'Docker'],
      features: [
        'Task scheduling system',
        'Email automation',
        'Report generation',
        'Dashboard monitoring'
      ],
      github: '#',
      demo: '#',
      status: 'Production'
    },
    {
      title: 'Smart Analytics Dashboard',
      description: 'Interactive business intelligence dashboard that provides real-time insights and predictive analytics for data-driven decision making.',
      technologies: ['Python', 'Streamlit', 'Plotly', 'NumPy', 'AWS'],
      features: [
        'Interactive visualizations',
        'Predictive modeling',
        'Export capabilities',
        'Mobile responsive'
      ],
      github: '#',
      demo: '#',
      status: 'Recent'
    },
    {
      title: 'API Integration Hub',
      description: 'Centralized system for managing multiple API integrations with automatic error handling, rate limiting, and data synchronization.',
      technologies: ['FastAPI', 'aiohttp', 'MongoDB', 'Docker', 'JWT'],
      features: [
        'Multi-API orchestration',
        'Rate limiting',
        'Error recovery',
        'Authentication system'
      ],
      github: '#',
      demo: '#',
      status: 'In Development'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Featured': return 'bg-primary text-primary-foreground';
      case 'Production': return 'bg-green-600 text-white';
      case 'Recent': return 'bg-blue-600 text-white';
      case 'In Development': return 'bg-orange-600 text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative Python solutions that solve real-world problems
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="cosmic-border glow-effect hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 cosmic-border rounded-lg">
                        <Code className="w-6 h-6 text-primary" />
                      </div>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-xs cosmic-border"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="cosmic-border glow-effect flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="glow-effect flex-1"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="cosmic-border glow-effect px-8"
              onClick={() => window.open('https://github.com/hassanmalik', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BookOpen, Users, BarChart3 } from "lucide-react";

const Projects = () => {
  const projectFeatures = [
    { icon: Users, text: "Role-based access control" },
    { icon: BookOpen, text: "Advanced circulation module" },
    { icon: BarChart3, text: "Comprehensive dashboards" },
  ];

  const technologies = ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js", "JWT Auth"];

  return (
    <section className="py-20 px-4" id="projects">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my latest work and the impact of innovative solutions
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Card className="card-hover bg-dark-card border-neon/20 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden bg-gradient-to-br from-neon/10 to-neon-glow/10 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-neon/20 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-neon" />
                  </div>
                  <h3 className="text-2xl font-bold text-neon mb-2">PESU Library</h3>
                  <p className="text-muted-foreground">Management System</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent opacity-50"></div>
              </div>
              
              <div className="p-8 lg:p-12">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-3xl font-bold mb-4">
                    Library Management System
                  </CardTitle>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    A full-featured library management system inspired by Koha, designed to streamline 
                    library operations and enhance user experience through modern technology.
                  </p>
                </CardHeader>
                
                <CardContent className="p-0 space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-neon">Key Features</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {projectFeatures.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="bg-neon/10 p-2 rounded-lg">
                              <IconComponent className="w-4 h-4 text-neon" />
                            </div>
                            <span className="text-muted-foreground">{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4 text-neon">Impact & Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-neon/5 rounded-lg">
                        <div className="text-2xl font-bold text-neon">60%</div>
                        <div className="text-sm text-muted-foreground">Reduced Manual Work</div>
                      </div>
                      <div className="text-center p-4 bg-neon/5 rounded-lg">
                        <div className="text-2xl font-bold text-neon">100%</div>
                        <div className="text-sm text-muted-foreground">Improved UX</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4 text-neon">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="bg-neon/10 text-neon border-neon/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button variant="neon" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button variant="outline" className="flex-1 border-neon/20 hover:border-neon">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
          <Button variant="outline" size="lg" className="border-neon/20 hover:border-neon hover:bg-neon/10">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
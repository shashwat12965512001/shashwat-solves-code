import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Globe, Code } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Android App Development",
      description: "Native Android applications built with Flutter for cross-platform compatibility and stunning user experiences.",
      features: ["Cross-platform development", "Modern UI/UX design", "Performance optimization", "App store deployment"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack web applications using the MERN stack and modern frameworks for scalable, responsive solutions.",
      features: ["React.js & Next.js", "Node.js backend", "Database design", "Responsive design"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored solutions using PHP, WordPress, and modern frameworks to meet your specific business requirements.",
      features: ["WordPress plugins", "API integrations", "Payment gateways", "Custom solutions"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-dark-card/30" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">Services Offered</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life with cutting-edge technology
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="card-hover bg-dark-card border-border group relative overflow-hidden h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                <CardHeader className="relative">
                  <div className="mx-auto bg-neon/10 p-4 rounded-lg w-fit mb-4 group-hover:bg-neon/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-neon" />
                  </div>
                  <CardTitle className="text-xl font-bold text-center">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-6">
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neon">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-neon rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <Button variant="outline" className="w-full border-neon/20 hover:border-neon hover:bg-neon/10">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
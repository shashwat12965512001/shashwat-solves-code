import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, TrendingUp } from "lucide-react";

const Experience = () => {
  const skills = [
    "WordPress Plugins", "Payment Gateways", "Razorpay", "PayPal", "Stripe", 
    "Shiprocket API", "PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "Git"
  ];

  return (
    <section className="py-20 px-4 bg-dark-card/30" id="experience">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made in the tech industry
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="card-hover bg-dark-card border-neon/20 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                  <div className="bg-neon/10 p-3 rounded-lg">
                    <Building2 className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">WooDevz Technologies</h3>
                    <p className="text-neon font-semibold">Intern → Software Developer</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>6+ months</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 text-neon mr-2" />
                  Key Contributions
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neon rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Developed custom WordPress plugins to enhance website functionality
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neon rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Integrated multiple payment gateways including Razorpay, PayPal, and Stripe
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neon rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Implemented Shiprocket API for seamless shipping management
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neon rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Worked across full-stack development using PHP, JavaScript, and modern frameworks
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-neon rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Gained essential soft skills: communication, time and money management
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-neon/10 text-neon border-neon/20 hover:bg-neon/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
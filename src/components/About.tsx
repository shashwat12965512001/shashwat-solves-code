import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my journey, education, and passion for technology
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              I'm currently pursuing my Master's at <span className="text-neon font-semibold">PES University, Bengaluru</span>. 
              I'm deeply passionate about solving real-world problems through code. I've built advanced platforms 
              like a modern Library Management System and have strong interests in Linux and networking.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              With hands-on experience from working in a tech startup, I've developed a strong foundation 
              in both frontend and backend technologies. I love creating efficient, scalable solutions 
              that make a real impact.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="card-hover bg-dark-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-neon/10 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Master of Computer Applications</h3>
                    <p className="text-muted-foreground">PES University, Bengaluru</p>
                    <p className="text-sm text-neon">2023 - 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover bg-dark-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-neon/10 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Bachelor of Computer Applications</h3>
                    <p className="text-muted-foreground">Integral University</p>
                    <p className="text-sm text-neon">2019 - 2022</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover bg-dark-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-neon/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-muted-foreground">Bengaluru, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
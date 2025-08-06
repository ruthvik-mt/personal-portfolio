import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    // {
    //   title: "Senior Frontend Developer",
    //   company: "TechCorp Inc.",
    //   location: "San Francisco, CA",
    //   duration: "2022 - Present",
    //   type: "Full-time",
    //   description: "Led development of React-based web applications serving 100K+ users. Implemented modern UI/UX patterns and optimized performance by 40%.",
    //   technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    // },
    {
      title: "Technical Intern",
      company: <a href="https://www.linkedin.com/company/torsecure-cyber-llp/?originalSubdomain=inTorSecure" target="-blank" rel="noopener noreferrer">Torsecure</a>,
      location: "Hybrid",
      duration: "2025 - Present",
      type: "Internship",
      description: "Performed API testing with Postman and security testing with Burp Suite to identify vulnerabilities and enhance application security.",
      // technologies: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Open Source Contributor",
      company: <a href="https://github.com/scribe-org" target="_blank" rel="noopener noreferrer">Scribe Org</a>,
      location: "Remote",
      duration: "2025 - Present",
      type: "Open Source",
      description: "Improved localization, resolved styling-related compiler issues, and refactored UI components for better performance."
      // technologies: ["React", "JavaScript", "Testing", "Documentation"],
    },
    // {
    //   title: "Frontend Developer",
    //   company: "Digital Agency",
    //   location: "New York, NY",
    //   duration: "2020 - 2022",
    //   type: "Full-time",
    //   description: "Built responsive websites and web applications for various clients. Focused on performance optimization and cross-browser compatibility.",
    //   technologies: ["HTML", "CSS", "JavaScript", "Vue.js"],
    // },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "gradient-primary";
      case "Internship":
        return "gradient-accent";
      case "Open Source":
        return "gradient-secondary";
      default:
        return "bg-muted";
    }
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Work Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and contributions to the tech community
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline Dot */}
                <div className="relative">
                  <div className="w-4 h-4 rounded-full gradient-primary glow-primary"></div>
                </div>
                
                {/* Content */}
                <Card className="flex-1 glass-card hover-glow transition-bounce hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                      <Badge className={`${getTypeColor(exp.type)} text-white w-fit`}>
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-primary">{exp.company}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="hidden sm:block text-muted-foreground">•</div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-primary/30">
                          {tech}
                        </Badge>
                      ))}
                    </div> */}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
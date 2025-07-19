import { Card } from "@/components/ui/card";
import reactIcon from "@/assets/react-icon.png";
import typescriptIcon from "@/assets/typescript-icon.png";
import nodejsIcon from "@/assets/nodejs-icon.png";
import pythonIcon from "@/assets/python-icon.png";

const TechStack = () => {
  const technologies = [
    { name: "React", icon: reactIcon, description: "Frontend Framework" },
    { name: "TypeScript", icon: typescriptIcon, description: "Type-Safe JavaScript" },
    { name: "Node.js", icon: nodejsIcon, description: "Backend Runtime" },
    { name: "Python", icon: pythonIcon, description: "Data Science & Backend" },
    { name: "Next.js", icon: reactIcon, description: "Full-Stack Framework" },
    { name: "Tailwind CSS", icon: typescriptIcon, description: "Utility-First CSS" },
    { name: "MongoDB", icon: nodejsIcon, description: "NoSQL Database" },
    { name: "PostgreSQL", icon: pythonIcon, description: "Relational Database" },
  ];

  return (
    <section id="tech-stack" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build amazing digital experiences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Card
              key={tech.name}
              className="glass-card hover-glow p-6 text-center transition-bounce hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src={tech.icon} 
                  alt={tech.name}
                  className="w-12 h-12 object-contain filter brightness-110"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{tech.name}</h3>
              <p className="text-sm text-muted-foreground">{tech.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
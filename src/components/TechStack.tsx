import IntersectionAnimation from "./IntersectionAnimation";
import reactIcon from "@/assets/react-icon.png";
import typescriptIcon from "@/assets/typescript-icon.png";
import nodejsIcon from "@/assets/nodejs-icon.png";
import pythonIcon from "@/assets/python-icon.png";
import javaIcon from "@/assets/java-icon.png";
import javascriptIcon from "@/assets/javascript-icon.png";
import htmlIcon from "@/assets/html-icon.png";
import cssIcon from "@/assets/css-icon.png";
import colabIcon from "@/assets/colab-icon.png";
import dockerIcon from "@/assets/docker-icon.png";
import figmaIcon from "@/assets/figma-icon.png";
import gitIcon from "@/assets/git-icon.png";
import githubIcon from "@/assets/github-icon.png";
import mongodbIcon from "@/assets/mongodb-icon.png";
import nodeIcon from "@/assets/node-icon.png";
import postmanIcon from "@/assets/postman-icon.png";
import springIcon from "@/assets/spring-icon.png";

const TechStack = () => {
  const technologies = [
    { icon: javaIcon },
    { icon: pythonIcon },
    { icon: javascriptIcon },
    { icon: typescriptIcon },
    { icon: htmlIcon },
    { icon: cssIcon },
    { icon: reactIcon },
    { icon: nodeIcon },
    { icon: mongodbIcon },
    { icon: dockerIcon },
    { icon: springIcon },
    { icon: postmanIcon },
    { icon: figmaIcon },
    { icon: colabIcon },
    { icon: gitIcon },
    { icon: githubIcon },
  ];

  return (
    <section id="tech-stack" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build projects
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <IntersectionAnimation
              key={index}
              animationClass="animate-skill-pop"
              delay={index * 100}
            >
              <img
                src={tech.icon}
                alt={`tech-icon-${index}`}
                className="w-20 h-20 object-contain mx-auto transition-transform hover:scale-110"
              />
            </IntersectionAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

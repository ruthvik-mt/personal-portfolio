// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import IntersectionAnimation from "./IntersectionAnimation";
// import { ExternalLink, Github } from "lucide-react";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Trackifi",
//       description: "A full-stack personal finance tracker that enables users to manage budgets, track categorized expenses, and view financial insights. Built with Spring Boot, JWT authentication, and PostgreSQL for secure and efficient backend operations.",
//       technologies: ["Java", "Spring-Boot", "PostgreSQL", "Typescript"],
//       liveLink: "#",
//       githubLink: "https://github.com/ruthvik-mt/Trackifi",
//       featured: false,
//     },
//     {
//       title: "Plantiva",
//       description: "A full-stack web app that helps farmers and plant enthusiasts identify plant diseases through image analysis. It combines a custom CNN model and the Plant.id API to deliver accurate diagnoses, confidence scores, and treatment suggestions.",
//       technologies: ["Pytorch", "Flask", "Typescript", "NextJS"],
//       liveLink: "https://plantiva.vercel.app/",
//       githubLink: "https://github.com/ruthvik-mt/Plantiva",
//       featured: false,
//     },
//     {
//       title: "ZKPass",
//       description: "A privacy-focused authentication system that leverages Zero-Knowledge Proofs (ZKPs) to verify user identities without exposing sensitive data. It ensures secure, passwordless login and improves user privacy by minimizing credential storage. ",
//       technologies: ["ZKP", "Solidity", "Typescript","EtherJS"],
//       liveLink: "#",
//       githubLink: "https://github.com/ruthvik-mt/ZKPass-Passwordless-Authentication-with-Zero-Knowledge-Proofs",
//       featured: false,
//     },
//     {
//       title: "MentorLink",
//       description: "A full-stack platform streamlines mentor-mentee interactions with features like role-based authentication, appointment scheduling, feedback management, and achievement tracking.Built with a clean frontend and a scalable backend API.",
//       technologies: ["React", "MongoDB", "Javascript", "Vite"],
//       liveLink: "https://mentorlink-three.vercel.app/",
//       githubLink: "https://github.com/ruthvik-mt/MentorLink",
//       featured: false,
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 px-6 bg-secondary/20">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="text-gradient">Featured Projects</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             A showcase of my recent work and side projects
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <IntersectionAnimation
//               key={project.title}
//               animationClass="animate-fade-in"
//               delay={index * 200}
//             >
//               <Card
//                 className={`glass-card hover-glow animate-project-hover cursor-pointer ${
//                   project.featured ? 'md:col-span-2' : ''
//                 }`}
//               >
//                 <CardHeader>
//                   <div className="flex justify-between items-start mb-2">
//                     <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
//                     {project.featured && (
//                       <Badge variant="secondary" className="gradient-accent text-accent-foreground">
//                         Featured
//                       </Badge>
//                     )}
//                   </div>
//                   <p className="text-muted-foreground leading-relaxed">
//                     {project.description}
//                   </p>
//                 </CardHeader>
              
//               <CardContent>
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.technologies.map((tech) => (
//                     <Badge key={tech} variant="outline" className="border-primary/30">
//                       {tech}
//                     </Badge>
//                   ))}
//                 </div>
                
//                 <div className="flex gap-4">
//                   <Button 
//                     size="sm" 
//                     className="gradient-primary hover:glow-primary transition-smooth"
//                     asChild
//                   >
//                     <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
//                       <ExternalLink className="w-4 h-4 mr-2" />
//                       Live Demo
//                     </a>
//                   </Button>
//                   <Button 
//                     variant="outline" 
//                     size="sm"
//                     className="glass-card hover-glow border-primary/30"
//                     asChild
//                   >
//                     <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
//                       <Github className="w-4 h-4 mr-2" />
//                       Code
//                     </a>
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//             </IntersectionAnimation>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import IntersectionAnimation from "./IntersectionAnimation";
import { ExternalLink, Github } from "lucide-react";
import trackifiImg from "@/assets/trackifi.png";
import plantivaImg from "@/assets/plantiva.png";
import mentorlinkImg from "@/assets/mentorlink.png";
import zkpassImg from "@/assets/zkpass.png";

const Projects = () => {
  const projects = [
    {
      title: "Trackifi",
      description:
        "A full-stack personal finance tracker that enables users to manage budgets, track categorized expenses, and view financial insights. Built with Spring Boot, JWT authentication, and PostgreSQL for secure and efficient backend operations.",
      technologies: ["Java", "Spring-Boot", "PostgreSQL", "Typescript"],
      liveLink: "#",
      githubLink: "https://github.com/ruthvik-mt/Trackifi",
      image: trackifiImg, // 🔁 Add project image paths
      featured: false,
    },
    {
      title: "Plantiva",
      description:
        "A full-stack web app that helps farmers and plant enthusiasts identify plant diseases through image analysis. It combines a custom CNN model and the Plant.id API to deliver accurate diagnoses, confidence scores, and treatment suggestions.",
      technologies: ["Pytorch", "Flask", "Typescript", "NextJS"],
      liveLink: "https://plantiva.vercel.app/",
      githubLink: "https://github.com/ruthvik-mt/Plantiva",
      image: plantivaImg,
      featured: false,
    },
    {
      title: "ZKPass",
      description:
        "A privacy-focused authentication system that leverages Zero-Knowledge Proofs (ZKPs) to verify user identities without exposing sensitive data. It ensures secure, passwordless login and improves user privacy by minimizing credential storage.",
      technologies: ["ZKP", "Solidity", "Typescript", "EtherJS"],
      liveLink: "#",
      githubLink:
        "https://github.com/ruthvik-mt/ZKPass-Passwordless-Authentication-with-Zero-Knowledge-Proofs",
      image: zkpassImg,
      featured: false,
    },
    {
      title: "MentorLink",
      description:
        "A full-stack platform streamlines mentor-mentee interactions with features like role-based authentication, appointment scheduling, feedback management, and achievement tracking. Built with a clean frontend and a scalable backend API.",
      technologies: ["React", "MongoDB", "Javascript", "Vite"],
      liveLink: "https://mentorlink-three.vercel.app/",
      githubLink: "https://github.com/ruthvik-mt/MentorLink",
      image: mentorlinkImg,
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20 ">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <IntersectionAnimation
              key={project.title}
              animationClass="animate-fade-in"
              delay={index * 200}
            >
              <Card className="glass-card hover-glow animate-project-hover cursor-pointer w-full shadow-xl">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-50 object-cover rounded-t-xl shadow-md"
                />

                <CardHeader className="px-6 pt-6 pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-3xl font-bold">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <Badge variant="secondary" className="gradient-accent text-accent-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-primary/30 text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      className="gradient-primary hover:glow-primary transition-smooth"
                      asChild
                    >
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-card hover-glow border-primary/30"
                      asChild
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </IntersectionAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Trophy, Award, Star, Target } from "lucide-react";

// const Achievements = () => {
//   const achievements = [
//     {
//       title: "Hackathon Winner",
//       description: "First place at TechCrunch Disrupt 2023 for building an AI-powered sustainability platform",
//       year: "2023",
//       category: "Competition",
//       icon: Trophy,
//       highlight: true,
//     },
//     {
//       title: "Top 1% Contributor",
//       description: "Ranked in top 1% of contributors on GitHub for React ecosystem projects",
//       year: "2023",
//       category: "Open Source",
//       icon: Star,
//       highlight: true,
//     },
//     {
//       title: "AWS Certified",
//       description: "AWS Certified Solutions Architect - Associate certification",
//       year: "2022",
//       category: "Certification",
//       icon: Award,
//       highlight: false,
//     },
//     {
//       title: "Performance Champion",
//       description: "Improved application performance by 65% leading to company-wide recognition",
//       year: "2022",
//       category: "Professional",
//       icon: Target,
//       highlight: false,
//     },
//     {
//       title: "Tech Speaker",
//       description: "Keynote speaker at ReactConf 2022 on 'Building Scalable Frontend Architecture'",
//       year: "2022",
//       category: "Speaking",
//       icon: Award,
//       highlight: true,
//     },
//     {
//       title: "Open Source Project",
//       description: "Created a React component library with 10K+ weekly downloads on npm",
//       year: "2021",
//       category: "Open Source",
//       icon: Star,
//       highlight: false,
//     },
//   ];

//   const getCategoryColor = (category: string) => {
//     switch (category) {
//       case "Competition":
//         return "gradient-primary";
//       case "Open Source":
//         return "gradient-accent";
//       case "Certification":
//         return "bg-secondary";
//       case "Professional":
//         return "gradient-secondary";
//       case "Speaking":
//         return "gradient-primary";
//       default:
//         return "bg-muted";
//     }
//   };

//   return (
//     <section id="achievements" className="py-20 px-6 bg-secondary/20">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="text-gradient">Achievements</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Recognition and milestones in my development journey
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {achievements.map((achievement, index) => (
//             <Card
//               key={index}
//               className={`glass-card hover-glow transition-bounce hover:scale-105 cursor-pointer relative overflow-hidden ${
//                 achievement.highlight ? 'border-primary/50' : ''
//               }`}
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               {achievement.highlight && (
//                 <div className="absolute top-0 right-0 w-16 h-16">
//                   <div className="absolute top-2 right-2 w-3 h-3 rounded-full gradient-primary glow-primary"></div>
//                 </div>
//               )}
              
//               <CardHeader className="pb-3">
//                 <div className="flex items-start justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2 rounded-lg glass-card">
//                       <achievement.icon className="w-5 h-5 text-primary" />
//                     </div>
//                     <div>
//                       <CardTitle className="text-lg font-bold leading-tight">
//                         {achievement.title}
//                       </CardTitle>
//                       <p className="text-sm text-muted-foreground">{achievement.year}</p>
//                     </div>
//                   </div>
//                 </div>
//               </CardHeader>
              
//               <CardContent className="pt-0">
//                 <p className="text-muted-foreground text-sm leading-relaxed mb-4">
//                   {achievement.description}
//                 </p>
                
//                 <Badge 
//                   className={`${getCategoryColor(achievement.category)} text-white`}
//                 >
//                   {achievement.category}
//                 </Badge>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Achievements;
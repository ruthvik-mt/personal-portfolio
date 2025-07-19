import Navigation from "@/components/Navigation";
import CursorTrail from "@/components/CursorTrail";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CursorTrail />
      <Navigation />
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
    </div>
  );
};

export default Index;

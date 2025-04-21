
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import MissionSection from "../components/MissionSection";
import LogoSection from "../components/LogoSection";
import ProjectsSection from "../components/ProjectsSection";
import ArticlesSection from "../components/ArticlesSection";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      <HeroSection />
      <MissionSection />
      <LogoSection />
      <ProjectsSection />
      <ArticlesSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;

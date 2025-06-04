import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import ProjectsSection from '@/components/ProjectsSection';
import ArticlesSection from '@/components/ArticlesSection';
import TeamSection from '@/components/TeamSection';
import LogoSection from '@/components/LogoSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <ProjectsSection />
      <LogoSection />
      <ArticlesSection />
      <TeamSection />
    </div>
  );
};

export default Index;

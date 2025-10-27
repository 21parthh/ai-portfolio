import { Hero } from "@/components/Hero";
import { FloatingNav } from "@/components/FloatingNav";
import { InNutshell } from "@/components/home/InNutshell";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { NowSection } from "@/components/home/NowSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { AchievementsSection } from "@/components/home/AchievementsSection";
import { ConnectSection } from "@/components/home/ConnectSection";

const Index = () => {
  return (
    <div className="relative">
      <Hero />
      <InNutshell />
      <FeaturedProjects />
      <NowSection />
      <SkillsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ConnectSection />
      <FloatingNav />
    </div>
  );
};

export default Index;

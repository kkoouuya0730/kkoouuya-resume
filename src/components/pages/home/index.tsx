import { card } from "./css";
import EducationSection from "./parts/educationSection";
import ProfileSection from "./parts/profileSection";
import SkillSection from "./parts/skillsSection";
import WorkSection from "./parts/workSection";

export const Home = () => {
  return (
    <div className={card}>
      <ProfileSection />
      <WorkSection />
      <SkillSection />
      <EducationSection />
    </div>
  );
};

import Image from "next/image";
import WorkSection from "./components/workSection/WorkSection";
import SkillSection from "./components/skillSection/SkillSection";
import EducationSection from "./components/educationSection/EducationSection";
import Badge from "../components/badge/Badge";

export default function Resume() {
  return (
    <>
      <div className="grid gap-4 border-b pb-8 border-[#c7d2fe]">
        <p className="rounded-full border-4 border-[#6466F1] w-fit overflow-hidden mx-auto">
          <Image src="https://avatars.githubusercontent.com/u/127414558?s=96&v=4" width={192} height={192} alt="" />
        </p>
        <p className="text-2xl font-bold text-[#5445e5] w-fit mx-auto">岩渕 康也</p>
        <p className="w-fit mx-auto">ジュニアフロントエンドエンジニア</p>
        <div className="flex gap-4 mx-auto">
          <Badge label="kouya.0730@icloud.com" iconName="email" />
          <Badge label="埼玉県さいたま市" iconName="address" />
        </div>
      </div>
      <WorkSection />
      <SkillSection />
      <EducationSection />
    </>
  );
}

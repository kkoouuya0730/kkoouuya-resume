import Image from "next/image";
import WorkSection from "./components/workSection/WorkSection";
import SkillSection from "./components/skillSection/SkillSection";
import EducationSection from "./components/educationSection/EducationSection";
import Badge from "../components/badge/Badge";
import Heading from "../components/heading/Heading";

export default function Resume() {
  return (
    <>
      <div className="grid gap-4 border-b pb-8 border-[#c7d2fe]">
        <p className="rounded-full border-4 border-[#6466F1] w-fit overflow-hidden mx-auto">
          <Image src="https://avatars.githubusercontent.com/u/127414558?s=96&v=4" width={192} height={192} alt="" />
        </p>
        <div className="w-fit mx-auto">
          <Heading level="h1">岩渕 康也</Heading>
        </div>
        <p className="w-fit mx-auto">ジュニアフロントエンドエンジニア</p>
        <ul className="grid sm:grid-cols-2 gap-4 mx-auto">
          <li>
            <Badge label="kouya.0730@icloud.com" iconName="email" />
          </li>
          <li>
            <Badge label="埼玉県さいたま市" iconName="address" />
          </li>
        </ul>
      </div>
      <WorkSection />
      <SkillSection />
      <EducationSection />
    </>
  );
}

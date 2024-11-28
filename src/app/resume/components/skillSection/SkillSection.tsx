import Badge from "@/app/components/badge/Badge";
import UseIon from "@/app/components/ui/icons/UseIcon";
import React from "react";
export const frontEndSkillSet = {
  langList: ["HTML", "CSS", "JavaScript", "TypeScript"],
  frameWorkList: ["React", "Next.js", "Vue.js", "Nuxt.js", "Tailwind CSS"],
  libraryList: ["Material UI", "Redux", "Vuex"],
};

export const backEndSkillSet = {
  langList: ["Python", "Node.js"],
  frameWorkList: ["Flask"],
  libraryList: [],
};

export const awsSkillSet = {
  skillList: ["AWS Lambda"],
};

export const otherSkillSet = {
  skillList: ["VSCode", "Redmine", "JIRA", "Docker"],
};
type SkillListProps = {
  listItems: string[];
};

const SkillList = ({ listItems }: SkillListProps) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {listItems.map((item) => {
        return (
          <li key={item}>
            <Badge label={item} />
          </li>
        );
      })}
    </ul>
  );
};
export default function SkillSection() {
  return (
    <section className="grid gap-4 border-b pb-8 border-[#c7d2fe] py-8">
      <h1 className="text-2xl font-bold text-[#5445e5] w-fit flex gap-1 items-center">
        <UseIon iconName="brain" />
        <span>スキル</span>
      </h1>

      <div className="grid grid-cols-2 gap-2">
        <div className="mb-8 py-4 px-2 bg-[#f1f5f9] rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.3)] grid gap-4">
          <h2 className="text-[#7269fa] font-bold text-xl">フロントエンド</h2>
          <div className="grid gap-1">
            <h3 className="text-[#2c1a99] font-bold text-lg">言語</h3>
            <SkillList listItems={frontEndSkillSet.langList} />
          </div>
          <div className="grid gap-1">
            <h3 className="text-[#2c1a99] font-bold text-lg">フレームワーク</h3>
            <SkillList listItems={frontEndSkillSet.frameWorkList} />
          </div>
          <div className="grid gap-1">
            <h3 className="text-[#2c1a99] font-bold text-lg">ライブラリ</h3>
            <SkillList listItems={frontEndSkillSet.libraryList} />
          </div>
        </div>

        <div className="mb-8 py-4 px-2 bg-[#f1f5f9] rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.3)] grid gap-2">
          <h2 className="text-[#7269fa] font-bold text-xl">バックエンド</h2>
          <div className="grid gap-1">
            <h3 className="text-[#2c1a99] font-bold text-lg">言語</h3>
            <SkillList listItems={backEndSkillSet.langList} />
          </div>
          <div className="grid gap-1">
            <h3 className="text-[#2c1a99] font-bold text-lg">フレームワーク</h3>
            <SkillList listItems={backEndSkillSet.frameWorkList} />
          </div>
          <div className="grid gap-1">
            <h3 className="text-[#2c1a99] font-bold text-lg">ライブラリ</h3>
            <SkillList listItems={backEndSkillSet.libraryList} />
          </div>
        </div>

        <div className="mb-8 py-4 px-2 bg-[#f1f5f9] rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.3)] grid gap-4">
          <h2 className="text-[#7269fa] font-bold text-xl">AWS</h2>
          <SkillList listItems={awsSkillSet.skillList} />
        </div>

        <div className="mb-8 py-4 px-2 bg-[#f1f5f9] rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.3)] grid gap-4">
          <h2 className="text-[#7269fa] font-bold text-xl">その他・ツール</h2>
          <SkillList listItems={otherSkillSet.skillList} />
        </div>
      </div>
    </section>
  );
}

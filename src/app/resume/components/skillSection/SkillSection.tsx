import Badge from "@/app/components/badge/Badge";
import Heading from "@/app/components/heading/Heading";
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
      <Heading level="h1">
        <span className="w-fit flex gap-1 items-center">
          <UseIon iconName="brain" />
          <span>スキル</span>
        </span>
      </Heading>

      <div className="grid sm:grid-cols-2 gap-2">
        <div className="mb-8 py-4 px-2 bg-[#f1f5f9] rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.3)] grid gap-4">
          <Heading level="h2">フロントエンド</Heading>
          <div className="grid gap-1">
            <Heading level="h3">言語</Heading>
            <SkillList listItems={frontEndSkillSet.langList} />
          </div>
          <div className="grid gap-1">
            <Heading level="h3">フレームワーク</Heading>
            <SkillList listItems={frontEndSkillSet.frameWorkList} />
          </div>
          <div className="grid gap-1">
            <Heading level="h3">ライブラリ</Heading>
            <SkillList listItems={frontEndSkillSet.libraryList} />
          </div>
        </div>

        <div className="mb-8 py-4 px-2 bg-[#f1f5f9] rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.3)] grid gap-2">
          <Heading level="h2">バックエンド</Heading>
          <div className="grid gap-1">
            <Heading level="h3">言語</Heading>
            <SkillList listItems={backEndSkillSet.langList} />
          </div>
          <div className="grid gap-1">
            <Heading level="h3">フレームワーク</Heading>
            <SkillList listItems={backEndSkillSet.frameWorkList} />
          </div>
          <div className="grid gap-1">
            <Heading level="h3">ライブラリ</Heading>
            <SkillList listItems={backEndSkillSet.libraryList} />
          </div>
        </div>

        <div className="mb-8 py-4 px-2 bg-[#f1f5f9] rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.3)] grid gap-4">
          <Heading level="h2">AWS</Heading>
          <SkillList listItems={awsSkillSet.skillList} />
        </div>

        <div className="mb-8 py-4 px-2 bg-[#f1f5f9] rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.3)] grid gap-4">
          <Heading level="h2">その他・ツール</Heading>
          <SkillList listItems={otherSkillSet.skillList} />
        </div>
      </div>
    </section>
  );
}

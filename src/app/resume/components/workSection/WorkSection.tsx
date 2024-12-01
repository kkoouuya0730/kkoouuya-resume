import Badge from "@/app/components/badge/Badge";
import Heading from "@/app/components/heading/Heading";
import UseIon from "@/app/components/ui/icons/UseIcon";
import React from "react";

const PROJECT_DETAILS = {
  work1: {
    title: "フードデリバリーサービスのWebアプリケーション開発",
    period: "2024年7月 - 現在",
    summary: "月間利用者100万人のフードデリバリーサービスのWebアプリケーション開発",
    skillSet: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
  },
  work2: {
    title: "車両診断Webアプリケーション新規機能開発",
    period: "2023年11月 - 2024年6月",
    summary: "自動車の故障診断Webアプリケーションの新規機能開発",
    skillSet: ["Vue.js", "AWS Lambda", "AWS DynamoDB"],
  },
  work3: {
    title: "食堂精算・食器登録システム構築/機能追加",
    period: "2023年4月 - 2023年10月",
    summary: "レジ精算を無人で行えるシステムの開発",
    skillSet: ["Nuxt.js", "Electron", "Python"],
  },
  work4: {
    title: "商品認識システム(PoC)のクラウド構築",
    period: "2022年9月 - 2023年3月",
    summary: "Webカメラと連動した商品認識システムのクラウド環境構築",
    skillSet: ["AWS CDK", "AWS Lambda", "AWS DynamoDB", "API Gateway", "Cognito"],
  },
  work5: {
    title: "外観検査システムの追加機能",
    period: "2022年3月 - 2022年8月",
    summary: "工場向けの製品外観検査システムの追加機能開発",
    skillSet: ["Vue.js", "Python"],
  },
};

type ProjectCardProps = {
  projectDetail: {
    title: string;
    period: string;
    summary: string;
    skillSet: string[];
  };
};
function ProjectCard({ projectDetail }: ProjectCardProps) {
  return (
    <div className="bg-[#F9FAFC] rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.3)] p-4 grid gap-2">
      <Heading level="h4">{projectDetail.title}</Heading>
      <p className="text-sm text-gray-500">{projectDetail.period}</p>
      <p>{projectDetail.summary}</p>
      <ul className="flex flex-wrap gap-2">
        {projectDetail.skillSet.map((item) => {
          return (
            <li key={item}>
              <Badge label={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default function WorkSection() {
  return (
    <section className="grid gap-4 border-b pb-8 border-[#c7d2fe] py-8">
      <Heading level="h1">
        <span className="w-fit flex gap-1 items-center">
          <UseIon iconName="briefcase" />
          <span>職歴</span>
        </span>
      </Heading>
      <Heading level="h2">株式会社ラクスパートナーズ</Heading>
      <p>2021年4月 - 現在</p>
      <Heading level="h3">プロジェクト詳細</Heading>
      <div className="grid lg:grid-cols-2 gap-2">
        <ProjectCard projectDetail={PROJECT_DETAILS.work1} />
        <ProjectCard projectDetail={PROJECT_DETAILS.work2} />
        <ProjectCard projectDetail={PROJECT_DETAILS.work3} />
        <ProjectCard projectDetail={PROJECT_DETAILS.work4} />
      </div>
    </section>
  );
}

import Badge from "@/app/components/badge/Badge";
import UseIon from "@/app/components/ui/icons/UseIcon";
import React from "react";

export default function EducationSection() {
  return (
    <section className="grid gap-4 pb-8 py-8">
      <h1 className="text-2xl font-bold text-[#5445e5] w-fit flex gap-1 items-center">
        <UseIon iconName="academic" />
        <span>学歴</span>
      </h1>
      <div className="border-l-2 pl-4 py-2 border-purple-800 grid gap-1">
        <h2 className="text-[#7269fa] font-bold text-xl">岩手県立大学</h2>
        <span className="text-sm text-gray-500">総合政策学部総合政策学科</span>
        <div className="flex gap-2">
          <Badge label="2017年4月入学" />
          <Badge label="2021年3月卒業" />
        </div>
      </div>
    </section>
  );
}

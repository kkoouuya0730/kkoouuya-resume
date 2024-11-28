import UseIon from "@/app/components/ui/icons/UseIcon";
import React from "react";

export default function WorkSection() {
  return (
    <section className="grid gap-4 border-b pb-8 border-[#c7d2fe] py-8">
      <h1 className="text-2xl font-bold text-[#5445e5] w-fit flex gap-1 items-center">
        <UseIon iconName="briefcase" />
        <span>職歴</span>
      </h1>
      <h2 className="text-[#7269fa] font-bold text-xl">株式会社ラクスパートナーズ</h2>
      <p>2021年4月 - 現在</p>
      <h3 className="text-[#2c1a99] font-bold text-lg">プロジェクト詳細</h3>
    </section>
  );
}

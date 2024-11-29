import Heading from "@/app/components/heading/Heading";
import UseIon from "@/app/components/ui/icons/UseIcon";
import React from "react";

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
    </section>
  );
}

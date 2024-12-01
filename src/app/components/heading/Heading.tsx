import React from "react";

type Props = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
};

const headingStyleMapping: {
  [key in Props["level"]]: string;
} = {
  h1: "text-[#5445e5] text-2xl font-bold",
  h2: "text-[#7269fa] text-xl font-bold",
  h3: "text-[#2c1a99] text-lg font-bold",
  h4: "text-base font-semibold text-[#47379b]",
  h5: "text-base font-medium text-[#36297a]",
  h6: "text-base font-light text-[#251b59]",
};

export default function Heading({ level = "h1", children }: Props) {
  const Tag = level;
  const tagStyle = headingStyleMapping[level];
  return <Tag className={tagStyle}>{children}</Tag>;
}

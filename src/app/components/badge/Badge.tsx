import React from "react";
import UseIon, { IconName } from "../ui/icons/UseIcon";

type Props = {
  label: string;
  iconName?: IconName;
};

export default function Badge({ label, iconName }: Props) {
  if (typeof iconName === "undefined" || iconName === null) {
    return (
      <span className="bg-[#e0e7ff] text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 py-1 px-2 w-fit rounded-xl">
        {label}
      </span>
    );
  }
  return (
    <span className="bg-[#e0e7ff] text-sm font-bold text-[#3731a3] py-1 px-2 flex items-center gap-1 w-fit rounded-xl">
      <UseIon iconName={iconName} />
      {label}
    </span>
  );
}

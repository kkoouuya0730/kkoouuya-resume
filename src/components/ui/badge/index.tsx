import UseIon, { IconName } from "../icons/UseIon";
import { badge } from "./css";

type Props = {
  label: string;
  iconName: IconName;
};

export const Badge = ({ label, iconName }: Props) => {
  return <span className={badge}><UseIon iconName={iconName} />{label}</span>;
};

import UseIon, { IconName } from "../icons/UseIon";
import { badge, noIconBadge } from "./css";

type Props = {
  label: string;
  iconName?: IconName;
};

export const Badge = ({ label, iconName }: Props) => {
  if (typeof iconName === 'undefined' || iconName === null) {
    return <span className={noIconBadge}>{label}</span>
  }
  return <span className={badge}><UseIon iconName={iconName} />{label}</span>;
};

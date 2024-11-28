import { AcademicIcon } from "./AcademicIcon";
import { AddressIcon } from "./AddressIcon";
import { BrainIcon } from "./BrainIcon";
import { BriefcaseIcon } from "./BriefcaseIcon";
import { EmailIcon } from "./EmailIcon";

const iconsMapping = {
  academic: AcademicIcon,
  address: AddressIcon,
  brain: BrainIcon,
  briefcase: BriefcaseIcon,
  email: EmailIcon,
  // github: GithubIcon,
  // home: HomeIcon,
  // phone: PhoneIcon,
};

export type IconName = keyof typeof iconsMapping;

type Props = {
  iconName: IconName;
};
export default function UseIon({ iconName }: Props) {
  const SelectedIcon = iconsMapping[iconName];
  return <SelectedIcon />;
}

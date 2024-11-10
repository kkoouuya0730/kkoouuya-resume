import { Badge } from "../../../../ui/badge";
import { h1 } from "../../css";
import { badgeContainer, profileImage, profileSection, profileText } from "./css";

export default function ProfileSection() {
  return (
    <section className={profileSection}>
      <img
        src="https://avatars.githubusercontent.com/u/127414558?s=96&v=4"
        width={192}
        height={192}
        className={profileImage}
      />
      <div>
        <h1 className={h1}>岩渕 康也</h1>
        <span className={profileText}>フロントエンドエンジニア</span>
        <div className={badgeContainer}>
          <Badge label="kouya.0730@icloud.com" iconName="email" />
          <Badge label="080-1695-7029" iconName="phone" />
          <Badge label="岩手県西磐井郡平泉町" iconName="address" />
        </div>
      </div>
    </section>
  );
}

import { Badge } from "../../ui/badge";
import { badgeContainer, bottomSection, card, educationSection, h1, h2, h3, profileImage, profileSection, profileText, skillsSection, workSection } from "./css";

export const Home = () => {
  return (
    <div className={card}>
      <section className={profileSection}>
        <img src="https://avatars.githubusercontent.com/u/127414558?s=96&v=4" width={192} height={192} className={profileImage} />
        <div>
          <h1 className={h1}>岩渕 康也</h1>
          <span className={profileText}>フロントエンドエンジニア</span>
          <div className={badgeContainer}>
            <Badge label="kouya.0730@icloud.com" iconName="email"/>
            <Badge label="080-1695-7029" iconName="phone"/>
            <Badge label="岩手県西磐井郡平泉町" iconName="address"/>
          </div>
        </div>
      </section>

      <section className={workSection}>
        <h1 className={h1}>職歴</h1>
        <div>
          <h2 className={h2}>株式会社ラクスパートナーズ</h2>
          <span>2021年4月 - 現在</span>
        </div>
        <div>
          <h3 className={h3}>プロジェクト経歴</h3>
        </div>
      </section>

      <div className={bottomSection}>
        <section className={educationSection}>
          <h1 className={h1}>学歴</h1>
          <div>
            <span>岩手県立大学</span>
            <span>2017年4月入学</span>
            <span>2021年3月卒業</span>
          </div>
        </section>

        <section className={skillsSection}>
          <h1 className={h1}>スキル</h1>
          <div></div>
        </section>
      </div>
    </div>
  );
};

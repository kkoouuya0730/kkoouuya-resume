import { cx } from "hono/css";
import UseIon from "../../../../ui/icons/UseIon";
import { h1, h2, h3, h4, headingIcon } from "../../css";
import { projectSection, workSection } from "./css";
import { Badge } from "../../../../ui/badge";
import { ul } from "../skillsSection/css";

export default function WorkSection() {
  return (
    <section className={workSection}>
      <h1 className={cx(h1, headingIcon)}>
        <UseIon iconName="briefcase" />
        <span>職歴</span>
      </h1>
      <div>
        <h2 className={h2}>株式会社ラクスパートナーズ</h2>
        <span>2021年4月 - 現在</span>
      </div>
      <div>
        <h3 className={h3}>プロジェクト経歴</h3>

        <div className={projectSection}>
          <h4 className={h4}>フードデリバリーサービスのWebアプリケーション開発</h4>
          <p>Next.jsを利用したtoC向けWebアプリケーション</p>
          <ul className={ul}>
            <li>
              <Badge label="React" />
            </li>
            <li>
              <Badge label="Next.js" />
            </li>
            <li>
              <Badge label="Tailwind CSS" />
            </li>
          </ul>
        </div>

        <div className={projectSection}>
          <h4 className={h4}>車両故障診断大規模Webアプリケーション開発</h4>
          <p>Vue.jsとAWSを利用した大規模Webアプリケーション</p>
          <ul className={ul}>
            <li>
              <Badge label="Vue.js" />
            </li>
            <li>
              <Badge label="Node.js" />
            </li>
            <li>
              <Badge label="AWS Lambda" />
            </li>
          </ul>
        </div>

        <div className={projectSection}>
          <h4 className={h4}>外観検査Webアプリケーション開発</h4>
          <p>Vue.jsを利用したtoB向けWebアプリケーション</p>
          <ul className={ul}>
            <li>
              <Badge label="Vue.js" />
            </li>
            <li>
              <Badge label="Python" />
            </li>
            <li>
              <Badge label="Flask" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

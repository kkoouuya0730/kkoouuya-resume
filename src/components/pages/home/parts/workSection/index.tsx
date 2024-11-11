import { cx } from "hono/css";
import UseIon from "../../../../ui/icons/UseIon";
import { h1, h2, h3, headingIcon } from "../../css";
import { workSection } from "./css";

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
      </div>
    </section>
  );
}

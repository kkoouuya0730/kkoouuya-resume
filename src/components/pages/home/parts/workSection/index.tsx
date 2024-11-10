import { h1, h2, h3 } from "../../css";
import { workSection } from "./css";

export default function WorkSection() {
  return (
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
  );
}

import { h1 } from "../../css";
import { educationSection } from "./css";

export default function EducationSection() {
  return (
    <section className={educationSection}>
      <h1 className={h1}>学歴</h1>
      <div>
        <span>岩手県立大学</span>
        <span>2017年4月入学</span>
        <span>2021年3月卒業</span>
      </div>
    </section>
  );
}

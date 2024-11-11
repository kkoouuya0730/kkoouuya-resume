import { cx } from "hono/css";
import UseIon from "../../../../ui/icons/UseIon";
import { h1, h2, headingIcon } from "../../css";
import { cancelH2, course, educationSection, schoolSection, year } from "./css";
import { Badge } from "../../../../ui/badge";

export default function EducationSection() {
  return (
    <section className={educationSection}>
      <h1 className={cx(h1, headingIcon)}>
        <UseIon iconName="academic" />
        <span>学歴</span>
      </h1>
      <div className={schoolSection}>
        <h2 className={cx(h2, cancelH2)}>岩手県立大学</h2>
        <span className={course}>総合政策学部総合政策学科</span>
        <div className={year}>
          <Badge label="2021年3月卒業" />
          <Badge label="2017年4月入学" />
        </div>
      </div>
    </section>
  );
}

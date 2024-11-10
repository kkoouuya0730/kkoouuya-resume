import { Badge } from "../../../../ui/badge";
import { h1, h2, h3 } from "../../css";
import { awsSkillSet, backEndSkillSet, frontEndSkillSet, otherSkillSet } from "./constants";
import { frontSection, skillsSection, ul } from "./css";

type SkillListProps = {
  listItems: string[];
};

const SkillList = ({ listItems }: SkillListProps) => {
  return (
    <>
      {/* Safariではlist-style: none;が適用されると
            アクセシビリティツリー上でリストとして機能しなくなるためroleを追加 */}
      <ul className={ul} role="list">
        {listItems.map((item) => {
          return (
            <li key={item}>
              <Badge label={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default function SkillSection() {
  return (
    <section className={skillsSection}>
      <h1 className={h1}>スキル</h1>
      <div className={frontSection}>
        <h2 className={h2}>フロントエンド</h2>
        <div>
          <h3 className={h3}>言語</h3>
          <SkillList listItems={frontEndSkillSet.langList} />
        </div>
        <div>
          <h3 className={h3}>フレームワーク</h3>
          <SkillList listItems={frontEndSkillSet.frameWorkList} />
        </div>
        <div>
          <h3 className={h3}>ライブラリ</h3>
          <SkillList listItems={frontEndSkillSet.libraryList} />
        </div>
      </div>

      <div className={frontSection}>
        <h2 className={h2}>バックエンド</h2>
        <div>
          <h3 className={h3}>言語</h3>
          <SkillList listItems={backEndSkillSet.langList} />
        </div>
        <div>
          <h3 className={h3}>フレームワーク</h3>
          <SkillList listItems={backEndSkillSet.frameWorkList} />
        </div>
        <div>
          <h3 className={h3}>ライブラリ</h3>
          <SkillList listItems={backEndSkillSet.libraryList} />
        </div>
      </div>

      <div className={frontSection}>
        <h2 className={h2}>AWS</h2>
        <SkillList listItems={awsSkillSet.skillList} />
      </div>

      <div className={frontSection}>
        <h2 className={h2}>その他・ツール</h2>
        <SkillList listItems={otherSkillSet.skillList} />
      </div>
    </section>
  );
}

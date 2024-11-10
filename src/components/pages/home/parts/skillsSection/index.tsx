import { Badge } from "../../../../ui/badge";
import { h1, h2 } from "../../css";
import { skillsSection, ul } from "./css";

export default function SkillSection() {
  return (
    <section className={skillsSection}>
      <h1 className={h1}>スキル</h1>
      <div>
        <h2 className={h2}>言語</h2>
        {/* Safariではlist-style: none;が適用されると
            アクセシビリティツリー上でリストとして機能しなくなるためroleを追加 */}
        <ul className={ul} role="list">
          <li>
            <Badge label="JavaScript" />
          </li>
          <li>
            <Badge label="TypeScript" />
          </li>
          <li>
            <Badge label="Python" />
          </li>
          <li>
            <Badge label="HTML" />
          </li>
          <li>
            <Badge label="CSS" />
          </li>
        </ul>
      </div>

      <div>
        <h2 className={h2}>フレームワーク</h2>
        <ul className={ul} role="list">
          <li>
            <Badge label="Next.js" />
          </li>
          <li>
            <Badge label="Vue.js" />
          </li>
          <li>
            <Badge label="Nuxt.js" />
          </li>
          <li>
            <Badge label="Tailwind CSS" />
          </li>
          <li>
            <Badge label="Flask" />
          </li>
        </ul>
      </div>

      <div>
        <h2 className={h2}>ライブラリ</h2>
        <ul className={ul} role="list">
          <li>
            <Badge label="Material-UI" />
          </li>
        </ul>
      </div>

      <div>
        <h2 className={h2}>その他・ツール</h2>
        <ul className={ul} role="list">
          <li>
            <Badge label="Git" />
          </li>
          <li>
            <Badge label="Docker" />
          </li>
          <li>
            <Badge label="VSCode" />
          </li>
          <li>
            <Badge label="Redmine" />
          </li>
          <li>
            <Badge label="JIRA" />
          </li>
        </ul>
      </div>
    </section>
  );
}

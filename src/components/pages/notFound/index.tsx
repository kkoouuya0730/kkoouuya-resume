import { css } from "hono/css";
import UseIon from "../../ui/icons/UseIon";

const position = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80dvh;
`;

const notFoundCard = css`
  background-color: white;
  width: 343px;
  margin: auto;
  padding: 16px;
  text-align: center;
  border: 0 solid #e5e7eb;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const homeButton = css`
  background: linear-gradient(to right, #818cf8, #a855f7);
  color: white;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right, #c3c8fb, #d7aafc);
  }
`;

const homeButtonWrapper = css`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const NotFound = () => {
  return (
    <div className={position}>
      <div className={notFoundCard}>
        <h1>404</h1>
        <h2>ページが見つかりません</h2>
        <p>申し訳ありませんが、お探しのページは存在しないか、移動した可能性があります。</p>
        <div className={homeButtonWrapper}>
          <a className={homeButton} href="/">
            <UseIon iconName="home" />
            ホームに戻る
          </a>
        </div>
      </div>
    </div>
  );
};

import { css } from "hono/css";

export const workSection = css`
  padding-bottom: 32px;
  border: 0 solid #c7d2fe;
  border-bottom-width: 1px;
  box-sizing: border-box;
`;

export const projectSection = css`
  margin-bottom: 32px;
  padding: 8px 16px 16px 16px;
  background-color: #f1f5f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

export const ul = css`
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
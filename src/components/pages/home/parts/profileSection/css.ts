import { css } from "hono/css";

export const profileSection = css`
  padding-bottom: 32px;
  display: flex;
  gap: 32px;
  border: 0 solid #c7d2fe;
  border-bottom-width: 1px;
  box-sizing: border-box;
`;

export const profileText = css`
  display: inline-block;
  margin-bottom: 16px;
`

export const profileImage = css`
  width: 192px;
  height: 192px;
  border: 2px solid #6466F1;
  border-radius: 50%;
`

export const badgeContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`
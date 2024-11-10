import { css } from "hono/css";

export const card = css`
  background-color: white;
  padding: 16px;
  margin-top: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

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

export const workSection = css`
  padding-bottom: 32px;
  border: 0 solid #c7d2fe;
  border-bottom-width: 1px;
  box-sizing: border-box;
`;

export const bottomSection = css`
  display: flex;
  padding-bottom: 32px;
`;

export const educationSection = css`
  flex-basis: 50%;
`;

export const skillsSection = css`
  flex-basis: 50%;
`;

export const ul = css`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const h1 = css`
  color: #5445e5;
`;
export const h2 = css`
  color: #7269fa;
`;
export const h3 = css`
  color: #2c1a99;
`;

import { css } from "hono/css";

export const skillsSection = css`
  padding-bottom: 32px;
  border: 0 solid #c7d2fe;
  border-bottom-width: 1px;
  box-sizing: border-box;
`;

export const individualSkillFlex = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
`;

export const frontSection = css`
  margin-bottom: 32px;
  padding: 4px 16px;
  background-color: #f1f5f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  /* cursor: pointer;
  &:hover {
    background-color: rgba(122, 119, 119, 0.2);
  } */
`;

export const ul = css`
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

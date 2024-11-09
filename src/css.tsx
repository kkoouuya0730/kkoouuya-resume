import { css } from "hono/css";
export const header = css`
  background-color: white;
  height: 56px;
  max-width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0 solid #e5e7eb;
  border-bottom-width: 1px;
  box-sizing: border-box;
`;

export const headerTitle = css`
  font-size: large;
  font-weight: bold;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

export const nav = css`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const a = css`
  color: inherit;
  text-decoration: none;
  padding: 4px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s linear;
  &:hover {
    background-color: rgba(122, 119, 119, 0.2);
  }
`;

export const icon = css`
  display: flex;
  align-items: center;
  padding: 4px;
`;

export const content = css`
  width: 60%;
  max-width: 100%;
  margin: auto;
`;

export const footer = css`
  background-color: white;
`;

import { css } from "hono/css";

export const badge = css`
  background-color: #e0e7ff;
  font-size: small;
  font-weight: bold;
  color: #3731a3;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  border-radius: 12px;
`;

export const noIconBadge = css`
  background: linear-gradient(to right, #818cf8, #a855f7);
  font-size: small;
  font-weight: bold;
  color: white;
  padding: 4px 8px;
  width: fit-content;
  border-radius: 12px;
`;

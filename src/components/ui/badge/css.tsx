import { css } from "hono/css";

export const badge = css`
  background-color: #E0E7FF;
  font-size: small;
  font-weight: bold;
  color: #3731A3;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  border-radius: 12px;
`

export const noIconBadge = css`
  background-color: #A556F7;
  font-size: small;
  font-weight: bold;
  color: white;
  padding: 4px 8px;
  width: fit-content;
  border-radius: 12px;

`
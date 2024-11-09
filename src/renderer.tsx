import { jsxRenderer } from "hono/jsx-renderer";
import { Style } from "hono/css";
import { content, footer, header, nav, a, icon, headerTitle } from "./css";
import { GithubIcon } from "./components/ui/icons/GithubIcon";

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html>
      <head>
        <link href="/static/style.css" rel="stylesheet" />
        <Style />
      </head>
      <body>
        <header className={header}>
          <span>
            <a className={headerTitle} href="/">
              kkoouuya Tech
            </a>
          </span>
          <nav className={nav}>
            <a className={a} href="/resume">
              Resume
            </a>
            <a className={icon} href="https://github.com/kkoouuya0730" target="_blank" aria-label="github">
              <GithubIcon />
            </a>
          </nav>
        </header>
        <main className={content}>{children}</main>
        <footer className={footer}></footer>
      </body>
    </html>
  );
});

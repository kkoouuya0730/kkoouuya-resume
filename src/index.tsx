import { Hono } from "hono";
import { renderer } from "./renderer";
import { Home } from "./components/pages/home";
import { NotFound } from "./components/pages/notFound";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  return c.render(<Home />);
});

app.notFound((c) => {
  return c.render(<NotFound />);
});

export default app;

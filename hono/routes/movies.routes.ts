import { Hono } from "hono";
import { authMiddleware } from "../middleware";

export const movieRoutes = new Hono()
  .get("/", (c) => {
    return c.json([
      { id: 1, title: "Hello World" },
      { id: 2, title: "Getting Started" },
    ]);
  })
  .use(authMiddleware)
  .post("/", (c) => {
    return c.json({ message: "Movie created" });
  });

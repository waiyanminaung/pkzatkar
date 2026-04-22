import { Hono } from "hono";

export const movieRoutes = new Hono().get("/", (c) => {
  return c.json([
    { id: 1, title: "Hello World" },
    { id: 2, title: "Getting Started" },
  ]);
});

import { Hono } from "hono";
import { authRoutes, movieRoutes } from "./routes";

const app = new Hono().basePath("/api");

app.route("/auth", authRoutes);
app.route("/movies", movieRoutes);

export type AppType = typeof app;
export default app;

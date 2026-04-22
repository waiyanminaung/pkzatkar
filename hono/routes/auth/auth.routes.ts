import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

export const authRoutes = new Hono().post(
  "/login",
  zValidator(
    "json",
    z.object({ email: z.string().email(), password: z.string().min(6) }),
  ),
  (c) => {
    const { email, password } = c.req.valid("json");
    return c.json({ email, password });
  },
);

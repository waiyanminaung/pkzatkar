import type { Env } from "hono";

export interface AuthUser {
  id: string;
  email: string;
  role: string;
  isAdmin: boolean;
}

export interface Variables {
  user: AuthUser;
}

export interface AppEnv extends Env {
  Variables: Variables;
}

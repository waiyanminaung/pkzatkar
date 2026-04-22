import hono from "@/hono";
import { handle } from "hono/vercel";

export const GET = handle(hono);
export const POST = handle(hono);
export const PUT = handle(hono);
export const PATCH = handle(hono);
export const DELETE = handle(hono);
export const HEAD = handle(hono);
export const OPTIONS = handle(hono);

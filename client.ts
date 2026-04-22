import { Spoosh, StripPrefix } from "@spoosh/core";
import { create } from "@spoosh/react";
import type { HonoToSpoosh } from "@spoosh/hono";
import { AppType } from "./hono";

type FullSchema = HonoToSpoosh<AppType>;

type ApiSchema = StripPrefix<FullSchema, "api">;

const spoosh = new Spoosh<ApiSchema, Error>("http://localhost:3000/api");

export const { useRead, useWrite } = create(spoosh);

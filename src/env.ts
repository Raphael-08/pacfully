import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_DEV_URL: z.string().optional(),
    NEXT_PUBLIC_BASE_URL: z.string().optional(),
    NEXT_PUBLIC_NODE_ENV: z.string().optional(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_DEV_URL: process.env.DEV_APP_URL,
    NEXT_PUBLIC_BASE_URL: process.env.APP_URL,
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
  },
});

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    // Add any other server-only variables here (e.g., DATABASE_URL)
  },
  client: {
    // Add your NEXT_PUBLIC_ variables here
    // e.g., NEXT_PUBLIC_API_URL: z.string().url(),
  },
  // If you have variables used in both server and client without a prefix (rare, usually just NODE_ENV)
  // shared: { ... },
  emptyStringAsUndefined: true,
  // eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env,
});

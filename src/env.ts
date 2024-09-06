import { z } from "zod";

import { createEnv } from "@t3-oss/env-nextjs";
import { vercel } from "@t3-oss/env-nextjs/presets";

export const env = createEnv({
  extends: [vercel()],
  shared: {
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
  },
  server: {
    PORT: z.coerce.number().default(3000),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
  },
  skipValidation: !!process.env["SKIP_ENV_VALIDATION"],
  emptyStringAsUndefined: true,
});

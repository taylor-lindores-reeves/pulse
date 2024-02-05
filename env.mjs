import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	/*
	 * Serverside Environment variables, not available on the client.
	 * Will throw if you access these variables on the client.
	 */
	server: {
		APP_ENV: z.enum(["development", "production", "test"]),
		BASE_URL: z.string().url(),
		DATABASE_URL: z.string().url(),
		PULSE_API_KEY: z.string(),
		UPLOADTHING_SECRET: z.string(),
		UPLOADTHING_APP_ID: z.string(),
	},
	/*
	 * Environment variables available on the client (and server).
	 * Specify your client-side environment variables schema here.
	 * You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
	 */
	client: {},
	/*
	 * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
	 * middlewares) or client-side so we need to destruct manually.
	 * You'll get type errors if not all variables from `server` & `client` are included here.
	 */
	runtimeEnv: {
		APP_ENV: process.env.APP_ENV,
		BASE_URL: process.env.BASE_URL,
		DATABASE_URL: process.env.DATABASE_URL,
		PULSE_API_KEY: process.env.PULSE_API_KEY,
		UPLOADTHING_SECRET: process.env.UPLOADTHING_SECRET,
		UPLOADTHING_APP_ID: process.env.UPLOADTHING_APP_ID,
	},
});

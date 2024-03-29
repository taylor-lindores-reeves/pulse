import { env } from "@/env.mjs";
import { PrismaClient } from "@prisma/client";
import { withPulse } from "@prisma/extension-pulse";

const apiKey: string = env.PULSE_API_KEY !== undefined ? env.PULSE_API_KEY : "";
const prisma = new PrismaClient().$extends(withPulse({ apiKey }));

async function main() {
	const subscription = await prisma.user.subscribe();

	if (subscription instanceof Error) {
		throw subscription;
	}

	for await (const event of subscription) {
		console.log("just received an event:", event);
	}
}

main();

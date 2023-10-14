import { PrismaClient } from '@prisma/client';
import { withPulse } from '@prisma/extension-pulse';
// import { withAccelerate } from '@prisma/extension-accelerate';
import { env } from '@/env.mjs';

const apiKey: string = env.PULSE_API_KEY !== undefined ? env.PULSE_API_KEY : '';

function makePrisma() {
	return new PrismaClient().$extends(withPulse({ apiKey }));
	// .$extends(withAccelerate());
}

const globalForPrisma = global as unknown as {
	prisma: ReturnType<typeof makePrisma>;
};

// export const prisma = globalForPrisma.prisma ?? makePrisma();
const prisma = globalForPrisma.prisma ?? makePrisma();

if (env.APP_ENV !== 'production') {
	globalForPrisma.prisma = makePrisma();
}

// @ts-ignore
export default prisma as PrismaClient;

import { env } from './env.mjs';
await import('./env.mjs');

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

/** @type {import('next').NextConfig} */

const securityHeaders = [
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=63072000; includeSubDomains; preload',
	},
	{
		key: 'X-Frame-Options',
		value: 'DENY',
	},
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), midi=(), sync-xhr=()',
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		key: 'Referrer-Policy',
		value: 'origin-when-cross-origin',
	},
	{
		key: 'Access-Control-Allow-Credentials',
		value: 'true',
	},
	{
		key: 'Access-Control-Allow-Origin',
		value: '*',
	},
	{
		key: 'Access-Control-Allow-Methods',
		value: 'GET, OPTIONS, PATCH, DELETE, POST, PUT',
	},
	{
		key: 'Access-Control-Allow-Headers',
		value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Content-Type, api_key, Authorization',
	},
];

const config = {
	reactStrictMode: true,
	images: {
		deviceSizes: [640, 1080, 1200, 1920, 2048],
		imageSizes: [16, 64, 96, 128, 256],
		domains: ['fakeimg.pl'],
	},
	compiler: {
		removeConsole: env.APP_ENV === 'production',
	},
	experimental: {
		serverActions: true,
		typedRoutes: true,
	},
	/** Linting and typechecking are already done as separate tasks in the CI pipeline */
	eslint: {
		ignoreDuringBuilds: false,
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: false,
	},
	async headers() {
		return [
			{
				// Apply these headers to all routes in your application.
				source: '/:path*',
				headers: securityHeaders,
			},
		];
	},
};

export default config;

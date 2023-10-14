import { env } from '@/env.mjs';

export const baseURL = () => {
	if (typeof window !== 'undefined') {
		return '';
	}
	return env.BASE_URL;
};

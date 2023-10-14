import React from 'react';
import Link from 'next/link';

export const Footer = () => {
	return (
		<footer className="flex items-center justify-between border-t-2 p-6">
			<div className="flex gap-6">
				<Link
					className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
					href="#"
				>
					Privacy Policy
				</Link>
				<Link
					className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
					href="#"
				>
					Terms of Service
				</Link>
			</div>
			<div className="flex gap-4">
				<svg
					className="h-6 w-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
					fill="none"
					height="24"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 24"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M18 2h-3a5 5 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 1-1h3z" />
				</svg>
				<svg
					className="h-6 w-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
					fill="none"
					height="24"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 24"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
				</svg>
				<svg
					className="h-6 w-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
					fill="none"
					height="24"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 24"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
					<path d="M16 11.37A4 4 0 1 12.63 8 16 11.37z" />
					<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
				</svg>
			</div>
		</footer>
	);
};

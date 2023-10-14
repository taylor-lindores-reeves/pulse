import React from 'react';
import Link from 'next/link';

import { Input } from '@/components/ui/input';

export const Header = () => {
	return (
		<header className="flex items-center justify-between border-b-2 p-6">
			<Link className="flex items-center gap-2" href="#">
				<svg
					className="h-6 w-6 text-gray-900 dark:text-gray-100"
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
					<path d="M3 9h18v10a2 2 0 1-2 2H5a2 1-2-2V9Z" />
					<path d="m3 9 2.45-4.9A2 2 0 1 7.24 3h9.52a2 1.8 1.1L21" />
					<path d="M12 3v6" />
				</svg>
				<span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
					E-Shop
				</span>
			</Link>
			<nav className="hidden gap-6 md:flex">
				<Link
					className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
					href="#"
				>
					Products
				</Link>
				<Link
					className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
					href="#"
				>
					About
				</Link>
				<Link
					className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
					href="#"
				>
					Contact
				</Link>
			</nav>
			<form className="relative w-64">
				<svg
					className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400"
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
					<circle cx="11" cy="11" r="8" />
					<path d="m21 21-4.3-4.3" />
				</svg>
				<Input
					className="w-full pl-8"
					placeholder="Search products..."
					type="search"
				/>
			</form>
		</header>
	);
};

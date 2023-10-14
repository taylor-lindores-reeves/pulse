import React from 'react';
import Link from 'next/link';
import { ListingCard } from '@/components/listing-card';

const Homepage = () => {
	return (
		<div className="flex flex-1 overflow-hidden">
			<aside className="w-64 border-r p-6">
				<h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
					Categories
				</h2>
				<Link
					className="block py-1 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
					href="#"
				>
					Books
				</Link>
				<Link
					className="block py-1 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
					href="#"
				>
					Electronics
				</Link>
				<Link
					className="block py-1 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
					href="#"
				>
					Clothing
				</Link>
			</aside>
			<main className="flex-1 p-6">
				<div className="container grid grid-cols-1 gap-12 bg-red-200 sm:grid-cols-2 md:grid-cols-4">
					{Array.from({ length: 10 }).map((_, i) => (
						<ListingCard key={i} />
					))}
				</div>
			</main>
		</div>
	);
};

export default Homepage;

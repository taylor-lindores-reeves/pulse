import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export const ListingSidebar = () => {
	return (
		<aside className="float-right h-full w-80 overflow-auto border">
			<div className="p-4">
				<h2 className="text-xl font-bold">Bidding Section</h2>
				<form className="mt-4 space-y-4">
					<div className="relative">
						<Input
							className="w-full"
							placeholder="Enter your bid..."
						/>
						<Button
							className="absolute right-0 top-0 mr-2 mt-2 bg-gray-800 px-4 py-2 text-white"
							type="submit"
						>
							Place Bid
						</Button>
					</div>
					<p className="mt-2">
						Current bid:
						<span className="font-bold">$500</span>
					</p>
					<p className="text-green-600 dark:text-green-400">
						Reserve met
					</p>
					<p className="mt-4 text-gray-600 dark:text-gray-400">
						This is a floating sidebar that can contain additional
						information or actions.
					</p>
				</form>
			</div>
		</aside>
	);
};

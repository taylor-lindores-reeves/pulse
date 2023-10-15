import React from 'react';

const Listing = () => {
	return (
		<div className="flex flex-col">
			<div className="flex gap-x-8">
				<div className="grid w-full grid-cols-12 grid-rows-1 gap-x-4">
					<img
						alt="Main Image"
						className="col-span-9 object-cover"
						src="https://fakeimg.pl/1280x800"
					/>
					<div className="col-span-3 flex h-full flex-col justify-between gap-2.5">
						<img
							alt="Image 1"
							className="object-cover"
							src="https://fakeimg.pl/1280x800"
						/>
						<img
							alt="Image 2"
							className="object-cover"
							src="https://fakeimg.pl/1280x800"
						/>
						<img
							alt="Image 3"
							className="object-cover"
							src="https://fakeimg.pl/1280x800"
						/>
					</div>
				</div>
				<div className="grid w-full grid-cols-12 grid-rows-1 gap-x-4">
					<img
						alt="Main Image"
						className="col-span-9 object-cover"
						src="https://fakeimg.pl/1280x800"
					/>
					<div className="col-span-3 flex h-full flex-col justify-between gap-2.5">
						<img
							alt="Image 1"
							className="object-cover"
							src="https://fakeimg.pl/1280x800"
						/>
						<img
							alt="Image 2"
							className="object-cover"
							src="https://fakeimg.pl/1280x800"
						/>
						<img
							alt="Image 3"
							className="object-cover"
							src="https://fakeimg.pl/1280x800"
						/>
					</div>
				</div>
			</div>
			{/* 
			<div className="overflow-auto">
				<div className="p-4">
					<h1 className="text-2xl font-bold">Item Title</h1>
					<p className="mt-4 text-gray-600 dark:text-gray-400">
						This is a detailed description of the item. It provides
						information about the item's features and
						characteristics.
					</p>
				</div>
				<footer className="mt-auto bg-gray-100 p-4 dark:bg-gray-800">
					<p className="text-center text-gray-600 dark:text-gray-400">
						© 2023 My Auction Site
					</p>
				</footer>
			</div> */}
		</div>
	);
};

export default Listing;

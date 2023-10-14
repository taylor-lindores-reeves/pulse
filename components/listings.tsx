import React from 'react';
import { ListingCard } from './listing-card';
import { OffsetPaginationFunction } from './feed';

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

interface ListingsProps {
	initialData: UnwrapPromise<ReturnType<OffsetPaginationFunction>>;
}

const Listings = (props: ListingsProps) => {
	const { initialData } = props;

	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{initialData.data.map((listing, i) => (
				<ListingCard {...listing} key={i} />
			))}
		</div>
	);
};

export default Listings;

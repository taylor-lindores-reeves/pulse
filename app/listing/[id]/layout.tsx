import { ListingSidebar } from '@/components/listing-sidebar';
import React, { PropsWithChildren } from 'react';

const ListingLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className="container space-y-12 py-12">
			{children}
			<ListingSidebar />
		</div>
	);
};

export default ListingLayout;

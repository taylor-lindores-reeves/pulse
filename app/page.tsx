import React from 'react';
import Feed from '@/components/feed';
import { Sidebar } from '@/components/sidebar';

export type PageProps = {
	params: { [key: string]: string | string[] | undefined };
	searchParams?: { [key: string]: string | string[] | undefined };
};

const Homepage = (props: PageProps) => {
	return (
		<div className="flex flex-1 overflow-hidden">
			<Sidebar />
			<main className="flex-1 p-6">
				<Feed {...props.searchParams} />
			</main>
		</div>
	);
};

export default Homepage;

import { z } from 'zod';
import prisma from '@/lib/db';
import Listings from '@/components/listings';
import { Pagination } from '@/components/ui/pagination';
import { PageProps } from '@/app/page';
import { revalidatePath } from 'next/cache';

const PAGE_SIZE = 8;

const OffsetSearchSchema = z.object({
	take: z.number().optional(),
	skip: z.number().optional(),
});

type Inputs = z.infer<typeof OffsetSearchSchema>;

export type OffsetPaginationFunction = typeof fetchAuctions;

const fetchAuctions = async ({ take = PAGE_SIZE, skip = 0 }: Inputs) => {
	'use server';

	const result = await prisma.listing.findMany({
		take,
		skip,
		orderBy: { price: 'asc' },
	});

	const total = await prisma.listing.count();

	revalidatePath('/');

	return {
		data: result,
		metadata: {
			hasNextPage: skip + take < total,
			totalPages: Math.ceil(total / take),
		},
	};
};

const Feed = async (props: PageProps['searchParams']) => {
	const pageNumber = Number(props?.page || 1); // Get the page number. Default to 1 if not provided.

	const take = PAGE_SIZE;
	const skip = (pageNumber - 1) * take; // Calculate skip based on page number.

	const initialData = await fetchAuctions({ take, skip });

	return (
		<div className="space-y-12">
			<Listings initialData={initialData} />
			<Pagination {...props} {...initialData.metadata} />
		</div>
	);
};

export default Feed;

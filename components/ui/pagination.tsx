import Link from '@/components/ui/link';
import { cn } from '@/lib/cn';

interface PaginationProps {
	page?: string;
	totalPages: number;
	hasNextPage: boolean;
}

export function Pagination(props: PaginationProps) {
	const { page = 1, totalPages, hasNextPage } = props;

	const currentPage = Math.min(Math.max(Number(page), 1), totalPages);

	const getPagesToShow = () => {
		let startPage = currentPage - 2;
		let endPage = currentPage + 2;

		if (currentPage <= 3) {
			startPage = 1;
			endPage = 5;
		} else if (currentPage >= totalPages - 2) {
			startPage = totalPages - 4;
			endPage = totalPages;
		}

		return Array.from(
			{ length: endPage - startPage + 1 },
			(_, i) => startPage + i,
		);
	};

	const pages = getPagesToShow();

	console.log({ props });

	return (
		<div className="flex items-center justify-center space-x-4">
			<Link
				className={cn(
					'rounded-md border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50',
					currentPage === 1 ? 'cursor-not-allowed bg-gray-300' : '',
				)}
				href={`?page=${currentPage - 1}`}
			>
				Previous
			</Link>

			<nav
				aria-label="Pagination"
				className="relative z-0 inline-flex -space-x-px rounded-md"
			>
				{pages.map((p, i) => (
					<Link
						key={p}
						className={cn(
							'relative inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50',
							p === currentPage
								? 'cursor-not-allowed bg-gray-300'
								: '',
							i === 0 ? 'rounded-l-md' : '',
							i === pages.length - 1 ? 'rounded-r-md' : '',
						)}
						href={`?page=${p}`}
					>
						{p}
					</Link>
				))}
			</nav>

			<Link
				className={cn(
					'rounded-md border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50',
					!hasNextPage ? 'cursor-not-allowed bg-gray-300' : '',
				)}
				href={`?page=${currentPage + 1}`}
			>
				Next
			</Link>
		</div>
	);
}

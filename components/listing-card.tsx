import {
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
	Card,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ListingCard() {
	return (
		<Card className="overflow-hidden rounded-xl bg-white shadow-lg dark:bg-zinc-800">
			<div className="relative">
				<img
					alt="Auction item"
					className="h-64 w-full object-cover"
					height="300"
					src="/placeholder.svg"
					style={{
						aspectRatio: '400/300',
						objectFit: 'cover',
					}}
					width="400"
				/>
			</div>
			<CardContent className="p-6">
				<CardTitle className="mb-2 text-2xl font-semibold">
					Item Name
				</CardTitle>
				<CardDescription className="mb-4 text-gray-700 dark:text-zinc-100">
					Brief description of the item.
				</CardDescription>
				<div className="mb-4">
					<span className="text-lg font-semibold">Current Bid:</span>
					<span className="ml-2 text-2xl font-bold text-green-500">
						$1000
					</span>
				</div>
				<div className="mb-6">
					<span className="text-lg font-semibold">
						Time Remaining:
					</span>
					<span className="ml-2 text-xl font-bold text-red-500">
						2d 5h 30m
					</span>
				</div>
			</CardContent>
			<CardFooter className="bg-gray-50 p-6 dark:bg-zinc-900">
				<Button className="w-full" variant="secondary">
					Place a Bid
				</Button>
			</CardFooter>
		</Card>
	);
}

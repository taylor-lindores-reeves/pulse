import Link from 'next/link';
import { Input } from '@/components/ui/input';
import {
	SelectValue,
	SelectTrigger,
	SelectLabel,
	SelectItem,
	SelectGroup,
	SelectContent,
	Select,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export function Sidebar() {
	return (
		<aside className="flex h-screen w-[280px] flex-col border-r bg-gray-800 text-white">
			<div className="flex flex-col items-center border-b border-gray-700 px-6 py-4">
				<img
					alt="User Avatar"
					className="rounded-full"
					height="100"
					src="/placeholder.svg"
					style={{
						aspectRatio: '100/100',
						objectFit: 'cover',
					}}
					width="100"
				/>
				<h2 className="mt-2 text-lg font-semibold">John Doe</h2>
				<p className="mt-1 text-sm text-gray-400">Collector</p>
			</div>
			<nav className="flex flex-col gap-4 p-6">
				<Link className="text-gray-300 hover:text-white" href="#">
					Home
				</Link>
				<Link className="text-gray-300 hover:text-white" href="#">
					Explore
				</Link>
				<Link className="text-gray-300 hover:text-white" href="#">
					My Collection
				</Link>
				<Link className="text-gray-300 hover:text-white" href="#">
					Create
				</Link>
			</nav>
			<div className="mt-auto p-6">
				<h3 className="text-lg font-semibold">Refine Results</h3>
				<form className="mt-4 space-y-4">
					<div>
						<label
							className="block text-sm font-medium"
							htmlFor="price"
						>
							Max Price
						</label>
						<Input
							className="mt-1 w-full text-black"
							id="price"
							type="number"
						/>
					</div>
					<div>
						<label
							className="block text-sm font-medium"
							htmlFor="date"
						>
							Creation Date
						</label>
						<Input
							className="mt-1 w-full text-black"
							id="date"
							type="date"
						/>
					</div>
					<div>
						<label
							className="block text-sm font-medium"
							htmlFor="category"
						>
							Category
						</label>
						<Select>
							<SelectTrigger>
								<SelectValue
									className="mt-1 w-full text-black"
									placeholder="Select a category"
								/>
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Categories</SelectLabel>
									<SelectItem value="art">Art</SelectItem>
									<SelectItem value="music">Music</SelectItem>
									<SelectItem value="virtual-worlds">
										Virtual Worlds
									</SelectItem>
									<SelectItem value="trading-cards">
										Trading Cards
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<Button
						className="w-full bg-green-500 hover:bg-green-600"
						type="submit"
					>
						Apply Filters
					</Button>
				</form>
			</div>
		</aside>
	);
}

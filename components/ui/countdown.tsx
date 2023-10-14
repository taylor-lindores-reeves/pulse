'use client';

import { cn } from '@/lib/cn';
import { dayjs } from '@/lib/dayjs';
import Countdown, {
	CountdownProps,
	CountdownRenderProps,
	zeroPad,
} from 'react-countdown';

// Random component
const Completionist = () => (
	<span className="text-xl font-bold">Auction Has Ended</span>
);

// Renderer callback with condition
const renderer = (props: CountdownRenderProps) => {
	const { hours, minutes, seconds, completed } = props;

	if (completed) {
		// Render a complete state
		return <Completionist />;
	} else {
		// Render a countdown
		return (
			<div className="inline-flex gap-x-2">
				<span className="text-lg">Auction Ends:</span>
				<span
					className={cn(
						'flex text-xl font-bold',
						minutes < 2 && 'text-red-500',
					)}
				>
					<div className="shrink-0">{zeroPad(hours)}</div>:
					<div className="shrink-0">{zeroPad(minutes)}</div>:
					<div className="shrink-0">{zeroPad(seconds)}</div>
				</span>
			</div>
		);
	}
};

const CountdownTimer = (props: CountdownProps) => {
	const endDate = dayjs(props.date).local();

	return (
		<>
			<Countdown {...props} renderer={renderer} />
			<div className="text-sm">
				<span className="">End Date: </span>
				<span className="text-gray-500">
					{endDate.format('D MMM YYYY HH:mm:ss')}
				</span>
			</div>
		</>
	);
};

export default CountdownTimer;

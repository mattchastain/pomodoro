import { useEffect } from 'react';

interface TimerProps {
	timerActive: boolean;
	timeLeft: number;
	setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
	isBreak: boolean;
}

export function Clock({
	timerActive,
	timeLeft,
	setTimeLeft,
	isBreak,
}: TimerProps) {
	useEffect(() => {
		let interval: number;

		if (timerActive) {
			interval = setInterval(() => {
				setTimeLeft((prevSeconds) => prevSeconds - 1);
			}, 1000);
		}

		return () => {
			if (interval) clearInterval(interval);
		};
	}, [timerActive]);

	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;

	return (
		<div className='flex flex-col gap-4 mx-auto text-center font-bold md:font-medium'>
			<p>{isBreak ? 'Break' : 'Study'}</p>
			<h2 className='text-6xl'>
				{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
			</h2>
		</div>
	);
}

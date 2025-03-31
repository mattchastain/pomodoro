import { useEffect } from 'react';

interface TimerProps {
	timerActive: boolean;
	timeLeft: number;
	setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}

export function Clock({ timerActive, timeLeft, setTimeLeft }: TimerProps) {
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
		<div className='mx-auto text-6xl font-bold md:font-medium'>
			{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
		</div>
	);
}

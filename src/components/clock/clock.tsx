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

	return <div className='mx-auto'>{timeLeft}</div>;
}

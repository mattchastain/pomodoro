import { useEffect } from 'react';

interface TimerProps {
	timerActive: boolean;
	timeLeft: number;
	setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
	isBreak: boolean;
	onComplete: () => void;
}

export function Clock({
	timerActive,
	timeLeft,
	setTimeLeft,
	isBreak,
	onComplete,
}: TimerProps) {
	useEffect(() => {
		let interval: number;

		if (timerActive && timeLeft > 0) {
			interval = setInterval(() => {
				setTimeLeft((prevSeconds) => prevSeconds - 1);
			}, 1000);
		} else if (timerActive && timeLeft === 0) {
			onComplete();
		}

		return () => {
			if (interval) clearInterval(interval);
		};
	}, [timerActive, timeLeft, onComplete, setTimeLeft]);

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

import { Pause, Play, SkipForward } from 'lucide-react';
import { useCallback } from 'react';
import { Button } from '../button/button';

interface TimerControlsProps {
	timerActive: boolean;
	setTimerActive: (active: boolean) => void;
	resetTimer: () => void;
}

export function TimerControls({
	timerActive,
	setTimerActive,
	resetTimer,
}: TimerControlsProps) {
	const toggleTimerActive = useCallback(() => {
		setTimerActive(!timerActive);
	}, [timerActive]);

	return (
		<div className='flex items-center justify-center gap-2'>
			<Button
				label={timerActive ? 'Pause' : 'Start'}
				icon={timerActive ? Pause : Play}
				onClick={toggleTimerActive}
				variant='outline'
			/>
			<Button
				icon={SkipForward}
				label='Skip'
				onClick={resetTimer}
				variant='outline'
			/>
		</div>
	);
}

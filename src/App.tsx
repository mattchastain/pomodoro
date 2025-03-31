import { useCallback, useState } from 'react';
import { Clock, Header, Settings, TimerControls } from './components';
import { useTimerStore } from './store/useTimerStore';

export default function App() {
	const { studyDuration, breakDuration } = useTimerStore();
	const [isBreak, setIsBreak] = useState(false);
	const initialTime = isBreak ? breakDuration : studyDuration;

	const [settingsOpen, setSettingsOpen] = useState(false);

	const [timerActive, setTimerActive] = useState(false);
	const [timeLeft, setTimeLeft] = useState<number>(initialTime);

	const resetTimer = useCallback(() => {
		setTimerActive(false);
		setTimeLeft(initialTime);
	}, []);

	return (
		<div className='flex flex-col gap-12 max-w-xl mx-auto'>
			<Header
				settingsOpen={settingsOpen}
				setSettingsOpen={setSettingsOpen}
			/>
			<Settings
				settingsOpen={settingsOpen}
				setSettingsOpen={setSettingsOpen}
			/>
			<Clock
				timerActive={timerActive}
				timeLeft={timeLeft}
				setTimeLeft={setTimeLeft}
				isBreak={isBreak}
			/>
			<TimerControls
				timerActive={timerActive}
				setTimerActive={setTimerActive}
				resetTimer={resetTimer}
			/>
		</div>
	);
}

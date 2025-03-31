import { useCallback, useState } from 'react';
import { Clock, Header, Settings, TimerControls } from './components';

export default function App() {
	const [settingsOpen, setSettingsOpen] = useState(false);

	const [timerActive, setTimerActive] = useState(false);
	const [timeLeft, setTimeLeft] = useState<number>(60);

	const resetTimer = useCallback(() => {
		setTimerActive(false);
		setTimeLeft(60);
	}, []);

	return (
		<div className='flex flex-col gap-12 max-w-xl mx-auto'>
			<Header setSettingsOpen={setSettingsOpen} />
			<Settings
				settingsOpen={settingsOpen}
				setSettingsOpen={setSettingsOpen}
			/>
			<Clock
				timerActive={timerActive}
				timeLeft={timeLeft}
				setTimeLeft={setTimeLeft}
			/>
			<TimerControls
				timerActive={timerActive}
				setTimerActive={setTimerActive}
				resetTimer={resetTimer}
			/>
		</div>
	);
}

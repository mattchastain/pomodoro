import { AlarmClockCheck, Settings2 } from 'lucide-react';
import { Button } from '../button/button';

interface HeaderProps {
	settingsOpen: boolean;
	setSettingsOpen: (open: boolean) => void;
}

export function Header({ settingsOpen, setSettingsOpen }: HeaderProps) {
	return (
		<div className='flex items-center justify-between gap-2'>
			<div className='flex items-center gap-2'>
				<AlarmClockCheck />
				<h1 className='font-bold text-lg md:font-medium md:text-xl'>
					Pomodoro
				</h1>
			</div>
			<Button
				icon={Settings2}
				iconSize={24}
				onClick={() => setSettingsOpen(!settingsOpen)}
				classes='z-50'
				variant='ghost'
			/>
		</div>
	);
}

import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';
import { Input } from '..';
import { useTimerStore } from '../../store/useTimerStore';

interface SettingsProps {
	settingsOpen: boolean;
	setSettingsOpen: (open: boolean) => void;
}

export function Settings({ settingsOpen, setSettingsOpen }: SettingsProps) {
	const { studyDuration, breakDuration, setStudyDuration, setBreakDuration } =
		useTimerStore();

	const settingsModalRef = useRef(null);

	return (
		<AnimatePresence>
			{settingsOpen && (
				<>
					<motion.div
						ref={settingsModalRef}
						initial={{ scale: 0.95, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.95, opacity: 0 }}
						onMouseDown={(e) => {
							if (settingsModalRef.current === e.target) {
								setSettingsOpen(false);
							}
						}}
						className='fixed inset-0 flex items-center justify-center backdrop-blur z-30'
					>
						<div className='flex flex-col gap-4 font-bold md:font-medium'>
							<div className=''>
								<h2>Study Duration</h2>
								<Input
									value={studyDuration / 60}
									onChange={(e) => {
										setStudyDuration(Number(e.target.value) * 60);
									}}
								/>
							</div>
							<div className=''>
								<h2>Break Duration</h2>
								<Input
									value={breakDuration / 60}
									onChange={(e) =>
										setBreakDuration(Number(e.target.value) * 60)
									}
								/>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}

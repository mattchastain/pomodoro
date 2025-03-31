import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useRef } from 'react';
import { Input } from '..';

interface SettingsProps {
	settingsOpen: boolean;
	setSettingsOpen: (open: boolean) => void;
}

export function Settings({ settingsOpen, setSettingsOpen }: SettingsProps) {
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
								<Input />
							</div>
							<div className=''>
								<h2>Break Duration</h2>
								<Input />
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}

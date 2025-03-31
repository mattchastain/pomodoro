import { AnimatePresence, motion } from 'framer-motion';

interface SettingsProps {
	settingsOpen: boolean;
	setSettingsOpen: (open: boolean) => void;
}

export function Settings({ settingsOpen, setSettingsOpen }: SettingsProps) {
	return (
		<AnimatePresence>
			{settingsOpen && (
				<motion.div
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0.9, opacity: 0 }}
					onClick={() => setSettingsOpen(false)}
					className='fixed inset-0 backdrop-blur z-40'
				></motion.div>
			)}
		</AnimatePresence>
	);
}

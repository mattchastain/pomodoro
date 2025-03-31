import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TimerState = {
	studyDuration: number;
	breakDuration: number;
	setStudyDuration: (value: number) => void;
	setBreakDuration: (value: number) => void;
};

export const useTimerStore = create<TimerState>()(
	persist(
		(set) => ({
			studyDuration: 60 * 45,
			breakDuration: 60 * 10,
			setStudyDuration: (value) => set({ studyDuration: value }),
			setBreakDuration: (value) => set({ breakDuration: value }),
		}),
		{ name: 'timer-store' }
	)
);

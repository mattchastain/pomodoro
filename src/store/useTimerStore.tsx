import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TimerState = {
	studyDuration: number;
	breakDuration: number;
};

export const useTimerStore = create<TimerState>()(
	persist(
		(set) => ({
			studyDuration: 60 * 45,
			breakDuration: 60 * 10,
		}),
		{ name: 'timer-store' }
	)
);

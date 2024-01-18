import { create } from 'zustand'

import { mountStoreDevtool } from 'simple-zustand-devtools'

interface CounterState {
	counter: number
	max: number
	increment: () => void
	decrement: () => void
	reset: () => void
}

const useCounterStore = create<CounterState>((set) => ({
	counter: 0,
	max: 10,
	increment: () => set((store) => ({ counter: store.counter + 1 })),
	decrement: () => set((store) => ({ counter: store.counter - 1 })),
	reset: () => set(() => ({ max: 10 })),
}))

if (process.env.NODE_ENV === 'development') {
	mountStoreDevtool('Counter store', useCounterStore)
}

export default useCounterStore

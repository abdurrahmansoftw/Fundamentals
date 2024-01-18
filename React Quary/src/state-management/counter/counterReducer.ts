interface IAction {
	type: 'DECREMENT' | 'INCREMENT' | 'RESET'
}

const counterReducer = (state: number, action: IAction): number => {
	if (action.type === 'INCREMENT') return state + 1
	if (action.type === 'DECREMENT') return state - 1
	if (action.type === 'RESET') return 0
	return state
}

export default counterReducer

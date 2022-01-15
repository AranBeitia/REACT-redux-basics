import { INCREASE_COUNTER, DECREASE_COUNTER } from './types'

const initialState = 0

const reducer = (state = initialState, action) => {
	if (action.type === INCREASE_COUNTER) return state + 1
	if (action.types === DECREASE_COUNTER) return state - 1
	return state
}

export default reducer

import { useDispatch } from 'react-redux'
import {
	increaseCounter,
	decreaseCounter,
	resetCounter,
	setRandomCounter,
} from '../redux-storage/counter/actions'
const Header = () => {
	const dispatch = useDispatch()
	return (
		<header>
			<button onClick={() => dispatch(increaseCounter())}>+</button>
			<button onClick={() => dispatch(decreaseCounter())}>-</button>
			<button onClick={() => dispatch(resetCounter())}>Reset</button>
			<button onClick={() => dispatch(setRandomCounter())}>Random</button>
		</header>
	)
}

export default Header

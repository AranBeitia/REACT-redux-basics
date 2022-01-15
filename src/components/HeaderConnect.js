import { connect } from 'react-redux'
import {
	increaseCounter,
	decreaseCounter,
} from '../redux-storage/counter/actions'
const Header = ({ onIncreaseCounter, onDecreaseCounter }) => {
	return (
		<header>
			<button onClick={onIncreaseCounter}>+</button>
			<button onClick={onDecreaseCounter}>-</button>
		</header>
	)
}

const mapDispatchToProps = (dispatch) => ({
	onIncreaseCounter: () => dispatch(increaseCounter()),
	onDecreaseCounter: () => dispatch(decreaseCounter()),
})

const reduxHoc = connect(null, mapDispatchToProps)

export default reduxHoc(Header)

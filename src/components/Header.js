const Header = ({ onIncreaseCounter, onDecreaseCounter }) => {
	return (
		<header>
			<button onClick={onIncreaseCounter}>+</button>
			<button onClick={onDecreaseCounter}>-</button>
		</header>
	)
}

export default Header

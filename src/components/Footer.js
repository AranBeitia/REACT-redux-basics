import { useSelector } from 'react-redux'

const Footer = () => {
	const { status, number } = useSelector((state) => state.counter)
	return (
		<footer>
			<p>Counter: {status === 'loading' ? 'Loading...' : number}</p>
		</footer>
	)
}

export default Footer

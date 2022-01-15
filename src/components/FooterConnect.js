import { connect } from 'react-redux'

const Footer = ({ counter }) => {
	return (
		<footer>
			<p>Counter: {counter}</p>
		</footer>
	)
}

const mapStateToProps = (state) => {
	return {
		counter: state.counter,
	}
}

const reduxHoc = connect(mapStateToProps)

export default reduxHoc(Footer)

// export default connect(mapStateToProps)(Footer)

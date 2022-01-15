import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCounter } from './redux-storage/counter/actions'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
	const dispatch = useDispatch()
	const [counterInput, setCounterInput] = useState('')

	const handleSetCounter = (e) => {
		e.preventDefault()

		dispatch(setCounter(counterInput))
	}
	return (
		<>
			<Header />
			<h1>react app</h1>
			<form onSubmit={handleSetCounter}>
				<label htmlFor="counter">Set counter</label>
				<input
					value={counterInput}
					onChange={({ target }) => setCounterInput(target.value)}
				/>
				<button>SET</button>
			</form>
			<Footer />
		</>
	)
}

export default App

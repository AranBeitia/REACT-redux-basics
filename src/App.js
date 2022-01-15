import React, { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
	const [counter, setCounter] = useState(0)
	return (
		<>
			<Header
				onIncreaseCounter={() => setCounter(counter + 1)}
				onDecreaseCounter={() => setCounter(counter - 1)}
			/>
			<h1>react app</h1>
			<Footer counter={counter} />
		</>
	)
}

export default App

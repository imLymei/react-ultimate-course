import { useState } from 'react';

function App() {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);
	const [date, setDate] = useState(new Date());

	const day = 86400000;

	const isToday = count === 0;
	const isBeforeToday = count < 0;

	function handleStepChange(isPositive = true) {
		setStep((step) => (isPositive ? step + 1 : step - 1));
	}

	function handleCountChange(isPositive = true) {
		setCount((count) => {
			const today = date.getTime();

			setDate((date) => new Date(isPositive ? today + day * step : today - day * step));
			return isPositive ? count + 1 * step : count - 1 * step;
		});
	}

	return (
		<div className='app'>
			<div className='controls-container'>
				<div className='buttons-container'>
					<button onClick={() => handleStepChange(false)}>-</button>
					<p>step: {step}</p>
					<button onClick={handleStepChange}>+</button>
				</div>
				<div className='buttons-container'>
					<button onClick={() => handleCountChange(false)}>-</button>
					<p>count: {count}</p>
					<button onClick={handleCountChange}>+</button>
				</div>
			</div>
			<p>
				{isToday
					? 'Today is'
					: isBeforeToday
					? `${Math.abs(count)} days ago was`
					: `${count} days from today is`}{' '}
				{date.toDateString()}
			</p>
		</div>
	);
}

export default App;

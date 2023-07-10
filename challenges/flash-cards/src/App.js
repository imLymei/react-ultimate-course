import { useState } from 'react';

function App() {
	const [questions, setQuestions] = useState([]);
	const [cardOpen, setCardOpen] = useState(0);
	const [formIsOpen, setFormIsOpen] = useState(true);

	function onSubmit(question, response) {
		setQuestions((questions) => [...questions, { id: Date.now(), question: question, response: response }]);
		setFormIsOpen(false);
	}

	return (
		<div className='App'>
			{formIsOpen && <AddForm onSubmit={onSubmit} />}
			<div className='card-container'>
				{questions.map((card, index) => (
					<Card key={index} card={card} cardOpen={cardOpen} setCardOpen={setCardOpen} />
				))}
			</div>
			<button className='add-card-button' onClick={() => setFormIsOpen((isOpen) => !isOpen)}>
				Add Card
			</button>
		</div>
	);
}

function Card({ card, cardOpen, setCardOpen }) {
	const isOpen = cardOpen.id === card.id;

	return (
		<div className={`card ${isOpen && 'card-flipped'}`} onClick={() => setCardOpen(isOpen ? 0 : card)}>
			<p>{isOpen ? card.response : card.question}</p>
		</div>
	);
}

function AddForm({ onSubmit }) {
	const [questionInput, setQuestionInput] = useState('');
	const [responseInput, setResponseInput] = useState('');

	function handleSubmit(event, questionInput, responseInput) {
		event.preventDefault();

		if (!questionInput || !responseInput) return;

		onSubmit(questionInput, responseInput);
		setQuestionInput('');
		setResponseInput('');
	}

	return (
		<form className='add-form' onSubmit={(event) => handleSubmit(event, questionInput, responseInput)}>
			<div>
				<label htmlFor='question'>Question</label>
				<input
					id='question'
					type='text'
					value={questionInput}
					required
					onChange={(event) => setQuestionInput(event.target.value)}
				/>
			</div>
			<div>
				<label htmlFor='response'>Response</label>
				<input
					id='response'
					type='text'
					value={responseInput}
					required
					onChange={(event) => setResponseInput(event.target.value)}
				/>
			</div>
			<button>Create</button>
		</form>
	);
}

export default App;

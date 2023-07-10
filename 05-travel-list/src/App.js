import { useState } from 'react';

export default function App() {
	const [itemsList, setItemsList] = useState([]);

	return (
		<div className='app'>
			<Logo />
			<Form setItemsList={setItemsList} />
			<PackingList itemsList={itemsList} setItemsList={setItemsList} />
			<Stats />
		</div>
	);
}

function Logo() {
	return <h1>🌴 Far Away 💼</h1>;
}

function Form({ setItemsList }) {
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);

	function clearInputs() {
		setDescription('');
		setQuantity(1);
	}

	function handleSubmit(event) {
		event.preventDefault();

		if (!description) return;

		const newItem = {
			id: Date.now(),
			quantity,
			description,
			isChecked: false,
		};

		setItemsList((list) => [...list, newItem]);

		clearInputs();
	}

	return (
		<form className='add-form' onSubmit={handleSubmit}>
			<h3>What do you need for you ✨tripe✨</h3>
			<select value={quantity} onChange={(event) => setQuantity(parseInt(event.target.value))}>
				{Array.from({ length: 20 }, (value, index) => index + 1).map((number) => (
					<option key={`${number} items`} value={number}>
						{number}
					</option>
				))}
			</select>
			<input
				placeholder='item...'
				value={description}
				onChange={(event) => setDescription(event.target.value)}
			/>
			<button type='submit'>ADD</button>
		</form>
	);
}

function PackingList({ itemsList, setItemsList }) {
	function checkItem(item) {
		setItemsList((list) =>
			list.map((listItem) => {
				if (listItem.id !== item.id) return listItem;

				const newItem = {
					id: item.id,
					quantity: item.quantity,
					description: item.description,
					isChecked: !item.isChecked,
				};

				return newItem;
			})
		);
	}

	function deleteItem(item) {
		setItemsList((list) => list.filter((listItem) => listItem.id !== item.id));
	}

	return (
		<div className='list'>
			<ul>
				{itemsList.map((item, index) => (
					<ListItem key={index} item={item} checkItem={checkItem} deleteItem={deleteItem} />
				))}
			</ul>
		</div>
	);
}

function ListItem({ item, checkItem, deleteItem }) {
	return (
		<li>
			<input type='checkbox' onChange={(_) => checkItem(item)} />
			<p style={item.isChecked ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</p>
			<button onClick={() => deleteItem(item)}>❌</button>
		</li>
	);
}

function Stats() {
	return <footer className='stats'>💼 You have 0 items on your list, and you already packed x (x%)</footer>;
}

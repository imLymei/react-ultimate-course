export default function App() {
	return (
		<div className='app'>
			<Logo />
			<Form />
			<PackingList />
			<Stats />
		</div>
	);
}

function Logo() {
	return <h1>🌴 Far Away 💼</h1>;
}

function Form() {
	return (
		<div className='add-form'>
			<h3>What do you need for you ✨tripe✨</h3>
		</div>
	);
}

const items = [
	{ id: 0, quantity: 2, description: 'toothbrush', isChecked: true },
	{ id: 1, quantity: 2, description: 't-shirt', isChecked: false },
];

function PackingList() {
	return (
		<div className='list'>
			<ul>
				{items.map((item, index) => (
					<ListItem key={index} item={item} />
				))}
			</ul>
		</div>
	);
}

function ListItem({ item }) {
	return (
		<li>
			<input type='checkbox' />
			<p style={item.isChecked ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</p>
			<button>❌</button>
		</li>
	);
}

function Stats() {
	return <footer className='stats'>💼 You have 0 items on your list, and you already packed x (x%)</footer>;
}

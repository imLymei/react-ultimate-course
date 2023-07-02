import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
	{
		name: 'Focaccia',
		ingredients: 'Bread with italian olive oil and rosemary',
		price: 6,
		photoName: 'pizzas/focaccia.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Margherita',
		ingredients: 'Tomato and mozarella',
		price: 10,
		photoName: 'pizzas/margherita.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Spinaci',
		ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
		price: 12,
		photoName: 'pizzas/spinaci.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Funghi',
		ingredients: 'Tomato, mozarella, mushrooms, and onion',
		price: 12,
		photoName: 'pizzas/funghi.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Salamino',
		ingredients: 'Tomato, mozarella, and pepperoni',
		price: 15,
		photoName: 'pizzas/salamino.jpg',
		soldOut: true,
	},
	{
		name: 'Pizza Prosciutto',
		ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
		price: 18,
		photoName: 'pizzas/prosciutto.jpg',
		soldOut: false,
	},
];

function App() {
	return (
		<div className='container'>
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

//React >= 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	//Faz checagem de códigos obsoletos e bugs em desenvolvimento
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

function Header() {
	// const style = { color: 'red', fontSize: '48px', textTransform: 'uppercase' };
	const style = {};

	return (
		<header className='header'>
			<h1 style={style}>Fast React Pizza Co.</h1>
		</header>
	);
}
function Menu() {
	const pizzas = pizzaData;
	// const pizzas = [];
	const hasPizza = pizzas.length > 0;

	return (
		<main className='menu'>
			<h2>Our Menu</h2>
			{hasPizza ? (
				<ul className='pizzas'>
					{pizzas.map((pizza, index) => (
						<Pizza key={index} pizzaObject={pizza} />
					))}
				</ul>
			) : (
				<p>we're still working on our menu. Please come later.</p>
			)}
		</main>
	);
}

function Pizza({ pizzaObject }) {
	if (pizzaObject.soldOut) return null;

	return (
		<li className='pizza'>
			<img src={pizzaObject.photoName} alt={`${pizzaObject.name}`} />
			<div>
				<h3>{pizzaObject.name}</h3>
				<p>{pizzaObject.ingredients}</p>
				<span>${pizzaObject.price}</span>
			</div>
		</li>
	);
}

function Footer() {
	const date = new Date();

	// return React.createElement('footer', null, "we're currently open!"); React without JSX
	const actualHour = date.getHours().toString().padStart(2, '0');
	const actualHours = `${actualHour}:${date.getMinutes().toString().padStart(2, '0')}`;
	const actualDate = date.toLocaleDateString();

	const openHour = 12;
	const closeHour = 22;
	const isOpen = actualHour >= openHour && closeHour > actualHour;

	const openText = `open until ${closeHour}:00. Come visit us or order online`;
	const closeText = `close. We're happy to welcome you between ${openHour}:00 and ${closeHour}:00.`;

	return (
		<footer className='footer'>
			<div className='order'>
				<p>
					{actualHours} - {actualDate}
				</p>
				<p>we're currently {isOpen ? openText : closeText}</p>
				<button className='btn'>order</button>
			</div>
		</footer>
	);
}

//React < 18
//React.render(<App />, document.getElementById('root'));

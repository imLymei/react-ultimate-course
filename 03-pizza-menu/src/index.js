import React from 'react';
import ReactDOM from 'react-dom';

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
		<main>
			<Header />
			<Menu />
			<Footer />
		</main>
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
	return <h1>Fast React Pizza Co.</h1>;
}
function Menu() {
	return (
		<div>
			<h2>Our Menu</h2>
			<Pizza />
			<Pizza />
			<Pizza />
			<Pizza />
		</div>
	);
}
function Footer() {
	// return React.createElement('footer', null, "we're currently open!"); React without JSX
	const actualHour = new Date().getHours();
	const actualDate = new Date().toLocaleDateString();

	const openHour = 12;
	const closeHour = 22;
	const isOpen = actualHour >= openHour && closeHour > actualHour;

	return (
		<footer>
			{actualDate} we're currently {isOpen ? 'open' : 'close'}!
		</footer>
	);
}

function Pizza() {
	return (
		<div>
			<img src='pizzas/spinaci.jpg' alt={pizzaData[2].name} />
			<h2>{pizzaData[2].name}</h2>
			<p>{pizzaData[2].ingredients}</p>
		</div>
	);
}

//React < 18
//React.render(<App />, document.getElementById('root'));

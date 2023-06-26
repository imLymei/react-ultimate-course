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
	return (
		<main className='menu'>
			<h2>Our Menu</h2>
			<Pizza
				name={pizzaData[2].name}
				image={pizzaData[2].photoName}
				ingredients={pizzaData[2].ingredients}
				price={pizzaData[2].price}
				isSoldOut={pizzaData[2].soldOut}
			/>
		</main>
	);
}

function Pizza({ name, image, ingredients, price, isSoldOut }) {
	return (
		<div className='pizza'>
			<img src={image} alt={`${name}`} />
			<h3>{name}</h3>
			<p>{ingredients}</p>
			<span>${price}</span>
		</div>
	);
}

function Footer() {
	const date = new Date();

	// return React.createElement('footer', null, "we're currently open!"); React without JSX
	const actualHour = date.getHours();
	const actualHours = `${actualHour}:${date.getMinutes()}`;
	const actualDate = date.toLocaleDateString();

	const openHour = 12;
	const closeHour = 22;
	const isOpen = actualHour >= openHour && closeHour > actualHour;

	return (
		<footer className='footer'>
			{actualDate} - {actualHours} we're currently {isOpen ? 'open' : 'close'}!
		</footer>
	);
}

//React < 18
//React.render(<App />, document.getElementById('root'));

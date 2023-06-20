// Dados Iniciais
//-----
const data = [
	{
		id: 1,
		title: 'The Lord of the Rings',
		publicationDate: '1954-07-29',
		author: 'J. R. R. Tolkien',
		genres: ['fantasy', 'high-fantasy', 'adventure', 'fiction', 'novels', 'literature'],
		hasMovieAdaptation: true,
		pages: 1216,
		translations: {
			spanish: 'El señor de los anillos',
			chinese: '魔戒',
			french: 'Le Seigneur des anneaux',
		},
		reviews: {
			goodreads: {
				rating: 4.52,
				ratingsCount: 630994,
				reviewsCount: 13417,
			},
			librarything: {
				rating: 4.53,
				ratingsCount: 47166,
				reviewsCount: 452,
			},
		},
	},
	{
		id: 2,
		title: 'The Cyberiad',
		publicationDate: '1965-01-01',
		author: 'Stanislaw Lem',
		genres: ['science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy'],
		hasMovieAdaptation: false,
		pages: 295,
		translations: {},
		reviews: {
			goodreads: {
				rating: 4.16,
				ratingsCount: 11663,
				reviewsCount: 812,
			},
			librarything: {
				rating: 4.13,
				ratingsCount: 2434,
				reviewsCount: 0,
			},
		},
	},
	{
		id: 3,
		title: 'Dune',
		publicationDate: '1965-01-01',
		author: 'Frank Herbert',
		genres: ['science fiction', 'novel', 'adventure'],
		hasMovieAdaptation: true,
		pages: 658,
		translations: {
			spanish: '',
		},
		reviews: {
			goodreads: {
				rating: 4.25,
				ratingsCount: 1142893,
				reviewsCount: 49701,
			},
		},
	},
	{
		id: 4,
		title: "Harry Potter and the Philosopher's Stone",
		publicationDate: '1997-06-26',
		author: 'J. K. Rowling',
		genres: ['fantasy', 'adventure'],
		hasMovieAdaptation: true,
		pages: 223,
		translations: {
			spanish: 'Harry Potter y la piedra filosofal',
			korean: '해리 포터와 마법사의 돌',
			bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
			portuguese: 'Harry Potter e a Pedra Filosofal',
		},
		reviews: {
			goodreads: {
				rating: 4.47,
				ratingsCount: 8910059,
				reviewsCount: 140625,
			},
			librarything: {
				rating: 4.29,
				ratingsCount: 120941,
				reviewsCount: 1960,
			},
		},
	},
	{
		id: 5,
		title: 'A Game of Thrones',
		publicationDate: '1996-08-01',
		author: 'George R. R. Martin',
		genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
		hasMovieAdaptation: true,
		pages: 835,
		translations: {
			korean: '왕좌의 게임',
			polish: 'Gra o tron',
			portuguese: 'A Guerra dos Tronos',
			spanish: 'Juego de tronos',
		},
		reviews: {
			goodreads: {
				rating: 4.44,
				ratingsCount: 2295233,
				reviewsCount: 59058,
			},
			librarything: {
				rating: 4.36,
				ratingsCount: 38358,
				reviewsCount: 1095,
			},
		},
	},
];

function getBooks() {
	return data;
}

function getBook(id) {
	return data.find((d) => d.id === id);
}

//-----

const book = getBook(3);

// Desestruturando um objeto

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;

// const title = book.title
// const author = book.author

console.log(title);
console.log(author);

// Desestruturando uma array e Rest operator

const [primaryGenre, secondaryGenre, ...othersGenres] = genres;

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

console.log(primaryGenre);
console.log(secondaryGenre);
console.log(othersGenres);

// Desestruturando uma array com Spread operator

const newGenres = [...genres, 'epic fantasy'];

console.log(newGenres);

const updatedBook = {
	...book,
	// Adicionando uma nova propriedade
	moviePublicationDate: '2001-12-19',
	// Modificando uma propriedade existente
	pages: 1210,
};

console.log(updatedBook);

//Ternaries operator

const pagesRange = pages > 1000 ? 'over a thousand' : 'less than a thousand';

console.log(pagesRange);

//Arrow function

const getYear = (date) => date.split('-')[0];

//String literal

const summary = `${title} is a book of genres ${primaryGenre} and ${secondaryGenre}, and it was published in ${getYear(
	publicationDate
)}. The book has ${pagesRange} pages and ${hasMovieAdaptation ? '' : 'do not'} have a movie adaptation`;

console.log(summary);

//Short-circuiting e Operadores Lógicos

console.log(true && 'A string');
console.log(false && 'A string');
console.log(0 && 'A string');

console.log(true || 'A string');
console.log(false || 'A string');
console.log(0 || 'A string');

console.log(true ?? 'A string');
console.log(false ?? 'A string');
console.log(0 ?? 'A string');

//falsos: 0, '', null, undefined
console.log('a' && 'b');
console.log('' && 'b');
console.log(0 && 'b');
console.log(null && 'b');
console.log(undefined && 'b');

console.log(hasMovieAdaptation && 'This book has a movie adaptation');

const spanishTranslation = book.translations.spanish || 'Not Translated';
console.log(spanishTranslation);

const countWrong = book.reviews.librarything?.reviewsCount || 'No data';
console.log(countWrong);

const count = book.reviews.librarything?.reviewsCount ?? 'No data';
console.log(count);

//Optional chaining

function getTotalReviewCount(book) {
	const goodReads = book.reviews.goodreads.reviewsCount;
	const librarything = book.reviews.librarything?.reviewsCount ?? 0;

	return goodReads + librarything;
}

console.log(getTotalReviewCount(book));

//Método Map

const books = getBooks();

const tempArray = [1, 2, 3, 4, 5].map((number) => number * 2);
console.log(tempArray);

const titles = books.map((book) => book.title);
console.log(titles);

const essentialData = books.map((book) => ({
	title: book.title,
	author: book.author,
	reviewsCount: getTotalReviewCount(book),
}));
console.log(essentialData);

//Método Filter
const longBooks = books.filter((book) => book.pages > 500).filter((book) => book.hasMovieAdaptation);
console.log(longBooks);

const adventureBooks = books.filter((book) => book.genres.includes('adventure')).map((book) => book.title);
console.log(adventureBooks);

//Método Reduce
const pagesAllBooks = books.reduce((total, book) => total + book.pages, 0);
console.log(pagesAllBooks);

//Método Sort
const numbers = [3, 4, 51, 6, 7, 2, 6];
const sorted = numbers.slice().sort((a, b) => a - b);

console.log(sorted);
console.log(numbers);

//a-b => menor para o maior
//b-a => maior para o menor
const sortedBooks = books
	.slice()
	.map((book) => ({ title: book.title, pages: book.pages }))
	.sort((a, b) => a.pages - b.pages);

console.log(sortedBooks);

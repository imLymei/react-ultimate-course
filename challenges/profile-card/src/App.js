import './App.css';

function App() {
	const name = 'Felipe Cardoso';
	const imageLink =
		'https://pps.whatsapp.net/v/t61.24694-24/260273787_649081766662989_8209625527244347082_n.jpg?ccb=11-4&oh=01_AdR8I4o12nnmxXBCZXxDS8JzDrJ_JnfNLJN_k954QS3Ylg&oe=64A9F374';
	const description =
		'Eu sou Felipe Cardoso, um programador de 19 anos apaixonado por React e Next.js. Adoro transformar minhas ideias em projetos concretos, explorando minha habilidade e criatividade para programar tudo o que posso imaginar';
	const tags = [
		{ name: 'React', level: 'intermediate' },
		{ name: 'Next.js', level: 'intermediate' },
		{ name: 'Javascript', level: 'intermediate' },
		{ name: 'Typescript', level: 'intermediate' },
		{ name: 'HTML & CSS', level: 'expert' },
		{ name: 'Python', level: 'intermediate' },
		{ name: 'SQL', level: 'intermediate' },
		{ name: 'AWS', level: 'beginner' },
		{ name: 'Git & Github', level: 'expert' },
	];

	const user = { name: name, imageLink: imageLink, description: description, tags: tags };

	return (
		<div>
			<Card user={user} />
		</div>
	);
}

function Card({ user }) {
	return (
		<div className='card'>
			<img draggable={false} src={user.imageLink} alt={user.name} className='image' />
			<div className='info'>
				<Info user={user} />
				<SkillList tags={user.tags} />
			</div>
		</div>
	);
}

function Info({ user }) {
	return (
		<>
			<h3 className='name'>{user.name}</h3>
			<p className='description'>{user.description}</p>
		</>
	);
}

function SkillList({ tags }) {
	const colors = ['red', 'orange', 'dark-blue', 'blue', 'yellow', 'green'];
	return (
		<ul className='tag-holder'>
			{tags.map((tag, index) => (
				<li key={index} className={`tag ${colors[index % colors.length]}`}>
					{tag.name} <LevelTag level={tag.level} />
				</li>
			))}
		</ul>
	);
}

function LevelTag({ level }) {
	return level === 'beginner' ? '😊' : level === 'intermediate' ? '😀' : '😁';
}

export default App;

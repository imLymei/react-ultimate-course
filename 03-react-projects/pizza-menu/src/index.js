import React from 'react';
import ReactDOM from 'react-dom';

function App() {
	return <h1>Hello React</h1>;
}

//React >= 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	//Faz checagem de códigos obsoletos e bugs em desenvolvimento
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

//React < 18
//React.render(<App />);

import './App.css';
import MyForm1 from './components/MyForm1';
import MyForm2 from './components/MyForm2';

function App() {
	return (
		<div className="App">
			<header className="App-header">React Forms</header>
			<main>
				<MyForm1 />
				<hr />
				<MyForm2 />
			</main>
		</div>
	);
}

export default App;

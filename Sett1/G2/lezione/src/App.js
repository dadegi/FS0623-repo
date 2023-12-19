import './App.css';
import State from './components/State';
import StateClass from './components/StateClass';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Gestire lo stato dei components</h1>
			</header>
			<main>
				<State />
				<hr />
				<StateClass />
			</main>
		</div>
	);
}

export default App;

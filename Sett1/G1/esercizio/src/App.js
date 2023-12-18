import './App.css';
import ImmagineComponent from './components/Immagine';
import Button from './components/Button';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Button label="CLICCA" />
				<ImmagineComponent
					id="piccola"
					src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg"
					alt="immagine codice"
				/>
				<ImmagineComponent
					src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
					alt="web design"
				/>
				<Button label="Altro button" />
			</header>
		</div>
	);
}

export default App;

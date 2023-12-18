import './App.css';
import Header from './components/Header';
import Benvenuto from './components/Benvenuto';
import BenvenutoClass from './components/BenvenutoClass';
import ClassComponent from './components/ClassComponent';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<hr />
			<Benvenuto name="Domenico" />
			<Benvenuto name="Abel" />
			<Benvenuto name="Gaetano" />
			<hr />
			<BenvenutoClass name="Alessandro" />
			<BenvenutoClass name="Francesco" />
			<hr />
			<ClassComponent />
			<hr />
			<Footer />
		</div>
	);
}

export default App;

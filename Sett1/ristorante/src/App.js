import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import Prenotazione from './components/Prenotazione';
import ListaPrenotazioni from './components/ListaPrenotazioni';


function App() {
	return (
		<div>
			<CustomNavbar testoAddizionale="Il nostro ristorante epico!" />
			<Home />
			<Prenotazione />
		</div>
	);
}

export default App;

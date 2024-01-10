import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import Prenotazione from './components/Prenotazione';
import ListaPrenotazioni from './components/ListaPrenotazioni';
import Menu from './components/Menu';
import Dettaglio from './components/Dettaglio';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="d-flex flex-column h-100">
				<CustomNavbar additionalText="Il ristorante epico!" />
				<div className="flex-grow-1">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/prenotazione" element={<Prenotazione />} />
						<Route path="/list" element={<ListaPrenotazioni />} />
						<Route path="/menu" element={<Menu />} />
						<Route path="/detail/:elementId" element={<Dettaglio />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
				<footer className="text-center fixed-bottom bg-black text-light">
					<h4>EPICODE {new Date().getFullYear()}</h4>
				</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;

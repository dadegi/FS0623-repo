import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Home from './Components/Home';
import About from './Components/About';
import Interno from './Components/Interno';
import Personal from './Components/Personal';
import NotFound from './Components/NotFound';
import MyNavbar from './Components/MyNavbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
					<MyNavbar />
				</header>
				<Container>
					<Routes>
						{/* Rotte Navbar */}
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="*" element={<NotFound />} />
						{/* Rotta secondaria da About */}
						<Route path="/about/interno" element={<Interno />} />
						{/* Rotta dopo il login */}
						<Route path="/personal" element={<Personal />} />
					</Routes>
				</Container>
			</div>
		</BrowserRouter>
	);
}

export default App;

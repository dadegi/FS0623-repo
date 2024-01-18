import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<MyNavbar />
				<Routes>
					<Route path="/" element={<ClassComponent textContent="Contenuto passato come prop" h2Color="red" />} />
					<Route path="/functional" element={<FunctionalComponent textContent="Contenuto passato come prop" />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

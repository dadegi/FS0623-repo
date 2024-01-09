import './App.css';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseState />
        <hr />
        <UseEffect />
      </header>
    </div>
  );
}

export default App;

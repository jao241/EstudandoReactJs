import './App.css';
import Lista from './components/Lista';

function App() {
  const lista = ["React", "Vue", "Angular"];

  return (
    <div className="App">
      <p>Renderização de listas</p>
      <Lista itens={lista}/>
    </div>
  );
}

export default App;

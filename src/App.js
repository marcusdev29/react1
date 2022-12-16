import logo from './img/x.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          "A educação é o nosso passaporte para o futuro, pois, o amanhã pertence as pessoas que se preparam hoje."
        </p>
        <a
          className="App-link"
          href="https://www.pensador.com/frases_de_malcolm_x/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ler mais
        </a>
      </header>
    </div>
  );
}

export default App;

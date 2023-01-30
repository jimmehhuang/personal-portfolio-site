import logo from './logo.svg';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Work in Progress! Please check back soon for an updated working site.<br/>
          -Jimmy Huang, aspiring developer
        </p>
      </header>
    </div>
  );
}

export default App;

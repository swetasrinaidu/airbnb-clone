import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import CardList from './Components/CardList';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero />
       <CardList/>

    </div>
  );
}

export default App;

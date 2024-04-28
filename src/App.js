import './App.css';
import Calculate from './pages/main/Calculate';
import Contacts from './pages/main/Contacts';
import Header from './pages/main/Header';
import Hero from './pages/main/Hero';
import Place from './pages/main/Place';
import Stonks from './pages/main/Stonks';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stonks/>
      <Calculate/>
      <Contacts/>

      <Place/>
    </div>
  );
}

export default App;

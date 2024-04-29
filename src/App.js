import './App.css';
import Calculate from './pages/main/Calculate';
import Contacts from './pages/main/Contacts';
import Footer from './pages/main/Footer';
import Header from './pages/main/Header';
import Hero from './pages/main/Hero';
import More from './pages/main/More';
import Place from './pages/main/Place';
import Plan from './pages/main/Plan';
import Projects from './pages/main/Projects';
import Stonks from './pages/main/Stonks';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stonks />
      <Calculate />
      <Contacts />
      <Plan />
      <Place />
      <More />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

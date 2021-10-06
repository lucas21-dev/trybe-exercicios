import './App.css';
import Pokedex from './components/pokedex';
import Header from './components/header'
import Footer from './components/footer'
function App() {
  return (
  <div className="App">
    <Header/>
    <main> 
      <Pokedex/>
    </main>
    <Footer />
  </div>
  );
}

export default App;

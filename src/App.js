import './reset.css'
import './App.css';
import Header from './components/Header'
import MechList from './components/MechList'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
     <Header />
     <MechList />
     <Footer />
    </div>
  );
}

export default App;

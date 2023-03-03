import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;

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
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Page from './Components/page';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div className='Container'>
        <Header/>
        <Page />
        <Footer/>
      </div>
    </div>
  );
}

export default App;

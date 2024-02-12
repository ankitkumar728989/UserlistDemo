import './App.css';
import Routing from "./routing"
import Header from './commonModule/header';
import Footer from './commonModule/footer';
function App() {
  return (
    <div className="App">
      <div className='header'>
       <Header/>
       </div>
       <Routing/>
       <Footer/>
    </div>
  );
}

export default App;

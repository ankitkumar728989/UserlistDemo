import './App.css';
import Routing from "./routing"
import Header from './commonModule/header';
import Footer from './commonModule/footer';
function App() {
  return (
    <div className="App">
       <Header className="header"/>
       <Routing className="routing"/>
       <Footer className="footer"/>
    </div>
  );
}

export default App;

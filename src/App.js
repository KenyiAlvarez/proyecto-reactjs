import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Inicio from './components/Pages/Inicio'
import Items from './components/Pages/Items'

function App() {
  
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Inicio/>}/>
          <Route exact path="/Items" element={<Items/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

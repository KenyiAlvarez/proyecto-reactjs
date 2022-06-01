import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Inicio from './components/Pages/Inicio'
import Items from './components/Pages/Items'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget'


function App() {
  
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Inicio/>}/>
          <Route exact path="/Items" element={<Items/>}/>
          <Route exact path="/CartWidget" element={<CartWidget/>}/>
        </Routes>
        <ItemListContainer/>
      </Router>
    </div>
  );
}

export default App;

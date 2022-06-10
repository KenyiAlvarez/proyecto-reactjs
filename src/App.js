import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style/style.css"
import { Nav } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/categorias/:categoryId' element={ <ItemListContainer/> } />
          <Route path='/item/:itemId' element={ <ItemDetailContainer/> } /> 
          <Route path='*' element={ <Navigate to={"/"}/> } />
        </Routes>

    </BrowserRouter>
    
    
  );
}

export default App;

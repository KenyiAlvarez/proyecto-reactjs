import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';

function App() {
  return (

    <CartProvider>

    <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/categorias/:categoryId' element={ <ItemListContainer/> } />
          <Route path='/item/:itemId' element={ <ItemDetailContainer/> } /> 
          <Route path='/cart' element={ <Cart/> } />
          <Route path='*' element={ <Navigate to={"/"}/> } />
        </Routes>

    </BrowserRouter>
    
    </CartProvider>
  );
}

export default App;

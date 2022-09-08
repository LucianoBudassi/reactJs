import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/productos" element={<ItemListContainer></ItemListContainer>}>
          </Route>
          <Route path="/categoria/:categoria" element={<ItemListContainer></ItemListContainer>}>
          </Route>
          <Route path="/detalles/:id" element={<ItemDetailContainer></ItemDetailContainer>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
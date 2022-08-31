import './App.css';
import Navbar from './Navbar/Navbar';
import ItemsCards from './Cards/itemsCards';
import ItemCount from './Cards/itemCount';
import ItemListConteiner from './productosConteiner/itemListConteiner';



const App = () => {

    return (
       <>
       <Navbar/>
       <ItemsCards/>
       <ItemCount stock={10}/>
       <ItemListConteiner/>


       </>
    )
}

export default App;
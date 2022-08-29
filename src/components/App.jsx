import './App.css';
import Navbar from './Navbar/Navbar';
import ItemsCards from './Cards/itemsCards';
import { useState } from 'react';



const App = () => {

    const [cont, setCont] = useState(0);

    return (
       <>
       <Navbar/>
       <ItemsCards/>
       <p>
        
        Cantidad: {cont}

       </p>
       <button className='btn btn-sumar' onClick={() => setCont(cont + 1)}>
            +
        </button>
       <button className='btn btn-restar'onClick={() => setCont(cont - 1)}>
            -
        </button>
       </>
       
    )
}

export default App;
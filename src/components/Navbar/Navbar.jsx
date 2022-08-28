import React from 'react';
import './Navbar.css';
import CarWidgets from './CarWidgets';



const Navbar = () => {
    return (
        
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             <div className="container-fluid">
                 <a className="navbar-brand" href="#">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarColor02">
                  <ul className="navbar-nav me-auto">
                     <li className="nav-item">
                         <a className="nav-link active" href="#">Home</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" href="#">Features</a>
                     </li>
                    </ul>
                    <CarWidgets contBuscar={"Busca tus productos"}/>
                 </div>
             </div> 
         </nav>

     </div>
         
        /*  */
    );
}

export default Navbar;

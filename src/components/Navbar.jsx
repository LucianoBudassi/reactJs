import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CarWidgets from './CarWidgets';
import {Link} from 'react-router-dom';
import '../App.css';


function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
          <Container>
            <Link to="/productos"><p>Ver todo</p></Link>
            <Link to="/categoria/Malbec"><p>Malbec</p></Link>
            <Link to="/categoria/Cabernet"><p>Cabernet</p></Link>
              <CarWidgets/>
          </Container>
        </Navbar>
    );
  }
  
  export default NavBar;
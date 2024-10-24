import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Badge}  from 'react-bootstrap';
import Logo from'../assets/reshot-icon-shopping-59RGYU8WZC.svg';
import '../style/nav.css';
import Cart from '../assets/reshot-icon-shopping-cart-NFVWXUAK3D.svg'
function Navv() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky="top">
    <Container>
      <Navbar.Brand>
        <span className="brand-text">Store</span>
        <img src={Logo} alt="logo" className="logo" width={40} height={40} /> 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto nav-content">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/">Products</Nav.Link>  
        </Nav>
        <Nav.Link as={Link} to="/cart" className="cart-badge">
           <img src={Cart} alt="cart" width={30} height={30} style={{transform: 'scaleX(-1)'}} />
            <Badge bg="danger" style={{borderRadius:'20px' ,marginBottom:"20px" ,marginLeft:'2px'}}>{'0'}</Badge>
          </Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Navv;
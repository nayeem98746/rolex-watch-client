import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/UseAuth';

const Header = () => {
  const {user ,  logout} = useAuth()

    return (
        <div>
          
  <Navbar bg="dark" variant="dark" sticky='top' collapseOnSelect expand='lg'>
    <Container>
    <Navbar.Brand href="#home">Rolex</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/service">Service</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
{ 
  user?.email ?  
  <Button onClick={logout} >Logout</Button> :

  <Nav.Link as={Link} to="/login">Login</Nav.Link>
}  

          <Navbar.Text>
              Signed in as: <a href="#login">{user?.email}</a>
          </Navbar.Text>

  </Navbar.Collapse>
    </Container>
  </Navbar>
  

        </div>
    );
};

export default Header;
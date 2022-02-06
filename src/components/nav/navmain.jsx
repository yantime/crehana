import { NavLink } from "react-router-dom";

import { Container, Navbar, Nav, Button } from "react-bootstrap";

import "./nav.css";

export function NavMain() {
  return (
    <div className="container">
    <Navbar bg="light" variant="light">
      <div className="container">
        <Navbar.Brand href="#home">Store</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
           
          <NavLink to="/landing" >
            Inicio
          </NavLink>
          </Nav.Link>

          <Nav.Link>
          <NavLink to="/catalogo" >
            Catalogo
          </NavLink>
          </Nav.Link>

          <Nav.Link>
            
          <NavLink to="/producto:id" >
            Producto
          </NavLink>
          </Nav.Link>

          <Nav.Link>
          <NavLink to="/login" >
          <Button variant="outline-success">Login</Button>{' '}
          </NavLink>
          </Nav.Link>

          <Nav.Link>
          <NavLink to="/register" >
          <button className = "btn btn-success">Registro</button>
          </NavLink>
          </Nav.Link>

        </Nav>
      </div>
    </Navbar>
    </div>

    
    
  );
}
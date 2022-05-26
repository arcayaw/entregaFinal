import CartWidget from "../CarWidget/CarWidget";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import LogoNunchi from "../../assets/image/LogoNunchiNegro.png";
import "./Header.css";
export default function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className=" display-1">
            <Link to="/">
              <img src={LogoNunchi} className="nav__logo" alt="Nunchi Logo" />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto nav__menu">
              <NavDropdown
                title="Boxes Prediseñadas"
                id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink to="/products" className="categorias">
                    Ver todo
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <NavLink to="/category/1">Kids</NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/category/2">Bebidas</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/category/3">Desayunos</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Link to="/contacto">Contacto</Link>
              <Link to="/nosotros">Nosotros</Link>
              <CartWidget />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

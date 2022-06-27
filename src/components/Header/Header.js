import React from "react";
import CartWidget from "../CarWidget/CarWidget";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
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
              <Link to="/category/kids">Kids</Link>
              <Link to="/category/bebidas">Bebidas</Link>
              <Link to="/category/desayunos">Desayunos</Link>
              <Link to="/products">Todas</Link>
              <CartWidget />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

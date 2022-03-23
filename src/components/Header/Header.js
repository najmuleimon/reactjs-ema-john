import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className='navbar'>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Order</Nav.Link>
                    <Nav.Link href="#link">Order Review</Nav.Link>
                    <Nav.Link href="#link">Manage Inventory</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;
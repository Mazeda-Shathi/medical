import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Image, Nav, Navbar, NavLink } from 'react-bootstrap';

import img from '../../../banner.jpg';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/home#home" className="fw-bold fs-2">Delight Sun Clinic</Navbar.Brand>
                    <Nav className="mx-auto text-light">
                        <Nav.Link href="/home#home" className="fw-bold text-light fs-5">Home</Nav.Link>
                        <Nav.Link href="/home#services" className="fw-bold text-light fs-5">Services</Nav.Link>
                        <Nav.Link href="/about" className="fw-bold text-light fs-5">About Us</Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="/login" className="fw-bold text-light fs-5">Log In</Nav.Link>
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>


    );
};

export default Header;
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { button, Container, Image, Nav, Navbar, NavLink } from 'react-bootstrap';

import img from '../../../banner.jpg';
import UseAuth from '../../../hooks/UseAuth';

const Header = () => {
    const { user, logOut } = UseAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/home#home" className="fw-bold fs-2">Delight Sun Clinic</Navbar.Brand>
                    <Nav className="mx-auto text-light">
                        <Nav.Link href="/home#home" className="fw-bold text-light ">Home</Nav.Link>
                        <Nav.Link href="/home#services" className="fw-bold text-light">Services</Nav.Link>
                        <Nav.Link href="/home#campaign" className="fw-bold text-light ">Campaign</Nav.Link>
                        <Nav.Link href="/home#branch" className="fw-bold text-light ">Branches</Nav.Link>
                        <Nav.Link href="/doctor" className="fw-bold text-light ">Doctor List</Nav.Link>
                        <Nav.Link href="/online" className="fw-bold text-light ">Online Booking</Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {user?.email ?
                            <button className="bg-light text-dark" onClick={logOut}>Log Out</button> :
                            <Nav.Link href="/login" className="fw-bold text-light fs-5">Log in</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>


    );
};

export default Header;
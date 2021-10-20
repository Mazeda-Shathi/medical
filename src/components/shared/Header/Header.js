import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import img from '../../../banner.jpg';

const Header = () => {
    return (
        <div>
            <Navbar className="bg-dark sticky-top">
                <Container >
                    <Navbar.Brand href="/home" className=" text-light fw-bold fs-600 fs-2">Delight Sun Clinic</Navbar.Brand>
                    <Navbar.Toggle />


                    <Nav className="mx-auto ">
                        <Nav.Link href="/home" className=" text-light">Home</Nav.Link>
                        <Nav.Link href="/Services" className=" text-light">Services</Nav.Link>
                        <Nav.Link href="/about" className=" text-light">About us</Nav.Link>
                    </Nav>

                    <Navbar.Collapse className="justify-content-end  text-light">
                        <Button className="m-2 fw-bold border border-0 bg-dark text-light">Log in</Button>
                        <Navbar.Text className=" text-light">
                            Signed in as: <a href="/login" className=" text-light">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar >

        </div>


    );
};

export default Header;
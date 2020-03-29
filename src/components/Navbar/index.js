import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';




function NavBar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Clint Gordy</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                />
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    );
}

export default NavBar;
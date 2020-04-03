import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const Header = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Random Stuff</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="ml-auto">
                    <Nav.Link href="/projectmanagement">Project Management</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
            </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header

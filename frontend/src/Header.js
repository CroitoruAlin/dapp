import React from "react";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const Header = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/register">Register</Link>
                    <Link className="nav-link" to="/rent">Rent</Link>
                    <Link className="nav-link" to="/reclaim">Reclaim</Link>
                    <Link className="nav-link" to="/Info">RentedSpots</Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
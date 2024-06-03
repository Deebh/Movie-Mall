
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleToggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <NavbarContainer>
            <Navbar expand="lg" className="mak" expanded={isCollapsed}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggleCollapse} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/welcome" >Home</Link>
                    </Nav>
                    <Nav>
                        <Link className="nav-link" to="/Signin" >Login</Link>
                        <Link className="nav-link" to="/Signup">Register</Link>
                        <Link className="nav-link" to="/welcome">Logout</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavbarContainer>
    );
};

export default NavBar;

// Main navbar container
const NavbarContainer = styled.div`
    background: var(--dark-green);
    .nav-link {
        color: rgb(207, 77, 41) !important;
        &:hover {
            background: var(--light-green);
        }
    }
    .navbar-toggler {
        background-color:rgb(207, 77, 41)!important;
    }
`;
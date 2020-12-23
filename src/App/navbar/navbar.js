import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from './../../contexts/AuthContext';
import { NavDropdown } from 'react-bootstrap';

import "./navbar.css";

export default function Navbar() {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return (
            <div>
                <nav>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/">Home</Link>
                </nav>
            </div>
        );
    } else {
        return (
            <div>
                <nav>
                    <NavDropdown className="NavDrop" title={currentUser.email}>
                        <NavDropdown.Item>Sign Out</NavDropdown.Item>
                    </NavDropdown>
                    <Link to="/">Home</Link>
                </nav>
            </div>
        );
    }
}
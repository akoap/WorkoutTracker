import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './../../contexts/AuthContext';
import "./navbar.css";

export default function Navbar() {
    const { currentUser, logout } = useAuth();


    async function handleLogout(e) {
        await logout();
    }

    if (!currentUser) {
        return (
            <div>
                <nav>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </div>
        );
    } else {
        return (
            <div>
                <nav>
                    <Link onClick={handleLogout} to="/login">Sign Out</Link>
                    <Link to="/">Home</Link>
                </nav>
            </div>
        );
    }
}
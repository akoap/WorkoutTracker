import React from "react";
import { Link } from "react-router-dom"; 

export class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/about">About</Link>
                    <Link to="/">Home</Link>
                </nav>
            </div>
        );
    }
}
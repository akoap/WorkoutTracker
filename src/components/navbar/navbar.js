import React from "react";
import { Link } from "react-router-dom"; 

export class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/signupLogin">Signup/Login</Link></li>
                </nav>
            </div>
        );
    }
}
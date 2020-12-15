import './App.css';
import React, { Component } from "react";
import {
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Link, 
    Redirect,
    useLocation 
} from "react-router-dom";

// Pages
import MainPage from "./pages";
import NotFound from "./pages/notFound";
import About from "./pages/about";
import SignupLogin from "./pages/signupLogin"

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/signupLogin">Signup/Login</Link></li>
                </nav>
            </div>
            <Switch>
                <Route exact path="/" component={MainPage}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/signupLogin" component={SignupLogin}></Route>
                <Route exact path="/404" component={NotFound}></Route>
                <Redirect to="/notfound"></Redirect>
            </Switch>
        </Router>
    );
}

export default App;

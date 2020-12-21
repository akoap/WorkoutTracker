import './index.css';
import React, { Component } from "react";
import {
    BrowserRouter as Router, 
    Route, 
    Switch
} from "react-router-dom";

// Pages
import Home from "./pages";
import NotFound from "./pages/notFound";
import About from "./pages/about";
import Login from "./pages/login"
import Signup from "./pages/signup"

// Components
import { Navbar } from './navbar';


class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/signup" component={Signup}></Route>
                    <Route exact path="*" component={NotFound}></Route>
                </Switch>
            </Router>
        );
    }
}

export default App;

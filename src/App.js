import './App.css';
import React from "react";
import {
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Redirect 
} from "react-router-dom";

// Pages
import MainPage from "./pages";
import NotFound from "./pages/notFound";
import About from "./pages/about";
import SignupLogin from "./pages/signupLogin"
import { Navbar } from './components/navbar';

function App() {
    return (
        <Router>
            <Navbar />
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

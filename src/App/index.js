import './index.css';
import React from "react";
import {
    BrowserRouter as Router, 
    Route, 
    Switch
} from "react-router-dom";

// Pages
import Home from "./pages";
import NotFound from "./pages/notFound";
import Login from "./pages/login"
import Signup from "./pages/signup"

// Components
import Navbar from './navbar/navbar';
import { useAuth } from '../contexts/AuthContext';

function App() {
    const { currentUser } = useAuth();
    if (currentUser) {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/signup" component={Signup}></Route>
                    <Route exact path="*" component={NotFound}></Route>
                </Switch>
            </Router>
        );
    }
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/signup" component={Signup}></Route>
                <Route exact path="*" component={NotFound}></Route>
            </Switch>
        </Router>
    );

}

export default App;

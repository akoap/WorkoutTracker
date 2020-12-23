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
import About from "./pages/about";
import Login from "./pages/login"
import Signup from "./pages/signup"

// Components
import Navbar from './navbar/navbar';
import { AuthProvider } from '../contexts/AuthContext';

function App() {
        return (
            <Router>
                <AuthProvider>
                    <Navbar />
                </AuthProvider>
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

export default App;

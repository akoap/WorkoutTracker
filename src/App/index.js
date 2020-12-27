import './index.css';
import React from'react';
import {
    BrowserRouter as Router, 
    Route, 
    Switch
} from 'react-router-dom';
import { AuthProvider } from './../contexts/AuthContext';

// Pages
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/index';

// Components
import Navbar from './navbar/navbar'

function App() {
    return (
        <Router>
            <AuthProvider>
                <Navbar />
            </AuthProvider>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/signup" component={Signup}></Route>
                <Route exact path="*"></Route>
            </Switch>
        </Router>
    );
}

export default App;

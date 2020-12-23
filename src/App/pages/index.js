import React from "react";
import Exercises from "../exercises/exercises"
import { AuthProvider } from './../../contexts/AuthContext';

const Home = () => {
    return (
        <AuthProvider>
            <Exercises />
        </AuthProvider>
    );
}

export default Home;
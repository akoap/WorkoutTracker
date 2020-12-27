import React from 'react';
import Exercises from '../exercises/exercises';
import { AuthProvider } from './../../contexts/AuthContext';
import { DBProvider } from './../../contexts/DBContext';

function Home() {
    return (
        <AuthProvider>
            <DBProvider>
                <Exercises />
            </DBProvider>
        </AuthProvider>
    );
}

export default Home;
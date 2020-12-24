import React from 'react';
import './exercises.css';
import { useAuth } from './../../contexts/AuthContext';
import { Redirect } from 'react-router-dom';

export default function Exercises() {
    const { currentUser } = useAuth();
    if (currentUser) {
        return (
            <>
                <div className="Box">
                    <h3>Hello</h3>
                </div>
                <div className="Box">
                    <p></p>
                </div>
            </>
        );
    } else {
        return (
            <Redirect to='/login' />
        );
    }
    
}
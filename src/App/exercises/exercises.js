import React from 'react';
import './exercises.css';
// import { db } from './../../firebase';
// import { useAuth } from './../../contexts/AuthContext';

export default function Exercises() {
    // const { currentUser } = useAuth();
    // let userData = {};
    /* const data = db.collection('users').doc(currentUser.email).onSnapshot((doc) => {
        userData = doc.data();
    }); */

    const today = new Date();
    let day = today.getDay();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    // const difference = today - 

    switch (day) {
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
        default:
            break;
    }

    return (
        <>
            <div className="Box">
                <h3>Workout for {day}, {month}/{date}</h3>
            </div>
            <div className="Box">
                <p></p>
            </div>
        </>
    );
}
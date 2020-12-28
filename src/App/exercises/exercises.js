import React from 'react';
import './exercises.css';
import { useAuth } from './../../contexts/AuthContext';
import { useDB } from './../../contexts/DBContext';
import { db } from './../../firebase';

export default function Exercises() {
    const { currentUser } = useAuth();
    const { userData } = useDB();
    
    init(userData, currentUser)
    let workoutMat = updateWorkout(userData);
    let workout = getWorkout(userData, currentUser);

    if (workout) {
        return (
            <>
                <div className="Box">
                    <h3>{getHeader(updateTime())}</h3>
                </div>
                <div className="Box">
                    <h3>{workout[0][0].type}: </h3>
                    <br />
                    <p>3 x {workoutMat[1]} with {workout[0][1] * workoutMat[0][0]}, {workout[0][1] * workoutMat[0][1]}, {workout[0][1] * workoutMat[0][2]} {workout[0][0].weightType}</p>
                </div>
                <div className="Box">
                    <h3>{workout[1][0].type}: </h3>
                    <br />
                    <p>5 x 10 with {workout[1][1] * workoutMat[2]} {}</p>
                </div>
                <div className="Box">
                    <h3>{workout[2][0].type}: </h3>
                    <br />
                    <p>5 x 10 with {workout[2][1] * workoutMat[2]} {workout[2][0].weightType}</p>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="Box">
                    <h3>No workout for today, relax!</h3>
                </div>
            </>
        );
    }
}

function updateTime() {
    let currentTime = new Date();
    return currentTime;
}
setInterval(updateTime, 86400000);

function getHeader(time) {
    let day = time.getDay();
    let date = time.getDate();
    let month = time.getMonth() + 1;

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

    switch (month) {
        case 1:
            month = 'January';
            break;
        case 2:
            month = 'February';
            break;
        case 3:
            month = 'March';
            break;
        case 4:
            month = 'April';
            break;
        case 5:
            month = 'May';
            break;
        case 6:
            month = 'June';
            break;
        case 7:
            month = 'July';
            break;
        case 8:
            month = 'August';
            break;
        case 9:
            month = 'September';
            break;
        case 10:
            month = 'October';
            break;
        case 11:
            month = 'November';
            break;
        case 12:
            month = 'December';
            break;
        default:
            break;
    }

    return 'Here is your workout for ' + day + ', ' + month + ' ' + date;
}

function getWorkout(userData) {
    let workout;
    let difference = getDateDifference(userData);

    const primaryBench = {
        type: "Bench Press",
        weightType: "lbs"
    };
    const secondaryBench = {
        type: "Bench Press",
        weightType: "lbs"
    };
    const primaryDead = {
        type: "Deadlift",
        weightType: "lbs"
    };
    const secondaryDead = {
        type: "Deadlift",
        weightType: "lbs",
    };
    const primarySquat = {
        type: "Squat",
        weightType: "lbs",
    };
    const secondarySquat = {
        type: "Squat",
        weightType: "lbs",
    };
    const latWork = {
        type: "Lat Work",
        weightType: "lbs",
    };
    const abs = {
        type: "Abs",
        weightType: "Crunches",
    };

    if (difference % 8 === 0) {
        workout = [[primarySquat, userData.squatTM], [secondaryDead, userData.deadTM], [abs, userData.absTM]];
    } else if (difference % 6 === 0) {
        workout = [[primaryBench, userData.benchTM], [secondaryBench, userData.benchTM], [latWork, userData.latTM]];
    } else if (difference % 4 === 0) {
        workout = [[primaryDead, userData.deadTM], [secondarySquat, userData.squatTM], [abs, userData.absTM]];
    } else if (difference % 2 === 0) {
        workout = [[primaryBench, userData.benchTM], [secondaryBench, userData.benchTM], [latWork, userData.latTM]];
    }
    
    return workout;
}
setInterval(getWorkout, 86400000);

function getDateDifference(userData) {
    let today = updateTime();
    let difference = Math.ceil((Math.abs(today - userData.createdAt)) / (1000 * 60 * 60 * 24 * 10000)); 
    return difference;
}
setInterval(getWorkout, 86400000);

function updateWorkout(userData) {
    const difference = getDateDifference(userData);
    const week = Math.floor(difference / 7);
    const cycle = Math.floor(difference / 3);
    let primaryPer = [.65, .75, .85];
    let primaryRep = [5, 5, 5];
    let secondaryPer = .3;
    if (week % 3 === 0) {
        primaryPer = [.65, .75, .85];
        primaryRep = [5, 5, 5];
    } else if (week % 3 === 1) {
        primaryPer = [.7, .8, .9];
        primaryRep = [3, 3, 3];
    } else {
        primaryPer = [.75, .85, .95];
        primaryRep = [5, 3, 1];
    }

    if (cycle % 3 === 0) {
        secondaryPer = .3
    } else if (cycle % 3 === 1) {
        secondaryPer = .45
    } else {
        secondaryPer = .6
    }
    
    return [primaryPer, primaryRep, secondaryPer];
}
setInterval(getWorkout, 86400000);

function init(userData, currentUser) {
    if (!userData) {
        const data = {
            benchTM: 60,
            squatTM: 60,
            deadTM: 60,
            latTM: 60,
            absTM: 0,
            createdAt: new Date()
        };
        db.collection('users').doc(currentUser.uid).set(data);
    }
}
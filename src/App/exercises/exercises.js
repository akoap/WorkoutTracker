import React from 'react';
import './exercises.css';
import { useAuth } from './../../contexts/AuthContext';
import { useDB } from './../../contexts/DBContext';
import { db } from './../../firebase';
import { Redirect } from 'react-router-dom';

export default function Exercises() {
    const { currentUser } = useAuth();
    const { userData } = useDB();
    if (!userData) {
        const data = {
            benchTM: 60,
            squatTM: 60,
            deadTM: 60,
            latTM: 60,
            cycle: 0,
            week: 0,
            primaryBench: {
                type: "Bench Press",
                weight: [30, 40, 50],
                weightType: "lbs",
                sets: 3,
                reps: [5, 5, 5]
            },
            secondaryBench: {
                type: "Bench Press",
                weight: 20,
                weightType: "lbs",
                sets: 5,
                reps: 10
            },
            primaryDead: {
                type: "Deadlift",
                weight: [20, 30, 40],
                weightType: "lbs",
                sets: 3,
                reps: [5, 5, 5]
            },
            secondaryDead: {
                type: "Deadlift",
                weight: 20,
                weightType: "lbs",
                sets: 5,
                reps: 10
            },
            primarySquat: {
                type: "Squat",
                weight: [20, 30, 40],
                weightType: "lbs",
                sets: 3,
                reps: [5, 5, 5]
            },
            secondarySquat: {
                type: "Squat",
                weight: 20,
                weightType: "lbs",
                sets: 5,
                reps: 10
            },
            latWork: {
                type: "Lat Work",
                weight: 20,
                weightType: "lbs",
                sets: 5,
                reps: 10
            },
            abs: {
                type: "Abs",
                weight: "Crunches",
                weightType: "",
                sets: 5,
                reps: 10
            },
            createdAt: new Date()
        };
        db.collection('users').doc(currentUser.uid).set(data);
    }
    updatePrimaryWorkout(userData, currentUser);
    let workout = getWorkout(userData, currentUser);

    if (currentUser) {
        if (workout) {
            return (
                <>
                    <div className="Box">
                        <h3>{getHeader(updateTime())}</h3>
                    </div>
                    <div className="Box">
                        <h3>{workout[0].type}: </h3>
                        <br />
                        <p>{workout[0].sets} x {workout[0].reps} with {workout[0].weight[0]}, {workout[0].weight[1]}, {workout[0].weight[2]} {workout[0].weightType}</p>
                    </div>
                    <div className="Box">
                        <h3>{workout[1].type}: </h3>
                        <br />
                        <p>{workout[1].sets} x {workout[1].reps} with {workout[1].weight} {workout[1].weightType}</p>
                    </div>
                    <div className="Box">
                        <h3>{workout[2].type}: </h3>
                        <br />
                        <p>{workout[2].sets} x {workout[2].reps} with {workout[2].weight} {workout[2].weightType}</p>
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
    } else {
        return (
            <>
                <Redirect to="/login" />
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

function getWorkout(userData, currentUser) {
    let workout;
    let difference = getDateDifference(userData);

    if (difference % 8 === 0) {
        workout = [userData.primarySquat, userData.secondaryDead, userData.abs];
    } else if (difference % 6 === 0) {
        workout = [userData.primaryBench, userData.secondaryBench, userData.latWork];
    } else if (difference % 4 === 0) {
        workout = [userData.primaryDead, userData.secondarySquat, userData.abs];
    } else if (difference % 2 === 0) {
        workout = [userData.primaryBench, userData.secondaryBench, userData.latWork];
        db.collection('users').doc(currentUser.uid).update({
            week: userData.week
        });
        if (userData.week % 3 === 0) {
            db.collection('users').doc(currentUser.uid).update({
                cycle: userData.cycle
            });
        }
        console.log('h')
    }
    
    return workout;
}
setInterval(getWorkout, 86400000);

function getDateDifference(userData) {
    let today = updateTime();
    let difference = Math.ceil((Math.abs(today - userData.createdAt + (8 * 864000000000))) / (1000 * 60 * 60 * 24 * 10000)); 
    return difference;
}
setInterval(getWorkout, 86400000);

function updatePrimaryWorkout(userData, currentUser) {
    let weightP = [1, 1, 1];
    let weightS = 1;
    let repNum = userData.primaryBench.reps;
    if (userData.week % 3 === 0) {
        weightP = [.65, .75, .85];
        repNum = [5, 5, 5];
    } else if (userData.week % 3 === 1) {
        weightP = [.7, .8, .9];
        repNum = [3, 3, 3];
    } else if (userData.week % 3 === 2) {
        weightP = [.75, .85, .95];
        repNum = [5, 3, 1];
    }

    if (userData.cycle % 3 === 0) {
        weightS = .3;
        db.collection('users').doc(currentUser.uid).update({
            benchTM: userData.benchTM,
            squatTM: userData.squatTM,
            deadTM: userData.deadTM
        });
    } else if (userData.cycle % 3 === 1) {
        weightS = .45;
        db.collection('users').doc(currentUser.uid).update({
            benchTM: userData.benchTM,
            squatTM: userData.squatTM,
            deadTM: userData.deadTM
        });
    } else if (userData.cycle % 3 === 2) {
        weightS = .6;
        db.collection('users').doc(currentUser.uid).update({
            benchTM: userData.benchTM,
            squatTM: userData.squatTM,
            deadTM: userData.deadTM
        });
    }
    db.collection('users').doc(currentUser.uid).update({
        primaryBench: {
            type: "Bench Press",
            weight: [userData.benchTM * weightP[0], userData.benchTM * weightP[1], userData.benchTM * weightP[2]],
            weightType: "lbs",
            sets: 3,
            reps: repNum
        },
        secondaryBench: {
            type: "Bench Press",
            weight: userData.benchTM * weightS,
            weightType: "lbs",
            sets: 5,
            reps: 10
        },
        primaryDead: {
            type: "Deadlift",
            weight: [userData.deadTM * weightP[0], userData.deadTM * weightP[1], userData.deadTM * weightP[2]],
            weightType: "lbs",
            sets: 3,
            reps: repNum            
        },
        secondaryDead: {
            type: "Deadlift",
            weight: userData.deadTM * weightS,
            weightType: "lbs",
            sets: 5,
            reps: 10
        },
        primarySquat: {
            type: "Squat",
            weight: [userData.squatTM * weightP[0], userData.squatTM * weightP[1], userData.squatTM * weightP[2]],
            weightType: "lbs",
            sets: 3,
            reps: repNum
        },
        secondarySquat: {
            type: "Squat",
            weight: userData.squatTM * weightS,
            weightType: "lbs",
            sets: 5,
            reps: 10
        },
        latWork: {
            type: "Lat Work",
            weight: userData.latTM * weightS,
            weightType: "lbs",
            sets: 5,
            reps: 10
        },
    });
}
setInterval(getWorkout, 86400000);
import React from 'react';
import './exercises.css';
import { useDB } from './../../contexts/DBContext';

export default function Exercises() {
    let today = updateTime();
    const { userData } = useDB();
    let workout = getWorkout(userData);

    if (workout) {
        return (
            <>
                <div className="Box">
                    <h3>{getHeader(today)}</h3>
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

    if (difference % 8 === 0) {
        workout = [userData.primarySquat, userData.secondaryDead, userData.abs];
    } else if (difference % 6 === 0) {
        workout = [userData.primaryBench, userData.secondaryBench, userData.latWork];
    } else if (difference % 4 === 0) {
        workout = [userData.primaryDead, userData.secondarySquat, userData.abs];
    } else if (difference % 2 === 0) {
        workout = [userData.primaryBench, userData.secondaryBench, userData.latWork];
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
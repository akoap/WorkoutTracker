import React from 'react';
import './exercises.css';

export default function Exercises() {
    const today = new Date();
    let day = today.getDay() + 1;
    const date = today.getDate();
    const month = today.getMonth() + 1;
    let workouts;

    const primaryBench = {
        type: "Bench Press",
        weight: [20, 30, 40],
        weightType: "lbs",
        sets: 3,
        reps: 5
    }

    const secondaryBench = {
        type: "Bench Press",
        weight: 20,
        weightType: "lbs",
        sets: 5,
        reps: 10
    }

    const primaryDead = {
        type: "Deadlift",
        weight: [20, 30, 40],
        weightType: "lbs",
        sets: 3,
        reps: 5
    }

    const secondaryDead = {
        type: "Deadlift",
        weight: 20,
        weightType: "lbs",
        sets: 5,
        reps: 10
    }

    const primarySquat = {
        type: "Squat",
        weight: [20, 30, 40],
        weightType: "lbs",
        sets: 3,
        reps: 5
    }

    const secondarySquat = {
        type: "Squat",
        weight: 20,
        weightType: "lbs",
        sets: 5,
        reps: 10
    }

    const latWork = {
        type: "Lat Work",
        weight: 20,
        weightType: "lbs",
        sets: 5,
        reps: 10
    }

    const abs = {
        type: "Abs",
        weight: "Crunches",
        weightType: "",
        sets: 5,
        reps: 10
    }


    switch (day) {
        case 0:
            day = 'Sunday';
            workouts = [primaryBench, secondaryBench, latWork]
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            workouts = [primaryDead, secondarySquat, abs]
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            workouts = [primaryBench, secondaryBench, latWork]
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            workouts = [primarySquat, secondaryDead, abs]
            break;
        default:
            break;
    }

    return (
        <>
            <div className="Box">
                <p>Workout for {day}, {month}/{date}</p>
            </div>
            <div className="Box">
                <p>{workouts[0].type}</p>
                <p>|</p>
                <p>{workouts[0].sets} * {workouts[0].reps}</p>
                <p>|</p>
                <p>{workouts[0].weight[0]}, {workouts[0].weight[1]}, {workouts[0].weight[2]} {workouts[0].weightType}</p>
            </div>
            <div className="Box">
                <p>{workouts[1].type}</p>
                <p>|</p>
                <p>{workouts[1].sets} * {workouts[1].reps}</p>
                <p>|</p>
                <p>{workouts[1].weight} {workouts[1].weightType}</p>
            </div>
            <div className="Box">
                <p>{workouts[2].type}</p>
                <p>|</p>
                <p>{workouts[2].sets} * {workouts[2].reps}</p>
                <p>|</p>
                <p>{workouts[2].weight} {workouts[2].weightType}</p>
            </div>
        </>
    );

}
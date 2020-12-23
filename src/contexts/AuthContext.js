import React, { useContext, useState, useEffect } from 'react';
import { auth } from './../firebase';
import { db } from './../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        const sign = auth.createUserWithEmailAndPassword(email, password);
        const userData = {
            primaryBench: {
                type: "Bench Press",
                weight: [20, 30, 40],
                weightType: "lbs",
                sets: 3,
                reps: 5
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
                reps: 5
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
                reps: 5
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
        }
        db.collection('users').doc(currentUser.email).set(userData);
        return sign;
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function signout() {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe
    }, []);

    const value = {
        currentUser,
        login,
        signup,
        signout
    }


    return (
        <AuthContext.Provider value={ value }>
            {!loading && children}
        </AuthContext.Provider>
    );
}

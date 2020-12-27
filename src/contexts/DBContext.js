import React, { useContext, useState, useEffect } from 'react';
import { db } from './../firebase';
import { useAuth } from './AuthContext';

const DBContext = React.createContext();

export function useDB() {
    return useContext(DBContext);
}

export function DBProvider({ children }) {
    const { currentUser } = useAuth();
    const [userData, setUserData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = db.collection('users').doc(currentUser.uid).onSnapshot(doc => {
            setUserData(doc.data());
            setLoading(false);
        });
        return () => unsubscribe();
        // eslint-disable-next-line
    }, []);
    
    const value = {
        userData
    };

    return (
        <DBContext.Provider value = { value }>
            {!loading && children}
        </DBContext.Provider>
    );
}
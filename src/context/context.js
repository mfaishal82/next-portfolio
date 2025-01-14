"use client"
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [section, setSection] = useState('bio');
    // const [test, setTest] = useState('test');

    const value = {
        section,
        setSection,
        // test,
        // setTest
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
"use client"
import projects from '@/project';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [section, setSection] = useState('bio');
    const [id, setId] = useState(0);
    const listProjects = projects;
    // const [test, setTest] = useState('test');

    // console.log(listProjects)

    const value = {
        section,
        setSection,
        listProjects,
        id, setId
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
"use client"
import projects from '@/project';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [section, setSection] = useState('bio');
    const [id, setId] = useState();
    const [ openMenu, setOpenMenu ] = useState(false);
    const listProjects = projects;
    // const [test, setTest] = useState('test');

    // console.log(listProjects)

    const value = {
        section,
        setSection,
        listProjects,
        id, setId,
        openMenu, setOpenMenu
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
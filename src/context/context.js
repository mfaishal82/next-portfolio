"use client"
import projects from '@/project';
import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [section, setSection] = useState('bio');
    const [id, setId] = useState();
    const [ openMenu, setOpenMenu ] = useState(false);
    const [projectActive, setProjectActive] = useState('');
    
    const listProjects = projects;
    

    const value = {
        section,
        setSection,
        listProjects,
        id, setId,
        openMenu, setOpenMenu,
        projectActive, setProjectActive
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
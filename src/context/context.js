"use client"
import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [section, setSection] = useState('bio');
    const [id, setId] = useState();
    const [ openMenu, setOpenMenu ] = useState(false);
    const [projectActive, setProjectActive] = useState('');
    const [listProjects, setListProjects] = useState([]);
    
    useEffect(() => {
        const fetchProjects = async () => {
            const res = await fetch("/api/list-projects");
            const data = await res.json();
            setListProjects(data.default);
        };
        fetchProjects();
    }, []);

    const value = {
        section,
        setSection,
        listProjects,
        id, setId,
        openMenu, setOpenMenu,
        projectActive, setProjectActive
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
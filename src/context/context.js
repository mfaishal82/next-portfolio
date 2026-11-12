"use client"
import { createContext, useContext, useEffect, useState } from 'react';
import { fallbackProfile } from '@/services/portfolioService';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [section, setSection] = useState('bio');
    const [id, setId] = useState();
    const [openMenu, setOpenMenu] = useState(false);
    const [projectActive, setProjectActive] = useState('');
    const [listProjects, setListProjects] = useState([]);
    const [profile, setProfile] = useState(fallbackProfile);
    const [experiences, setExperiences] = useState([]);
    const [education, setEducation] = useState([]);
    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const res = await fetch("/api/portfolio");
                if (res.ok) {
                    const data = await res.json();
                    if (data.projects && data.projects.length > 0) {
                        setListProjects(data.projects);
                    }
                    if (data.profile) setProfile(data.profile);
                    if (data.experiences) setExperiences(data.experiences);
                    if (data.educations) setEducation(data.educations);
                    if (data.certificates) setCertificates(data.certificates);
                } else {
                    // Fallback to /api/list-projects
                    const resProj = await fetch("/api/list-projects");
                    const dataProj = await resProj.json();
                    setListProjects(dataProj.default || dataProj.projects || []);
                }
            } catch (err) {
                console.warn("Portfolio context fetch error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchAllData();
    }, []);

    const value = {
        section,
        setSection,
        listProjects,
        setListProjects,
        profile,
        setProfile,
        experiences,
        setExperiences,
        education,
        setEducation,
        certificates,
        setCertificates,
        loading,
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

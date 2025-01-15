"use client";
import { useAppContext } from '@/context/context';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProjectDetail() {
  const params = useParams();
  const id = Number(params.id);
  const { listProjects } = useAppContext();
  const [project, setProject] = useState({});

  // console.log(Number(id));
  // console.log(listProjects);


  useEffect(() => {
    const project = listProjects.find((project) => project.id === id);
    setProject(project);
  }, [id, listProjects]);

  // console.log(project);

  return (
    <div>
      <h1>Project Detail for ID: {id}</h1>
      Under Maintenance
      {/* {project.id}
      {project.title}
      {project.description} */}
    </div>
  );
}
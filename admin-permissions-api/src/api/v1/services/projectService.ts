import { Project } from "../models/interfaces";
<<<<<<< HEAD

=======
 
>>>>>>> 594965a (final commit)
let projects: Project[] = [
    {
        id: 1,
        name: "Website Redesign",
        status: "active",
        createdAt: "2025-01-10T10:00:00.000Z",
    },
    {
        id: 2,
        name: "Mobile App v2",
        status: "planning",
        createdAt: "2025-01-08T10:00:00.000Z",
    },
    {
        id: 3,
        name: "API Migration",
        status: "active",
        createdAt: "2025-01-05T10:00:00.000Z",
    },
    {
        id: 4,
        name: "Security Audit",
        status: "completed",
        createdAt: "2025-01-03T10:00:00.000Z",
    },
];
<<<<<<< HEAD

export const getAllProjects = (): Project[] => {
    return projects;
};

export const getProjectById = (id: number): Project | undefined => {
    return projects.find((project) => project.id === id);
};

=======
 
export const getAllProjects = (): Project[] => {
    return projects;
};
 
export const getProjectById = (id: number): Project | undefined => {
    return projects.find((project) => project.id === id);
};
 
>>>>>>> 594965a (final commit)
export const createProject = (name: string, status: string): Project => {
    const newProject: Project = {
        id: projects.length + 1,
        name,
        status,
        createdAt: new Date().toISOString(),
    };
    projects.push(newProject);
    return newProject;
};
<<<<<<< HEAD

=======
 
>>>>>>> 594965a (final commit)
export const updateProject = (
    id: number,
    data: Partial<Pick<Project, "name" | "status">>
): Project | undefined => {
    const index = projects.findIndex((project) => project.id === id);
    if (index === -1) return undefined;
<<<<<<< HEAD

    projects[index] = { ...projects[index], ...data };
    return projects[index];
};

export const deleteProject = (id: number): boolean => {
    const index = projects.findIndex((project) => project.id === id);
    if (index === -1) return false;

    projects.splice(index, 1);
    return true;
};

=======
 
    projects[index] = { ...projects[index], ...data };
    return projects[index];
};
 
export const deleteProject = (id: number): boolean => {
    const index = projects.findIndex((project) => project.id === id);
    if (index === -1) return false;
 
    projects.splice(index, 1);
    return true;
};
 
>>>>>>> 594965a (final commit)

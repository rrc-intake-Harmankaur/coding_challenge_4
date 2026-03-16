import { Request, Response, NextFunction } from "express";
import * as projectService from "../services/projectService";
import { HTTP_STATUS } from "../../../constants/httpConstants";
 
export const getAllProjects = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    try {
        const projects = projectService.getAllProjects();
        res.status(HTTP_STATUS.OK).json({
            message: "Projects retrieved",
            count: projects.length,
            data: projects,
        });
    } catch (error: unknown) {
        next(error);
    }
};
 
export const getProjectById = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    try {
        const id = parseInt(req.params.id);
        const project = projectService.getProjectById(id);
 
        if (!project) {
            res.status(HTTP_STATUS.NOT_FOUND).json({
                message: "Project not found",
            });
            return;
        }
 
        res.status(HTTP_STATUS.OK).json({
            message: "Project retrieved",
            data: project,
        });
    } catch (error: unknown) {
        next(error);
    }
};
 
export const createProject = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    try {
        const { name, status } = req.body;
 
        if (!name) {
            res.status(HTTP_STATUS.BAD_REQUEST).json({
                message: "Project name is required",
            });
            return;
        }
 
        const newProject = projectService.createProject(
            name,
            status || "planning"
        );
 
        res.status(HTTP_STATUS.CREATED).json({
            message: "Project created",
            data: newProject,
        });
    } catch (error: unknown) {
        next(error);
    }
};
 
export const updateProject = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    try {
        const id = parseInt(req.params.id);
        const { name, status } = req.body;
 
        const updatedProject = projectService.updateProject(id, {
            name,
            status,
        });
 
        if (!updatedProject) {
            res.status(HTTP_STATUS.NOT_FOUND).json({
                message: "Project not found",
            });
            return;
        }
 
        res.status(HTTP_STATUS.OK).json({
            message: "Project updated",
            data: updatedProject,
        });
    } catch (error: unknown) {
        next(error);
    }
};
 
export const deleteProject = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    try {
        const id = parseInt(req.params.id);
        const deleted = projectService.deleteProject(id);
 
        if (!deleted) {
            res.status(HTTP_STATUS.NOT_FOUND).json({
                message: "Project not found",
            });
            return;
        }
 
        res.status(HTTP_STATUS.OK).json({
            message: "Project deleted",
        });
    } catch (error: unknown) {
        next(error);
    }
};
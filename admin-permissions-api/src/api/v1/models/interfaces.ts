/**
 * Represents a project in the system
 */
export interface Project {
    id: number;
    name: string;
    status: string;
    createdAt: string;
}

/**
 * Authorization options for role-based access control
 */
export interface AuthorizationOptions {
    hasRole: Array<"admin" | "lead" | "developer">;
    allowSameUser?: boolean;
}
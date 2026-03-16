import express, { Express, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import healthRoutes from "./api/v1/routes/healthRoutes";
import projectRoutes from "./api/v1/routes/projectRoutes";
import adminRoutes from "./api/v1/routes/adminRoutes";
import { AppError } from "./api/v1/errors/errors";
import { HTTP_STATUS } from "./constants/httpConstants";
 
const app: Express = express();
 
app.use(morgan("dev"));
app.use(express.json());
 
app.use("/api/v1", healthRoutes);
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/admin", adminRoutes);
 
// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            success: false,
            error: {
                message: err.message,
                code: err.code,
            },
            timestamp: new Date().toISOString(),
        });
    } else {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: {
                message: "An unexpected error occurred",
                code: "UNKNOWN_ERROR",
            },
            timestamp: new Date().toISOString(),
        });
    }
});
 
export default app;

import { Application, json, Request, Response, NextFunction } from "express";
import helmet from "helmet";
import { routes } from "./routes";

export const registerMiddlewares = (app: Application) => {
    app.use(helmet());
    app.use(json());
    
    for (let route of routes) {
        app.use(route.path, route.handler)
    }

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.statusCode || 500).json(
            { error: err.toString() }
        );
    });
}
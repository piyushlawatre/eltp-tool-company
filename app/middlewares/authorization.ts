import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

export const Authorization = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Auth-header');
    if (!token) return res.status(401).send("Access Denied");
    try {
        const verified = jwt.verify(token, process.env.SECRET_TOKEN as string);
        next();
    } catch (e) {
        res.status(400).send("Invalid Token");
    }
}
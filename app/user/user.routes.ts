import e, { NextFunction, Request, Response, Router } from "express";
import { ResponseHandler } from "../utility/response-handler";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import UserService from "./user.service";
import { IUser, ICredential } from "./user.types";
import { CreateValidator, UpdateValidator, LoginValidation } from "./user.validation";

const router = Router()

/* ------------------------------ CREATE USER ------------------------------ */
// http://localhost:4000/user

router.post("/", CreateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.body as IUser;
            const result = await UserService.createUser(user);
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    });

/* --------------------------- UPDATE USER BY ID --------------------------- */
// http://localhost:4000/user/update

router.put("/update", UpdateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userBody = req.body as IUser;
            const result = await UserService.updateUser(userBody);
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    });

/* ------------------------------ LOGIN USER ------------------------------ */
// http://localhost:4000/user/login

router.post("/login", LoginValidation,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const credential = req.body as ICredential;
            const userDetail = await UserService.login(credential);
            if (userDetail != null) {
                const isValidPassword = await compare(credential.password, userDetail.password);
                if (isValidPassword) {
                    const token = jwt.sign({ _id: userDetail.id }, process.env.SECRET_TOKEN as string)
                    res.header('Auth-Token',token).send(`WELCOME ${userDetail.name} YOU ARE LOGGED IN`.toUpperCase()+'\n'+`Token: ${token}`);
                } else {
                    res.send(`PASSWORD INCORRECT! ${userDetail.name} PLEASE ENTER VALID PASSWORD`.toUpperCase())
                }
            } else {
                res.send(new ResponseHandler(userDetail, null));
            }
        } catch (e) {
            next(e);
        }
    });

export default router;
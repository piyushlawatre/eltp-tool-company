import { NextFunction, Request, Response, Router } from "express";
import { Authorization } from "../middlewares/authorization";
import { ResponseHandler } from "../utility/response-handler";
import RoleService from "./role.service";
import { IRole } from './role.types';
import { CreateValidator, DeleteValidatior, GetByNameValidator, UpdateValidator } from "./role.validation";

const router = Router();

/* ------------------------------- CREATE ROLE ------------------------------ */
// http://localhost:4000/role

router.post("/", Authorization, CreateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const role = req.body as IRole;
            const result = await RoleService.createRole(role);
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    });

/* ------------------------------ GET ALL ROLE ------------------------------ */
// http://localhost:4000/role

router.get("/", Authorization,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await RoleService.getRole();
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    });

/* ---------------------------- GET ROLE BY NAME ---------------------------- */
// http://localhost:4000/role/getbyname/issuer

router.get("/getbyname/:name", Authorization, GetByNameValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name } = req.params;
            const result = await RoleService.getRoleByName(name);
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    });

/* ------------------------------- UPDATE ROLE ------------------------------ */
// http://localhost:4000/role/update

router.put("/update", Authorization, UpdateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const role = req.body as IRole;
            const result = await RoleService.updateRole(role);
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    });

/* ------------------------------- DELETE ROLE ------------------------------ */
// http://localhost:4000/role/deletebyid?id=60ef0a44afce074d4c2e3f5e

router.delete("/:id", Authorization, DeleteValidatior,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.query.id;
            const result = await RoleService.deleteRole(id as string);
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    });

export default router;
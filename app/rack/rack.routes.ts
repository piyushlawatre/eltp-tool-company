import { NextFunction, Request, Response, Router } from "express";
import { Authorization } from "../middlewares/authorization";
import { ResponseHandler } from "../utility/response-handler";
import RefrenceService from "./rack.service";
import { IRack } from "./rack.types";
import { CreateValidator, DeleteValidatior, GetByNameValidator, UpdateValidator } from "./rack.validation";

const router = Router()

/* ------------------------------ CREATE RACK ------------------------------ */
// http://localhost:4000/rack

router.post("/", Authorization, CreateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const rack = req.body as IRack;
            const result = await RefrenceService.createRack(rack)
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    })

/* ----------------------------- READ ALL RACK ----------------------------- */
// http://localhost:4000/rack

router.get("/", Authorization,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await RefrenceService.getRack();
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

/* ---------------------------- READ RACK BY NAME ---------------------------- */
// http://localhost:4000/rack/getbyname/550172

router.get("/getbyname/:name", Authorization, GetByNameValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name } = req.params;
            const result = await RefrenceService.getRackByName(name);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

/* --------------------------- UPDATE RACK ------------------------------- */
// http://localhost:4000/rack/update

router.put("/update", Authorization, UpdateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const rack = req.body as IRack;
            const result = await RefrenceService.updateRack(rack);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    });

/* ------------------------------ DELETE RACK ------------------------------ */
// http://localhost:4000/rack/deletebyid?id=60ef1dfaeda43717c421087c

router.delete("/deletebyid", Authorization, DeleteValidatior,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const rackID = req.query.id;
            const result = await RefrenceService.deleteRack(rackID as string);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

export default router;
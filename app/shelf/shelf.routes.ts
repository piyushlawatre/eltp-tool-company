import { NextFunction, Request, Response, Router } from "express";
import { Authorization } from "../middlewares/authorization";
import { ResponseHandler } from "../utility/response-handler";
import ShelfService from "./shelf.service";
import { IShelf } from "./shelf.types";
import { CreateValidator, DeleteValidatior, GetByNameValidator, UpdateValidator } from "./shelf.validation";

const router = Router()

/* ------------------------------ CREATE SHELF ------------------------------ */
// http://localhost:4000/shelf

router.post("/", Authorization, CreateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const shelf = req.body as IShelf;
            const result = await ShelfService.createShelf(shelf)
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    })

/* ----------------------------- READ ALL SHELF ----------------------------- */
// http://localhost:4000/shelf

router.get("/", Authorization,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await ShelfService.getShelf();
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

/* ---------------------------- READ SHELF BY ID ---------------------------- */
// http://localhost:4000/shelf/getbyname/102135

router.get("/getbyname/:name", Authorization, GetByNameValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name } = req.params;
            const result = await ShelfService.getShelfByName(name);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

/* --------------------------- UPDATE SHELF --------------------------- */
// http://localhost:4000/shelf/update

router.put("/update", Authorization, UpdateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const shelf = req.body as IShelf;
            const result = await ShelfService.updateShelf(shelf);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    });

/* ------------------------------ DELETE SHELF ------------------------------ */
// http://localhost:4000/shelf/deletebyid?id=60ef22c422701b48b40f9be9

router.delete("/deletebyid", Authorization, DeleteValidatior,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const shelfID = req.query.id;
            const result = await ShelfService.deleteShelf(shelfID as string);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

export default router;
import { NextFunction, Request, Response, Router } from "express";
import { Authorization } from "../middlewares/authorization";
import { ResponseHandler } from "../utility/response-handler";
import ManufacturerService from "./manufacturer.service";
import { IManufacturer } from "./manufacturer.types";
import { CreateValidator, DeleteValidatior, GetByNameValidator, UpdateValidator } from "./manufacturer.validation";

const router = Router()

/* ------------------------------ CREATE MANUFACTURER ------------------------------ */
// http://localhost:4000/manufacturer

router.post("/", Authorization, CreateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const manufacturer = req.body as IManufacturer;
            const result = await ManufacturerService.createManufacturer(manufacturer)
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    })

/* ----------------------------- READ ALL MANUFACTURER ----------------------------- */
// http://localhost:4000/manufacturer

router.get("/", Authorization,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await ManufacturerService.getManufacturer();
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

/* ---------------------------- READ MANUFACTURER BY NAME -------------------------- */
// http://localhost:4000/manufacturer/getbyname/Microsoft

router.get("/getbyname/:name", Authorization, GetByNameValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name } = req.params;
            const result = await ManufacturerService.getManufacturerByName(name);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

/* --------------------------- UPDATE MANUFACTURER --------------------------------- */
// http://localhost:4000/manufacturer/update

router.put("/update", Authorization, UpdateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const manufacturer = req.body as IManufacturer;
            const result = await ManufacturerService.updateManufacturer(manufacturer);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    });

/* ------------------------------ DELETE MANUFACTURER ------------------------------ */
// http://localhost:4000/manufacturer/deletebyid?id=60ef26c930a15f497cf86f4a

router.delete("/deletebyid", Authorization, DeleteValidatior,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const manufacturerID = req.query.id;
            const result = await ManufacturerService.deleteManufacturer(manufacturerID as string);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

export default router;
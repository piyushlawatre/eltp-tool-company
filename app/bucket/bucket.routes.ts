import { NextFunction, Request, Response, Router } from "express";
import { IBucket } from "./bucket.types";
import BucketService from "./bucket.service";
import { ResponseHandler } from "../utility/response-handler";
import { CreateValidator, DeleteValidatior, GetByNameValidator, UpdateValidator } from "./bucket.validation";
import { Authorization } from "../middlewares/authorization";

const router = Router()

/* ------------------------------ CREATE BUCKET ------------------------------ */
// http://localhost:4000/bucket

router.post("/", Authorization, CreateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const bucket = req.body as IBucket;
            const result = await BucketService.createBucket(bucket)
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    })
/* ----------------------------- READ ALL BUCKET ----------------------------- */
// http://localhost:4000/bucket

router.get("/", Authorization,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await BucketService.getBucket();
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

/* ---------------------------- READ BUCKET BY NAME -------------------------- */
// http://localhost:4000/bucket/getbyname/186651

router.get("/getbyname/:name", Authorization, GetByNameValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name } = req.params;
            const result = await BucketService.getBucketByName(name);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

/* --------------------------- UPDATE BUCKET ------------------------------ */
// http://localhost:4000/bucket/update

router.put("/update", Authorization, UpdateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const bucket = req.body as IBucket;
            const result = await BucketService.updateBucket(bucket);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    });

/* ------------------------------ DELETE BUCKET ------------------------------ */
// http://localhost:4000/bucket/deletebyid?id=60ef1fbeb3dcf6108076bd9a

router.delete("/deletebyid", Authorization, DeleteValidatior,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const bucketID = req.query.id;
            const result = await BucketService.deleteBucket(bucketID as string);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

export default router;
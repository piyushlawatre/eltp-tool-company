import { Router, Request, Response, NextFunction } from "express";
import { Authorization } from "../middlewares/authorization";
import { ResponseHandler } from "../utility/response-handler";
import bookingService from "./booking.service";
import { IBooking } from "./booking.types";
import { CreateValidator, GetByUserIDValidator, MarkAsUpdateValidator } from "./booking.validation";

const router = Router();

/* ----------------------------- CREATE BOOKING ----------------------------- */
// http://localhost:4000/booking

router.post("/", Authorization, CreateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const booking = req.body as IBooking;
            const result = await bookingService.createBooking(booking);
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    });

/* ---------------------------- GET ALL BOOKING ---------------------------- */
// http://localhost:4000/booking

router.get("/", Authorization,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await bookingService.getAllBooking();
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    });

/* -------------------------- GET BOOKING BY USERID ------------------------- */
// http://localhost:4000/booking/60f049519491744af87bb08e

router.get("/:id", Authorization, GetByUserIDValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const result = await bookingService.getByUserId(id);
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    });

/* ---------------------------- MARKED AS ISSUED ---------------------------- */
// http://localhost:4000/booking/mark-as-issued/60f049519491744af87bb08e

router.put("/mark-as-issued/:id", Authorization, MarkAsUpdateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const result = await bookingService.markAsIssued(id);
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    });

export default router;
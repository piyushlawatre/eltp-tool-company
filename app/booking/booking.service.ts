import bookingRepo from "./booking.repo";
import { IBooking } from "./booking.types";

const createBooking = (booking: IBooking) => bookingRepo.createBooking(booking);

const markAsIssued = (id: string) => bookingRepo.markAsIssued(id);

const getAllBooking = () => bookingRepo.getAllBooking();

const getByUserId = (userId: string) => bookingRepo.getByUserId(userId);

export default {
    createBooking,
    getAllBooking,
    markAsIssued,
    getByUserId
}
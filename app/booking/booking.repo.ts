import { BookingModel } from "./booking.schema";
import { IBooking } from "./booking.types";

const createBooking = (booking: IBooking) => BookingModel.create(booking);

const getAllBooking = () => BookingModel.find();

const getByUserId = (userId: string) => BookingModel.find({ booked_by: userId });

const markAsIssued = (id: string) => BookingModel.findByIdAndUpdate(id, { $set: { is_issued: true } });

export default {
    createBooking,
    getAllBooking,
    markAsIssued,
    getByUserId
}
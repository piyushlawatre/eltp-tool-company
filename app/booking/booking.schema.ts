import { Schema, model, Document, Types } from "mongoose"
import { IBookingItems, IBooking } from './booking.types';

const bookingItemSchema = new Schema({
    tool: { type: Types.ObjectId, required: true, ref: "Tool" },
    quantity: { type: Number, required: true }
});

const bookingSchema = new Schema({
    booked_by: { type: Types.ObjectId, required: true, ref: "User" },
    booked_on: { type: Date, default: new Date(), required: false },
    is_issued: { type: Boolean, default: false, required: false },
    items: { type: [bookingItemSchema], required: true }
});

type BookingSchema = IBooking & Document;

export const BookingModel = model<BookingSchema>("booking", bookingSchema)
import { Types } from 'mongoose';

export interface IBookingItems {
    tool: string | Types.ObjectId;
    quantity: number;
}

export interface IBooking {
    _id?: Types.ObjectId | string;
    booked_by: Types.ObjectId | string;
    booked_on: Date | string;
    is_issued: Boolean;
    items: IBookingItems[];
}

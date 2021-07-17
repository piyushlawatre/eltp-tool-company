import { Types } from 'mongoose';

export interface IUser {
    _id?: any;
    name: string;
    role: string | Types.ObjectId;
    email: string;
    password: string;
    isDeleted: boolean
}

export interface ICredential {
    email: string;
    password: string
}

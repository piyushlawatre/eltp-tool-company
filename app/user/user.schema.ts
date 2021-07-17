import { Schema, model, Document, HookNextFunction } from "mongoose";
import { IUser } from "./user.types";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isDeleted: { type: Boolean, required: false, default: false }
})

type userDocument = IUser & Document;

/* ----------------------------- Mongoose Hooks ---------------------------- */
/* ---------------------------- Password Hashing ---------------------------- */
userSchema.pre('save', async function save(next: HookNextFunction) {
    const thisObj = this as userDocument;
    try {
        thisObj.password = await bcrypt.hash(thisObj.password, 10);
        return next()
    }
    catch (e) {
        return next(e)
    }
});
/* ----------------------------------- End ---------------------------------- */

export const UserModel = model<userDocument>("User", userSchema)
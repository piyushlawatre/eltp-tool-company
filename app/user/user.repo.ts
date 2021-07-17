import { IUser, ICredential } from "./user.types";
import { UserModel } from "./user.schema";

const createUser = (user: IUser) => UserModel.create(user);

const updateUser = (user: IUser) => UserModel.findByIdAndUpdate(user._id, user);

const login = (credential: ICredential) => UserModel.findOne({ email: credential.email });

export default {
    createUser,
    updateUser,
    login
}
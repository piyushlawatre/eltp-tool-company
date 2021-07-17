import UserRepo from "./user.repo";
import { IUser, ICredential } from "./user.types";

const createUser = (user: IUser) => UserRepo.createUser(user);

const updateUser = (user: IUser) => UserRepo.updateUser(user);

const login = (credential: ICredential) => UserRepo.login(credential);

export default {
    createUser,
    updateUser,
    login
}
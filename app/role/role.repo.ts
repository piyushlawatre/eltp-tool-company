import { RoleModel } from "./role.schema";
import { IRole } from './role.types';

const createRole = (role: IRole) => RoleModel.create(role);

const getRole = () => RoleModel.find();

const getRoleByName = (name: string) => RoleModel.findOne({ name: name });

const updateRole = (role: IRole) => RoleModel.updateOne({ _id: role._id }, { $set: role });

const deleteRole = (id: string) => RoleModel.findByIdAndUpdate(id, { $set: { isDeleted: true } });

export default {
    createRole,
    getRole,
    getRoleByName,
    updateRole,
    deleteRole
}
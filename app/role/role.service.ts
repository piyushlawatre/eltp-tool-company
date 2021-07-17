import RoleRepo from "./role.repo";
import { IRole } from './role.types';

const createRole = (role: IRole) => RoleRepo.createRole(role);

const getRole = () => RoleRepo.getRole();

const getRoleByName = (name: string) => RoleRepo.getRoleByName(name);

const updateRole = (role: IRole) => RoleRepo.updateRole(role);

const deleteRole = (id: string) => RoleRepo.deleteRole(id); 

export default {
    createRole,
    getRole,
    getRoleByName,
    updateRole,
    deleteRole
}
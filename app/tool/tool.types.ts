import { Types } from "mongoose";

export interface ITool {
    _id?: string | Types.ObjectId;
    name: string;
    toolImage:string;
    toolOwner: string;
    quantity:number;
    reOrderLevel:number;
    availableQuantity: number;
    operation: Types.ObjectId;
    bucket:Types.ObjectId;
    manufacturer: Types.ObjectId;
    rack: Types.ObjectId;
    shelf: Types.ObjectId;
    subToolType: Types.ObjectId;
    toolType: Types.ObjectId;
    isDeleted: boolean;
}

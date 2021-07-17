import { Router } from "express";
import BookingRouter from "../booking/booking.routes";
import BucketRouter from "../bucket/bucket.routes";
import ManufacturerRouter from "../manufacturer/manufacturer.routes";
import OperationRouter from "../operation/operation.routes";
import RackRouter from "../rack/rack.routes";
import RoleRouter from "../role/role.routes";
import ShelfRouter from "../shelf/shelf.routes";
import SubToolTypeRouter from "../subtooltype/subtooltype.routes";
import ToolRouter from "../tool/tool.routes";
import ToolTypeRouter from "../tooltype/tooltype.routes";
import UserRouter from "../user/user.routes";

interface IRoutes {
    path: string,
    handler: Router
}

export const routes: IRoutes[] = [
    {
        path: "/subtooltype",
        handler: SubToolTypeRouter
    }, {
        path: "/operation",
        handler: OperationRouter
    }, {
        path: "/manufacturer",
        handler: ManufacturerRouter
    }, {
        path: "/shelf",
        handler: ShelfRouter
    }, {
        path: "/bucket",
        handler: BucketRouter
    }, {
        path: "/rack",
        handler: RackRouter
    }, {
        path: "/tooltype",
        handler: ToolTypeRouter
    }, {
        path: "/tool",
        handler: ToolRouter
    }, {
        path: "/user",
        handler: UserRouter
    }, {
        path: "/role",
        handler: RoleRouter
    }, {
        path: "/booking",
        handler: BookingRouter
    }
]
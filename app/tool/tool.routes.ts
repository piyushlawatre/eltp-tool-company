import { NextFunction, Request, Response, Router } from "express";
import { Authorization } from "../middlewares/authorization";
import { ResponseHandler } from "../utility/response-handler";
import ToolService from "./tool.service";
import { ITool } from "./tool.types";
import { CreateValidator, DeleteValidatior, GetByNameValidator, UpdateValidator } from "./tool.validation";

const router = Router()

/* ------------------------------ CREATE TOOL ------------------------------ */
// http://localhost:4000/tool

router.post("/", Authorization, CreateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const toolBody = req.body as ITool;
            const result = await ToolService.createTool(toolBody)
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    })

/* ----------------------------- READ ALL TOOL ----------------------------- */
// http://localhost:4000/tool

router.get("/", Authorization,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await ToolService.getTool();
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

/* ---------------------------- READ TOOL BY ID ---------------------------- */
// http://localhost:4000/tool/readbyid?id=60e357626eb60f3ccc874df0

router.get("/:name", Authorization, GetByNameValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name } = req.params;
            const result = await ToolService.getToolByName(name);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

/* --------------------------- UPDATE TOOL BY ID --------------------------- */
// http://localhost:4000/tool/update

router.put("/update", Authorization, UpdateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const toolBody = req.body as ITool;
            const result = await ToolService.updateTool(toolBody);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    });

/* ------------------------------- DELETE TOOL ------------------------------ */
// http://localhost:4000/tool/deletebyid?id=60f0552312ba774178a492ab

router.delete("/deletebyid", Authorization, DeleteValidatior,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const toolId = req.query.id;
            const result = await ToolService.deleteTool(toolId as string);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

export default router;
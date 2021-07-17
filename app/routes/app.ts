import express from "express";
import { connectMongoDB } from "../dbconnection/mongo-connection";
import { registerMiddlewares } from "./register-middlewares";

export const startServer = async () => {
    try {
        const app = express();

        await connectMongoDB();

        registerMiddlewares(app);

        app.listen((process.env.PORT), () => {
            console.log();
            console.log(`--------------- SERVER STARTED AT PORT ${process.env.PORT} ---------------`);
        })
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

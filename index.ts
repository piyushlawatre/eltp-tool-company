import { config } from "dotenv";
config();

import { startServer } from "./app/routes/app";
startServer()
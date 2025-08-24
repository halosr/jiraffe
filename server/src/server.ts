import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

import AppDataSrc from "@/config/db.conf";
import appRouter from "@/routes/index";

dotenv.config();

(async () => {
    try {
        // connect to the database
        await AppDataSrc.initialize();

        // instantiate the express server
        const app: Application = express();
        const PORT = process.env.PORT || 3000;

        // use cors and json middlewares
        app.use(cors());
        app.use(express.json());

        //handle api routing
        app.use(appRouter);

        // start the server
        app.listen(PORT, () => {
            console.log("App Started on ", PORT);
        });
    } catch (error) {
        console.error("error", error);
    }
})();

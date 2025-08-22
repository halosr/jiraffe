import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

import testRouter from "@/routes/test";

dotenv.config();

(async () => {
    try {
        const app: Application = express();
        const PORT = process.env.PORT || 3000;

        app.use(cors());
        app.use(express.json());

        app.use(testRouter);

        app.listen(PORT, () => {
            console.log("App Started on ", PORT);
        });
    } catch (error) {
        console.log("error", error);
    }
})();

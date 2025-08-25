import "reflect-metadata";

import { DataSource } from "typeorm";

import { User } from "@/models/user";
import { Story } from "@/models/story";

const AppDataSrc = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: "postgres",
    password: "postgres",
    database: "jiraffe",
    synchronize: false,
    logging: true,
    entities: [User, Story],
});

export default AppDataSrc;

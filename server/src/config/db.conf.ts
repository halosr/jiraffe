import "reflect-metadata";

import { DataSource } from "typeorm";

import { User } from "@/models/user";
import { Story } from "@/models/story";
import { Room } from "@/models/room";

const AppDataSrc = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: "postgres",
    password: "postgres",
    database: "jiraffe",
    synchronize: false,
    logging: true,
    entities: [User, Story, Room],
});

export default AppDataSrc;

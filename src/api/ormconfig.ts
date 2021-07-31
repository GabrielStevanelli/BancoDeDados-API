import { ConnectionOptions } from "typeorm";
import {recados} from "./app/entities/recados"
require('dotenv').config();

const config: ConnectionOptions = {
    type:"postgres",
    host:process.env.DB_HOST,
    port:5432,
    username:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    entities:[recados],
    synchronize:true,
    migrationsRun:false,
    logging:false,
    migrations:[__dirname+"/migrations/*{.ts,.js}"],
    cli:{
        migrationsDir:"src/API/database/migrations"
    },
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false
      }
    }
}

export = config;
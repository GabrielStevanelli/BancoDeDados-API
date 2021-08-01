"use strict";
var recados_1 = require("./app/entities/recados");
require('dotenv').config();
var config = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [recados_1.recados],
    synchronize: true,
    migrationsRun: false,
    logging: false,
    migrations: [__dirname + "/migrations/*{.ts,.js}"],
    cli: {
        migrationsDir: "src/API/database/migrations"
    },
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    }
};
module.exports = config;
//# sourceMappingURL=ormconfig.js.map
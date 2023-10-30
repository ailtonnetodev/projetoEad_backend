import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'projectead2.0_development',
    username: 'pead',
    password: '812794',
    define: {
        underscored: true
    }
})
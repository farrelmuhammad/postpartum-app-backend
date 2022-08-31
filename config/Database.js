import {Sequelize} from "sequelize";

const db = new Sequelize('postpartum_db', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
});

export default db;
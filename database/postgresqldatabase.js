import { Sequelize } from "sequelize";


const database = "defaultdb";
const host = "db-postgresql-nyc1-80766-do-user-12956913-0.b.db.ondigitalocean.com";
const user = "doadmin";
const port = 25060;
const password = "AVNS_nNaWnulOfB81l0Iww9W";


const sequelize = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})

try {
    sequelize.authenticate().then(m => {
        console.log("Successfully connected to the database.");
    });

} catch (error) {
    console.error("Unable to connect to the database: ", error);
}

export default sequelize;
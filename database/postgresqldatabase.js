import { Sequelize } from "sequelize";


const database = "defaultdb";
const host = "db-xxxx-xxxx-xxxxx-do-user-xxxxxx-0.b.db.ondigitalocean.com";
const user = "doadmin";
const port = xxxx;
const password = "xxxxxx";


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

import { Sequelize } from "sequelize";


const database = "d3pn0btd9j6tvo";
const host = "ec2-52-205-61-230.compute-1.amazonaws.com";
const user = "rxmruityuoxbxi";
const port = 5432;
const password = "2e68c9c9e225a0b5e9946dc4c226b3d66ecd074c7822e56524999aa45acaafbf";


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
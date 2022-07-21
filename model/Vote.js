import { DataTypes } from "sequelize";
import sequelize from "../database/postgresqldatabase.js";

const Vote = sequelize.define("Sequelize", {
    userId: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    pollId: DataTypes.BIGINT,
    vote: DataTypes.SMALLINT
})

export default Vote;

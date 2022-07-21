import sequelize from "../database/postgresqldatabase.js";
import Vote from "../model/Vote.js";


export default {
    name: "ready",
    run: async (bot, client, guild) => {
        console.log("Synchronizing database...");
        await sequelize.sync();

        console.log("Logged in as " + bot.client.user.tag);
    },
};

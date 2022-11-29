import fs from "fs";
import { getFiles } from "../util/functions.js";

const slashCommands = (bot, reload) => {
    const { client } = bot;

    let slashcommands = getFiles("./slashcommands/", ".js");

    if (slashcommands.length === 0) console.log("No slash commands loaded");

    slashcommands.forEach((f) => {

        import(`../slashcommands/${f}`).then((SlashCommand) => {
            console.log(SlashCommand);

            client.slashcommands.set(SlashCommand.default.name, SlashCommand.default);
        });
    });
    console.log(`Loaded ${client.slashcommands.size} slash commands`);
};

export default slashCommands;

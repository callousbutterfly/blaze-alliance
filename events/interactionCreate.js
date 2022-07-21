import Discord from "discord.js";
import { applicationList } from "../util/applicationRetriever.js";
import { createErrorEmbed } from "../util/embedFactory.js";

export default {
    name: "interactionCreate",
    run: async function runAll(bot, interaction, message) {
        if (interaction.isAutocomplete()) {
            if (interaction.commandName === "nextpoll") {
                const focusedOption = interaction.options.getFocused();

                const choices = applicationList.map(t => t.teamName).slice(1, 26);

                const filtered = choices.filter((choice) =>
                    choice.startsWith(focusedOption)
                );

                await interaction.respond(
                    filtered.map((choice) => ({ name: choice, value: choice }))
                );
            }
        } else if (interaction.isCommand) {
            const { client } = bot;

            if (!interaction.isCommand()) return;
            if (!interaction.inGuild())
                return interaction.reply({
                    embeds: [
                        createErrorEmbed(
                            "Invalid Usage",
                            "This command can only be used in a server."
                        ),
                    ],
                });

            const slashcmd = client.slashcommands.get(interaction.commandName);

            if (!slashcmd) return interaction.reply("Invalid slash command");

            if (
                slashcmd.perm &&
                !interaction.member.permissions.has(slashcmd.perm)
            )
                return interaction.reply({
                    embeds: [
                        createErrorEmbed(
                            "Invalid Permissions",
                            "You must have valid permissions to use this command."
                        ),
                    ],
                });

            slashcmd.run(client, interaction);
        } else if (interaction.isSelectMenu()) {
            if (interaction.customId === "rps-select") {
            }
        }
    },
};

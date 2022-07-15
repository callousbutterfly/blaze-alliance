const Discord = require("discord.js");
const { createErrorEmbed } = require("../util/embedFactory");

module.exports = {
    name: "interactionCreate",
    run: async function runAll(bot, interaction, message) {
        if(interaction.isCommand){
            const {client} = bot
            
            if(!interaction.isCommand()) return
            if(!interaction.inGuild()) return interaction.reply({ embeds: [createErrorEmbed("Invalid Usage", "This command can only be used in a server.")] })
        
            const slashcmd = client.slashcommands.get(interaction.commandName)
        
            if(!slashcmd) return interaction.reply("Invalid slash command")
        
            if(slashcmd.perm && !interaction.member.permissions.has(slashcmd.perm))
                return interaction.reply({ embeds: [createErrorEmbed("Invalid Permissions", "You must have valid permissions to use this command.")] })
        
            slashcmd.run(client, interaction)
        }
        else if(interaction.isSelectMenu()){
            console.log("here1")
            if(interaction.customId === 'rps-select'){
                console.log("here2")
            }
        }
    }
}
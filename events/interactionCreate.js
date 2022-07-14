const Discord = require("discord.js");

module.exports = {
    name: "interactionCreate",
    run: async function runAll(bot, interaction, message) {
        if(interaction.isCommand){
            const {client} = bot

            if(message.channel.name === 'name-and-number'){
                if(message.content.includes('|')){
                    let target = message.author
                    const member = message.guild.members.cache.get(target.id)
                    const memUser = message.guild.members.cache.get(target)
                    const owner = message.guild.members.cache.find(member => member.id === message.guild.ownerId);
    
                    //let changed = message.guild.members.filter(mem=>{mem.displayName != mem.user.username})
    
                    if(member !== owner && !member.displayName.includes('|')){
                        member.setNickname(message.content)
                        interaction.send({content:"Successfully changed your nickname, welcome to the server!", emphemeral: true})
                    }
                    else if(member === owner){
                        message.reply({content: "You cannot change your user, you are the owner!", ephemeral: true})
                    }
                    else if(member.displayName.includes('|'))
                        message.reply({content: "Your nickname is already changed!", ephemeral: true})
                }
            }

            if(!interaction.isCommand()) return
            if(!interaction.inGuild()) return interaction.reply("This command can only be used in a server")
        
            const slashcmd = client.slashcommands.get(interaction.commandName)
        
            if(!slashcmd) return interaction.reply("Invalid slash command")
        
            if(slashcmd.perm && !interaction.member.permissions.has(slashcmd.perm))
                return interaction.reply("You don't have valid permissions")
        
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
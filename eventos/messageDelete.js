const Discord = require('discord.js')

module.exports = async (bot, message) => { //cuida do evento de mensagens enviadas em chat 

let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("Mensagem deletada!")
    .setDescription("O usuário <@"+message.author+"> deletou a mensagem "+message.content)  
  
bot.channels.cache.get("id_do_canal").send(embed)

}

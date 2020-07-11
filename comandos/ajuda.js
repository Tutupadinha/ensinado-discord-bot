const Discord = require("discord.js")
exports.run = async (bot, message, argumentos, arg_texto, chat) => {
  const ajuda = new Discord.MessageEmbed()
  
    .setColor("GREEN")
    .setTitle("Lista de comandos!")
    .setDescription(`t.ajuda - mostra este comando \nt.say - Me faça falar algo \nt.ban - bana um membro \nt.unban - desbane um membro \nt.listban - mostra a lista de banidos`)
    .setTimestamp()
    .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32}))   
  
  message.channel.send(ajuda)
}
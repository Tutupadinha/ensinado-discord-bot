const Discord = require('discord.js')//puxando o bagulho do discord

module.exports.run = async (bot, message, args) => {//exportando o comando como say
  if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("ALA ALEK TÁ TENTANDO FALAR OQUE MLK \nTU NUM TEM PERMISSÃO DE GERENCIAR MENSAGENS!");
  const falar = args.join(" ") //pegando tudo que a pessoa falar depois de digitar o comando
    message.delete()// deleta a mensagem
    message.channel.send(falar) //escrevendo oque a pessoa falou
}
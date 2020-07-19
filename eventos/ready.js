module.exports = async (bot) => { //faz algo qdo o bot liga
  console.log('!!! estou pronto para ser usado !!!\n  To de olho em '+bot.channels.cache.size+' canais (chats + calss)');
  
  const atividades = [
     ["MSG1", "LISTENING"],
     ["MSG2", "PLAYING"],
     ["MSG3", "WATCHING"],
     ["MSG4", "WATCHING"]
    ];
  setInterval(async () => { // controlar o intervalo
    let i = Math.floor(Math.random() * atividades.length + 1) - 1
      await bot.user.setActivity(atividades[i][0], { type: atividades [i][1] });
  }, 10000); // intervalo

}

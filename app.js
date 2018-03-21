const Discord = require('discord.js');
const client = new Discord.Client();

// On déclare le préfixe
var prefix = '?';

client.on("message", message => {

  // Le robot lui répondra pong si il envoie "ping"
  if (message.content === "ping"){
    // le robot répond "Pong !"
    message.channel.send("Pong !");
  };
  // Le robot lui répondra ceci si un utilisateur fait "?help"
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("Vous avez fait `?help` pour avoir l'aide.");
  };
  // Le robot lui répondra si l'utilisateur envoie "mp"
  if (message.content == "mp"){
    message.author.send("voici un message privé !")
  };
   // Le robot lui répondra ceci si un utilisateur envoie "?avatar"
  if (message.content.startsWith(prefix + "avatar")) {
    message.channel.send(message.author.avatarURL);
  };

})
client.login("VOTRE TOKEN ICI SANS ESPACE");

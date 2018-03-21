const Discord = require('discord.js');
const client = new Discord.Client();

// On déclare le préfixe
var prefix = '?';

client.on("message", message => {

  // Le robot lui répondra pong si il envoi ping
  if (message.content === "ping"){
    // le robot répond pong !
    message.channel.send("Pong !");
  };


  // Le robot lui répondra ceci si un utilisateur fait ?help
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("Vous avez fait `?help` pour avoir l'aide.");
  };
  if (message.content == "mp"){
    message.author.send("voici un message privé !")
  };

})
client.login("VOTRE TOKEN ICI SANS ESPACE");

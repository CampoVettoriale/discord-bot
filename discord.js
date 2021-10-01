const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if (msg.content.localeCompare('Belandi') === 0) {
    msg.reply('Belandi Chiavari • Stampa gadgets personalizzati - Articoli ...    http://www.belandi.net    belandi chiavari regali oggettististica articoli regalo magliette t-shirt personalizzate mug tazze cuscini disney playboy stampa squadre.!');
  }
});

client.login('token');

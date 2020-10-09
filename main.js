const os = require('os');
const fs = require('fs');
const { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '-';
 
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("Visual studio code!", {type: "PLAYING"});
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'test'){
        client.commands.get('test').execute(message, args);
    } else if (command == 'verify'){
        client.commands.get('verify').execute(message, args);
    } else if (command == 'discordstatus'){
        client.commands.get('discordstatus').execute(message, args);
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args);
    } else if (command == 'credits'){
        client.commands.get('credits').execute(message, args);
    } else if (command == 'open_source'){
        client.commands.get('open_source').execute(message, args);
    } else if (command == 'avatar'){
        client.commands.get('avatar').execute(message, args);
    } else if (command == 'server'){
        client.commands.get('server').execute(message, args);
    } else if (command == 'reload'){
        client.commands.get('reload').execute(message, args);
    } else if (command == 'prune'){
        client.commands.get('prune').execute(message, args);
    } else if (command == 'uptime'){
        client.commands.get('uptime').execute(message,args,client);
    } else if (command == 'status'){
        client.commands.get('status').execute(message,args,client,MessageEmbed,fs,os);
    } else if (command == 'embed'){
        client.commands.get('embed').execute(message, args,Discord);
    }

});
 
client.login('Your-token-here');
 

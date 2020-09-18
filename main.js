const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Just a bot. is online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'test'){
        client.commands.get('test').execute(message, args);
    } else if (command == 'youtube'){
        client.commands.get('youtube').execute(message,args);
    } else if (command == 'todolist'){
        client.commands.get('todolist').execute(message, args);
    } else if (command == 'verify'){
        client.commands.get('verify').execute(message, args);
    } else if (command == 'discordstatus'){
        client.commands.get('discordstatus').execute(message, args);
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args);
    } else if (command == 'roletest'){
        client.commands.get('roletest').execute(message, args);
    } 
});
 
client.login('NzM4MzgzNTcyMzEzOTY0NzE2.XyLHSg._nsnC8ICW4o4kHcmxiwaV7skxv4');
 
 
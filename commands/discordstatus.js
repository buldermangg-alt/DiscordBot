module.exports = {
    name: 'discordstatus',
    description: "See discord status!",
    execute(message,args){
message.channel.send('https://discordstatus.com/#day');
    }
}
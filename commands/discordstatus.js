module.exports = {
    name: 'discordstatus',
    description: "See discord status!",
    execute(message,args){
message.channel.send({ content: "", embed: {title: "https://discordstatus.com/#day"}})
    }
}
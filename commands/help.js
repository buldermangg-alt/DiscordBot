module.exports = {
    name: 'help',
    description: "List of the commands!",
    execute(message,args){
message.channel.send({ content: "The commands", embed: {title: "Current commands: \n -test  \n -roletest  \n -todolist  \n -verify \n -discordstatus \n -help  \n -credits"}})
    }
}
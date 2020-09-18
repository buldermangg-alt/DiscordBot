module.exports = {
    name: 'help',
    description: "List of the commands!",
    execute(message,args){
message.channel.send({ content: "The commands", embed: {title: "Current commands: \n -test (to test is the bot working) \n -roletest (a command to test a role???) \n -todolist (the developer to do list.) \n -verify (To verify yourself) \n -discordstatus (see discord status) \n -help (This list)"}})
    }
}
module.exports = {
    name: 'help',
    description: "List of the commands!",
    execute(message,args){
message.channel.send({ content: "The commands", embed: {title: "-avatar \n-server \n-prune \n-help \n-test \n-todolist \n-uptime \n-open_source \n-reload \n-discordstatus \n-credits \n"}})
    }
}

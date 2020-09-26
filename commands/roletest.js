module.exports = {
    name: 'roletest',
    description: "This is a role test command!",
    execute(message,args){
message.channel.send({ content: "", embed: {title: "This command is under development."}})
    }
}

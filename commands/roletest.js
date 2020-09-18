module.exports = {
    name: 'roletest',
    description: "Role test commands!",
    execute(message,args){

        if (message.member.roles.cache.has('756075508063666297')){
            message.channel.send('ur mod!')
        }else {
            message.channel.send('You dont have the right permissions to use this command let me change that!').catch(console.error);
        }


    }
}
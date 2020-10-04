module.exports = {
	name: 'server',
	description: 'Display info about this server.',
	execute(message) {
		message.channel.send({ content: "", embed: {title: `Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`}})
	},
};
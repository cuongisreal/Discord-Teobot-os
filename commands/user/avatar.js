const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'avatar',
    utilisation: '{prefix}ping',
    aliases: ['avt'],
    execute(client, message, args) {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        const URL = member.user.avatarURL({format: 'jpg', dymanic: true, size: 1024})
        const avatarEmbed = new MessageEmbed()
            .setImage(URL)
            .setURL(URL)
            .setTitle('Download here')
            .setFooter(`Requested by: ${message.author.tag}`, message.author.avatarURL({ dynamic: true }));
        message.channel.send({embeds: [avatarEmbed]})
    }
}
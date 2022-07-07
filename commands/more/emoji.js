const { MessageEmbed, Util } = require("discord.js");
const { parse } = require(`twemoji-parser`);

module.exports = {
    name: 'emoji',
    utilisation: '{prefix}emoji',
    aliases: ['emo'],
    execute(client, message, args) {
        const emoji = args[0];
        if (!emoji) return message.channel.send('Please enter the Emoji you need to search for!');

        let custom = Util.parseEmoji(emoji);
        const embed = new MessageEmbed()
            .setTitle(`Emoji's results: ${emoji}`)
            .setColor("RANDOM");

        if (custom.id) {
            let link = `https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`;
            embed.setImage(link)
                .setFooter(`Emoji ID: ${custom.id}`);
            return message.channel.send({embeds: [embed]})
        } else {
            let parseEmj = parse(emoji, {assetType: 'png'})
            if (!parseEmj[0]) return message.channel.send('Invalid Emoji ❌');
            embed.setImage(parseEmj[0].url)
            return message.channel.send({embeds: [embed]});
        }
    }
}
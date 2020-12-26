const Discord = require('discord.js')

module.exports = {
    name: "yardım",
    aliases: ["yardım", "yardım1"],
    description: "sdsdsdsdsdsd",
    usage: "yardım",
    ownerOnly: false,
    //herkese açık mı yöneticilere özel mi?
    run: async (message, args, client) => {

        exports.run = async (client, message, args) => {

            let codare = "desteksunucusulinki"

            if (!args[0]) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor('Yardım', client.user.avatarURL())
                    .setDescription('**Örnek Kullanım:** `g!yardım Kategori`\n**Örnek:** `g!yardım Genel`\n[Gnarge Müzik Botunu Hemen Ekle](https://discord.com)')
                    .addField('Komutlar:',
                        `[g!yardım Genel](${codare})
    [g!yardım Eğlence](${codare})
    [g!yardım Kullanıcı](${codare})
    [g!yardım Moderasyon](${codare})
    [g!yardım Moderasyon2](${codare})
    [g!yardım Yapılandırma](${codare})
    [g!yardım Sunucu](${codare})
    [g!yardım Resim](${codare})
    [g!yardım nsfw](${codare})`)
                    .addField('» Sponsor',
                        `Bize Destek Verdikleri İçin [serverkurma.com](https://discord.com) Sitesine Teşekkür Ederiz! Çok Uygun Fiyatlara Oyun Sunucuları, Sanal Sunucular Alabilirsiniz. Discord Sunucularına [Katılın!](https://discord.com)`)
                    .setImage('https://cdn.discordapp.com/attachments/702883614756700212/722109027794026577/mlogo_1.png')
                    .setThumbnail(client.user.avatarURL())
                    .setColor("BLUE")
                    .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
                message.channel.send(embed)
            }
            if (args[0] === 'genel' | args[0] === 'eğlence' | args[0] === 'kullanıcı' | args[0] === 'moderasyon' | args[0] === 'moderasyon2' | args[0] === 'yapılandırma' | args[0] === 'sunucu' | args[0] === 'resim' | args[0] === 'nsfw') {
                const embed = new Discord.MessageEmbed()
                    .setAuthor(args[0], client.user.avatarURL())
                    .setDescription(client.commands.filter(c => c.conf.kategori === args[0]).map(kmt => kmt.help.name).join('\:white_small_square: - g!\n ') + '» Linkler\n[Davet Et](https://discord.com) | [Destek Sunucusu](' + codare + ') | [Oy Ver](https://discord.com) | [Web Sitesi](https://discord.com)')
                    .setThumbnail(client.user.avatarURL())
                    .setColor("BLUE")
                    .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
                message.channel.send(embed)
            } else {
                message.channel.send('Böyle bir kategori yok')
            }
        }

        
    }
}



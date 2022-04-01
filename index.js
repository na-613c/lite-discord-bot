const { Client, Intents, MessageEmbed } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
let { token } = require("./config.json");

client.on("ready", async () => {
    console.log("I am ready!");
    client.generateInvite(["ADMINISTRATOR"]).then(link => console.log(link));
    const messageGen = async (title,color) => {

        let arrReaction = ["✅", "⏰", "❌"];
        let embed = new MessageEmbed()
            .setColor(color)
            .setTitle(title)
            .addField("Отметки - жмем на реакции под сообщением", `\nБуду на КВ - ${arrReaction[0]}\n\n Опоздаю    - ${arrReaction[1]} \n\n Не буду    -  ${arrReaction[2]}`)
            .setThumbnail('https://i.gifer.com/762J.gif')

        const botMessage = await client.channels.cache
            .get("959546552060362832")
            .send(embed);

        try {
            await arrReaction.forEach(e => botMessage.react(e));
        } catch (e) {
            console.log(e);
        }
    }

    await messageGen("Понедельник 14:00-18:00 (+3 UTC)","#ec73a8")
    await messageGen("Вторник 20:00-24:00 (+3 UTC)","#f29700")
    await messageGen("Четверг (левик) 14:00-18:00 (+3 UTC)","#faef01")
    await messageGen("Четверг (левик) 20:00-24:00 (+3 UTC)","#c1d500")
    await messageGen("Суббота 14:00-18:00 (+3 UTC)","#9dd1a3")
    await messageGen("Суббота 20:00-24:00 (+3 UTC)","#00a0ea")
    await messageGen("Воскресенье 14:00-18:00 (+3 UTC)","#9fc3e7")
});

client.login(token);

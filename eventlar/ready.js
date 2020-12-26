module.exports = (client) => {

var oynuyorkısımları = [
"🎈・chipysbot.xyz",
"🎉 /yardım",
"📣 open beta"
]


setInterval(function() {

        var random = Math.floor(Math.random()*(oynuyorkısımları.length-0+1)+0);
       client.user.setActivity(oynuyorkısımları[random], { type: 'LISTENING' });
        }, 2 * 3000);

    console.log("Chipys, oynuyor aktif edildi, bütün kontroller yapıldı. Uçuşa hazır!")
}

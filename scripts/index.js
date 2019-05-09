
bot.hear(/Hello!/, function(res) {
    return res.send("Hi there!");
  });
  bot.respond(/What's your favorite food?/, function(res) {
    return res.send("I'm a robot--I don't eat food!");
});

bot.respond(/what is your favorite (.*)/, function(msg) {
    var fav;
    fav = msg.match[1];
    console.log(fav);
    switch (fav) {
      case "food":
        return msg.reply("I'm a robot--I don't eat food!");
        break;
      case "band":
        return msg.reply("The Beatles");
        break;
      case "programming language":
        return msg.reply("Javascript, of course!");
        break;
      default:
        return msg.reply("I don't have a favorite " + fav);
    }
  });
  
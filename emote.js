let emotes = [
  "UwU",
  "OwO",
  "UvU",
  "o((>ω< ))o",
  "(„• ᴗ •„)",
  "(≧◡≦)",
  "(⌒ω⌒)",
  "(╯°□°）╯︵ ┻━┻",
  "┬─┬ ノ( ゜-゜ノ)",
  "(。・ω・。)",
  "＞﹏＜",
  "ヾ(•ω•`)o",
  "(^・ω・^ )",
  "=の-の="
];
let emoteDiv = document.getElementById("emote");
if (emoteDiv) {
  emoteDiv.innerHTML = emotes[Math.floor(Math.random() * emotes.length)] || "＞﹏＜";
}
export {
  emoteDiv as e
};

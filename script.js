const games = [
  "Minecraft",
  "Fortnite",
  "PlayerUnknown's Battlegrounds",
  "Overwatch",
  "League of Legends",
  "World of Warcraft",
  "The Elder Scrolls V: Skyrim",
  "Diablo III",
  "Starcraft II",
  "Hearthstone"
];

const pickGameBtn = document.getElementById("pick-game-btn");

pickGameBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * games.length);
  const pickedGame = games[randomIndex];
  alert(`You picked: ${pickedGame}!`);
});

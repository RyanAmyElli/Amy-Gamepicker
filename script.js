const games = [
1. Akumu 🏚
2. Apeirophobia 👣
3. ABC Lore
4. ALBERT Doors ✨✌🏻
5. Bakon 🥓👨
6. BEAR 🐻
7. Before Truth 🏚
8. Bewildered 🌲
9. Banana Eats 🍌
10. Cheese Escape 🧀
11. Centipede
12. Doe 🔪
13. Dead Realm 🔪
14. Dead Silence 👁
15. Deepwoken 🎃
16. Disturbance
17. Dog! 😨🐶
18. Doors 🚪👁
19. Doors Floor 2 🚪
20. Endless Doors 🚪
21. Escape the Darkness 🕛🔪
22. Eyes the Horror Game
23. Evade
24. ELMIRA
25. Evelyn
26. Eternal Insolence
27. Frogge 🐸
28. FNAF: Coop 🍕
29. Faith
30. Frigid Dusk
31. Forsaken 🔪
32. Floppy Playtime 🛝
33. Gerald!
34. Granny 👵🏽
35. Insane Elevator 🛗
36. Imagine
37. Infectious Smile 😀
38. JUDY 💅✨
39. Little Ones 📌
40. Minus Elevation
41. Midnight Hours 🕛
42. Mommy 👩‍👧
43. Night of Noobs
44. Nanny 🙈
45. Nico Nextbots
46. Panik 🦾
47. Puppet 🧸
48. Piggy 🐷
49. Piggy 2 🐷
50. Questy
51. Ronald 🤡
52. Rickey Rat 🐀
53. Rainbow Friends 🌈
54. Rainbow Friends 2 🌈
55. Slimey
56. Survive The Killer 🕛 🔪
57. SCP Games 😶‍🌫️
58. Short Creepy Stories 📚
59. Specter
60. School 🎃
61. Submarine Simulator 🌊
62. The Horror Mansion 🏠
63. Teddy Modded 🐼
64. Teddy Friends 🧸
65. The Catcher 🐱
66. The Mirror 🪞
67. The Circus 🎪
68. Trespass 🏚
69. The Dead 💀
70. The Tall Man 👨
71. The Truth Untold
72. The Asylum ❄️
73. The Schoolhouse 🏫
74. The Mimic
75. Us Are Toys 🧸
76. VOID
77. Wormy 🪱
78. 3008 🚜
79. Nanny
80. The Haunted Imperial Hotel
81. Nico's Nextbots
82. Elmira
83. The Mimic
84. Doors
85. It
86. Murder Mystery 2
87. Flee the Facility
88. Evade
89. Rainbow Friends
90. Camp Woodland
91. The Carnival of Horrors
92. The Creepy House
93. The Dark Side
94. The Forgotten Facility
95. The Haunted Carnival
96. The Lost Ones
97. Ghost Hunt
98. Apocalypse Rising
99. Natural Disaster Survival
100. Survive the Killer!
101.Dress to Impress
102.carry a friend
103.be a duck
104.office experience
105.neighbors
106.mic up
107.Impostor
108.horrific housing 
109.work at a pizza place
];

const pickGameBtn = document.getElementById("pick-game-btn");

pickGameBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * games.length);
  const pickedGame = games[randomIndex];
  alert(`You picked: ${pickedGame}!`);
});

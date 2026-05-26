/* =========================================
   404: Self Not Found — data.js
   Main content library + app config
   ========================================= */

const APP_CONFIG = {
  appTitle: "404: Self Not Found",
  totalClicksToEnding: 15,

  // Feed behaviour stages
  stages: [
    {
      id: "balanced",
      label: "Balanced Feed",
      minClicks: 0,
      maxClicks: 5,
      dominantWeight: 0.2,
      darkShift: 0,
    },
    {
      id: "personalising",
      label: "Early Personalising",
      minClicks: 6,
      maxClicks: 9,
      dominantWeight: 0.45,
      darkShift: 0.15,
    },
    {
      id: "narrowing",
      label: "Noticeable Narrowing",
      minClicks: 10,
      maxClicks: 12,
      dominantWeight: 0.7,
      darkShift: 0.35,
    },
    {
      id: "collapse",
      label: "Echo Chamber Collapse",
      minClicks: 13,
      maxClicks: 15,
      dominantWeight: 0.9,
      darkShift: 0.6,
    },
  ],

  audio: {
    bubblePop: "assets/audio/bubblePop.mp3",
  },
};

/* =========================================
   Content library
   Only categories with real assets are active
   for now: Food, Gaming, Sports
   ========================================= */

const CONTENT_LIBRARY = [
  {
    id: "food",
    label: "Food",
    description: "Comforting, playful, colourful food content.",
    topics: [
      {
        id: "burger",
        label: "Burger",
        posts: [
          {
            id: "cheese-burger",
            title: "Cheeseburger",
            image: "assets/images/food/Burger/cheeseBurger.jpg",
            username: "@biteandbun",
            caption: "A classic cheese pull never fails me.",
          },
          {
            id: "chicken-burger",
            title: "Chicken Burger",
            image: "assets/images/food/Burger/chickenBurger.webp",
            username: "@crunchclub",
            caption: "Crispy, messy, and absolutely worth it.",
          },
          {
            id: "smash-burger",
            title: "Smash Burger",
            image: "assets/images/food/Burger/smashBurger.webp",
            username: "@latebiteco",
            caption: "That edge crisp is the whole point.",
          },
        ],
      },
      {
        id: "coffee",
        label: "Coffee",
        posts: [
          {
            id: "capuchino",
            title: "Capuchino",
            image: "assets/images/food/Coffee/capuchino.jpg",
            username: "@morningpours",
            caption: "Slow mornings start here.",
          },
          {
            id: "espresso",
            title: "Espresso",
            image: "assets/images/food/Coffee/espresso.jpg",
            username: "@dailyshot",
            caption: "Tiny cup, dangerous amount of energy.",
          },
          {
            id: "ice-latte",
            title: "Iced Latte",
            image: "assets/images/food/Coffee/iceLatte.jpg",
            username: "@caffeinecloud",
            caption: "Cold, smooth, and way too easy to finish.",
          },
        ],
      },
      {
        id: "dessert",
        label: "Dessert",
        posts: [
          {
            id: "cookie",
            title: "Cookie",
            image: "assets/images/food/Dessert/cookie.jpg",
            username: "@sugarsigh",
            caption: "Warm cookie energy is unmatched.",
          },
          {
            id: "ice-cream",
            title: "Ice Cream",
            image: "assets/images/food/Dessert/iceCream.jpg",
            username: "@sweettoothfeed",
            caption: "One scoop turns into three every time.",
          },
          {
            id: "opera-cake",
            title: "Opera Cake",
            image: "assets/images/food/Dessert/operaCake.jpg",
            username: "@forkandframe",
            caption: "Tiny layers, huge main character energy.",
          },
        ],
      },
      {
        id: "pasta",
        label: "Pasta",
        posts: [
          {
            id: "penne",
            title: "Penne",
            image: "assets/images/food/Pasta/penne.jpg",
            username: "@pastanights",
            caption: "Simple pasta always wins.",
          },
          {
            id: "ravioli",
            title: "Ravioli",
            image: "assets/images/food/Pasta/ravioli.jpg",
            username: "@filledandfolded",
            caption: "Little pockets of happiness.",
          },
          {
            id: "spaghetti",
            title: "Spaghetti",
            image: "assets/images/food/Pasta/spaghetti.webp",
            username: "@noodleloop",
            caption: "Comfort food on autopilot.",
          },
        ],
      },
      {
        id: "street-food",
        label: "Street Food",
        posts: [
          {
            id: "hot-dog",
            title: "Hot Dog",
            image: "assets/images/food/Street Food/hotDog.avif",
            username: "@citysnackrun",
            caption: "Quick bite, huge satisfaction.",
          },
          {
            id: "taco",
            title: "Taco",
            image: "assets/images/food/Street Food/taco.jpg",
            username: "@smallplatechaos",
            caption: "You can never stop at one.",
          },
          {
            id: "takoyaki",
            title: "Takoyaki",
            image: "assets/images/food/Street Food/takoyaki.avif",
            username: "@streetstrolls",
            caption: "Hot, saucy, and dangerously snackable.",
          },
        ],
      },
      {
        id: "sushi",
        label: "Sushi",
        posts: [
          {
            id: "gunkan-maki",
            title: "Gunkan Maki",
            image: "assets/images/food/Sushi/gunkanMaki.jpg",
            username: "@rollandrice",
            caption: "Small, neat, and impossible not to admire.",
          },
          {
            id: "hand-roll",
            title: "Hand Roll",
            image: "assets/images/food/Sushi/handRoll.webp",
            username: "@noriside",
            caption: "The hand roll experience feels elite.",
          },
          {
            id: "nigiri",
            title: "Nigiri",
            image: "assets/images/food/Sushi/nigiri.jpg",
            username: "@sliceofumami",
            caption: "Elegant, simple, and always photogenic.",
          },
        ],
      },
    ],
  },

  {
    id: "gaming",
    label: "Gaming",
    description: "Playful, nostalgic, intense, and immersive game content.",
    topics: [
      {
        id: "arcade-games",
        label: "Arcade Games",
        posts: [
          {
            id: "pac-man",
            title: "Pac-Man",
            image: "assets/images/Gaming/arcadeGames/pacMan.png",
            username: "@insertcoinclub",
            caption: "Retro maze energy never gets old.",
          },
          {
            id: "space-invaders",
            title: "Space Invaders",
            image: "assets/images/Gaming/arcadeGames/spaceinvaders.jpg",
            username: "@pixelrush",
            caption: "The old-school tension still hits.",
          },
          {
            id: "street-fighter-2",
            title: "Street Fighter II",
            image: "assets/images/Gaming/arcadeGames/streetFighter2.jpg",
            username: "@arcadethrowback",
            caption: "Classic cabinet battles built different.",
          },
        ],
      },
      {
        id: "exploration-games",
        label: "Exploration Games",
        posts: [
          {
            id: "legend-of-zelda",
            title: "The Legend of Zelda",
            image: "assets/images/Gaming/explorationGames/legendOfZelda.jpg",
            username: "@mapunlocked",
            caption: "Nothing beats the feeling of wandering into the unknown.",
          },
          {
            id: "monster-hunter-wilds",
            title: "Monster Hunter Wilds",
            image:
              "assets/images/Gaming/explorationGames/monsterHunterWilds.avif",
            username: "@questboard",
            caption: "The scale of this world looks absolutely wild.",
          },
          {
            id: "subnautica-2",
            title: "Subnautica 2",
            image: "assets/images/Gaming/explorationGames/subnautica2.jpg",
            username: "@deepdivefeed",
            caption: "Beautiful ocean vibes with hidden panic underneath.",
          },
        ],
      },
      {
        id: "fighting-games",
        label: "Fighting Games",
        posts: [
          {
            id: "mortal-kombat-1",
            title: "Mortal Kombat 1",
            image: "assets/images/Gaming/fightingGames/mortalKombat1.avif",
            username: "@counterhit",
            caption:
              "Brutal, flashy, and kind of impossible to look away from.",
          },
          {
            id: "street-fighter-6",
            title: "Street Fighter 6",
            image: "assets/images/Gaming/fightingGames/streetFighters6.avif",
            username: "@frameperfect",
            caption: "Every match feels like a mind game.",
          },
          {
            id: "tekken-8",
            title: "Tekken 8",
            image: "assets/images/Gaming/fightingGames/tekken8.webp",
            username: "@jugglestate",
            caption: "The drama in every round is unreal.",
          },
        ],
      },
      {
        id: "horror-games",
        label: "Horror Games",
        posts: [
          {
            id: "amnesia-the-bunker",
            title: "Amnesia: The Bunker",
            image: "assets/images/Gaming/horrorGames/amnesiaTheBunker.jpg",
            username: "@nightshiftplayer",
            caption: "This game turns every sound into a threat.",
          },
          {
            id: "outlast-2",
            title: "Outlast 2",
            image: "assets/images/Gaming/horrorGames/outlast2.jpg",
            username: "@runandhide",
            caption: "Pure panic from start to finish.",
          },
          {
            id: "silent-hill-2",
            title: "Silent Hill 2",
            image: "assets/images/Gaming/horrorGames/silentHill2.jpg",
            username: "@fogwalker",
            caption: "Quiet dread is somehow scarier than jump scares.",
          },
        ],
      },
      {
        id: "racing-games",
        label: "Racing Games",
        posts: [
          {
            id: "forza-horizon-5",
            title: "Forza Horizon 5",
            image: "assets/images/Gaming/racingGames/forzaHorizon5.avif",
            username: "@apexarcade",
            caption: "Fast cars and gorgeous roads is a dangerous combo.",
          },
          {
            id: "gran-turismo-7",
            title: "Gran Turismo 7",
            image: "assets/images/Gaming/racingGames/granTurismo7.jpg",
            username: "@trackmode",
            caption: "Clean racing just scratches a different itch.",
          },
          {
            id: "mario-kart-8",
            title: "Mario Kart 8",
            image: "assets/images/Gaming/racingGames/marioKart8.webp",
            username: "@shellshock",
            caption: "Friendship ends the second the blue shell appears.",
          },
        ],
      },
      {
        id: "sandbox-games",
        label: "Sandbox Games",
        posts: [
          {
            id: "minecraft",
            title: "Minecraft",
            image: "assets/images/Gaming/sandboxGames/minecraft.webp",
            username: "@blockbyblock",
            caption: "Infinite freedom in cube form.",
          },
          {
            id: "stardew-valley",
            title: "Stardew Valley",
            image: "assets/images/Gaming/sandboxGames/stardewValley.png",
            username: "@quietfarm",
            caption: "Peaceful little routines become a whole lifestyle.",
          },
          {
            id: "terreria",
            title: "Terreria",
            image: "assets/images/Gaming/sandboxGames/terreria.jpg",
            username: "@digbuildrepeat",
            caption: "Dig, build, survive, repeat.",
          },
        ],
      },
    ],
  },

  {
    id: "sports",
    label: "Sports",
    description: "Competitive, event-based, highlight-heavy sports content.",
    topics: [
      {
        id: "9-ball",
        label: "9 Ball",
        posts: [
          {
            id: "9ball-champs",
            title: "9 Ball Champs",
            image: "assets/images/sports/9ball/9ballChamps.jpg",
            username: "@rackandrun",
            caption: "Big pressure moments make pool so addictive to watch.",
          },
          {
            id: "predator-wpa",
            title: "Predator WPA",
            image: "assets/images/sports/9ball/predatorWPA.webp",
            username: "@cuevision",
            caption: "That tournament atmosphere is so clean.",
          },
          {
            id: "us-open-9ball",
            title: "US Open 9 Ball",
            image: "assets/images/sports/9ball/usOpen.jpg",
            username: "@breakshotdaily",
            caption: "One break can change the whole set.",
          },
        ],
      },
      {
        id: "basketball",
        label: "Basketball",
        posts: [
          {
            id: "lebron-retire",
            title: "LeBron Retirement",
            image: "assets/images/sports/basketball/lebronRetire.jpg",
            username: "@courtsidefiles",
            caption: "The end of an era always feels unreal.",
          },
          {
            id: "lebron-shoes",
            title: "LeBron 23 Luxe",
            image: "assets/images/sports/basketball/lebronShoes.webp",
            username: "@sneakercourt",
            caption: "Performance shoe or collector piece? Maybe both.",
          },
          {
            id: "spurs-v-okc",
            title: "Spurs vs OKC",
            image: "assets/images/sports/basketball/spursvOkc.jpg",
            username: "@playoffpulse",
            caption: "Series-tying games always hit different.",
          },
        ],
      },
      {
        id: "football",
        label: "Football",
        posts: [
          {
            id: "arsenal-premier",
            title: "Arsenal Premier",
            image: "assets/images/sports/football/arsenalPremier.png",
            username: "@fulltimefeed",
            caption: "A title push changes the mood of a whole fanbase.",
          },
          {
            id: "el-classico",
            title: "El Classico",
            image: "assets/images/sports/football/elClassico.avif",
            username: "@matchdaymadness",
            caption: "Some rivalries really do feel bigger than sport.",
          },
          {
            id: "world-cup",
            title: "World Cup",
            image: "assets/images/sports/football/worldCup.webp",
            username: "@stadiumroar",
            caption: "Global football drama at its peak.",
          },
        ],
      },
      {
        id: "golf",
        label: "Golf",
        posts: [
          {
            id: "augusta-national",
            title: "Augusta National",
            image: "assets/images/sports/golf/augustaNational.jpg",
            username: "@fairwaynotes",
            caption: "Some courses feel legendary before the first swing.",
          },
          {
            id: "newest-member",
            title: "Newest Member",
            image: "assets/images/sports/golf/newestMember.avif",
            username: "@greensideclub",
            caption: "Quiet prestige has its own strange power.",
          },
          {
            id: "rory-masters",
            title: "Rory at the Masters",
            image: "assets/images/sports/golf/roryMasters.jpg",
            username: "@pinseekers",
            caption: "One of those stories everyone keeps watching.",
          },
        ],
      },
      {
        id: "motorsports",
        label: "Motorsports",
        posts: [
          {
            id: "kimi-canada",
            title: "Kimi in Canada",
            image: "assets/images/sports/motorsports/kimiCanada.jpg",
            username: "@pitlanefeed",
            caption: "A single race clip can carry so much legacy.",
          },
          {
            id: "marc-marquez-crash",
            title: "Marc Marquez Crash",
            image: "assets/images/sports/motorsports/marcMarquezCrash.avif",
            username: "@apexstories",
            caption: "Motorsport always sits so close to risk.",
          },
          {
            id: "max-nurburgring",
            title: "Max Nürburgring",
            image: "assets/images/sports/motorsports/maxNürburgring.webp",
            username: "@trackwatch",
            caption: "Speed plus precision is such a dangerous combination.",
          },
        ],
      },
      {
        id: "tennis",
        label: "Tennis",
        posts: [
          {
            id: "hardcourt",
            title: "Hardcourt Session",
            image: "assets/images/sports/tennis/hardcourt.avif",
            username: "@baselinebeat",
            caption: "That sharp hardcourt sound is weirdly satisfying.",
          },
          {
            id: "jannik-sinner",
            title: "Jannik Sinner",
            image: "assets/images/sports/tennis/jannikSinner.jpg",
            username: "@racquetroom",
            caption:
              "Locked-in tennis always looks effortless until you try it.",
          },
          {
            id: "racket-ball",
            title: "Racket and Ball",
            image: "assets/images/sports/tennis/racketBall.avif",
            username: "@servicebox",
            caption: "Simple gear, endless obsession.",
          },
        ],
      },
    ],
  },
];

/* =========================================
   Derived data helpers
   These make the next JS files easier to build
   ========================================= */

const ACTIVE_CATEGORY_IDS = CONTENT_LIBRARY.map((category) => category.id);

const CATEGORY_LOOKUP = CONTENT_LIBRARY.reduce((lookup, category) => {
  lookup[category.id] = category;
  return lookup;
}, {});

const ALL_POSTS = CONTENT_LIBRARY.flatMap((category) =>
  category.topics.flatMap((topic) =>
    topic.posts.map((post) => ({
      ...post,
      categoryId: category.id,
      categoryLabel: category.label,
      topicId: topic.id,
      topicLabel: topic.label,
    })),
  ),
);

const ALL_TOPICS = CONTENT_LIBRARY.flatMap((category) =>
  category.topics.map((topic) => ({
    id: topic.id,
    label: topic.label,
    categoryId: category.id,
    categoryLabel: category.label,
  })),
);

/* =========================================
   Optional window exposure
   Helpful for non-module script setups
   ========================================= */

window.APP_CONFIG = APP_CONFIG;
window.CONTENT_LIBRARY = CONTENT_LIBRARY;
window.ACTIVE_CATEGORY_IDS = ACTIVE_CATEGORY_IDS;
window.CATEGORY_LOOKUP = CATEGORY_LOOKUP;
window.ALL_POSTS = ALL_POSTS;
window.ALL_TOPICS = ALL_TOPICS;

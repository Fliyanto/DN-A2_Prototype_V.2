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
   Active categories:
   Food, Gaming, Sports, Music, Tech, Travel
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

  {
    id: "music",
    label: "Music",
    description:
      "Aesthetic, performance-based, nostalgic, and lifestyle music content.",
    topics: [
      {
        id: "album",
        label: "Album",
        posts: [
          {
            id: "album-collection",
            title: "Album Collection",
            image: "assets/images/music/album/albumCollection.jpeg",
            username: "@sleevenotes",
            caption: "Some albums look too good to hide on a shelf.",
          },
          {
            id: "kpop-albums",
            title: "K-Pop Albums",
            image: "assets/images/music/album/kpopAlbums.jpg",
            username: "@photocardpulls",
            caption: "The packaging is half the experience.",
          },
          {
            id: "retro-albums",
            title: "Retro Albums",
            image: "assets/images/music/album/retroAlbums.webp",
            username: "@dustytracklist",
            caption: "Old covers have a different kind of charm.",
          },
        ],
      },
      {
        id: "concerts",
        label: "Concerts",
        posts: [
          {
            id: "coldplay",
            title: "Coldplay Concert",
            image: "assets/images/music/concerts/coldPlay.jpg",
            username: "@stadiumglow",
            caption: "The lights make the whole crowd feel unreal.",
          },
          {
            id: "itzy-concert",
            title: "ITZY Concert",
            image: "assets/images/music/concerts/itzyConcert.jpg",
            username: "@frontrowfeels",
            caption: "Concert energy hits different when everyone sings along.",
          },
          {
            id: "kiss-concert",
            title: "KISS Concert",
            image: "assets/images/music/concerts/kissConcert.webp",
            username: "@loudnightout",
            caption: "Big stage, big makeup, bigger drama.",
          },
        ],
      },
      {
        id: "instruments",
        label: "Instruments",
        posts: [
          {
            id: "new-guitar",
            title: "New Guitar",
            image: "assets/images/music/instruments/newGuitar.jpg",
            username: "@sixstringdiary",
            caption:
              "A fresh guitar always feels like a new personality unlocked.",
          },
          {
            id: "tom-galore",
            title: "Tom Galore",
            image: "assets/images/music/instruments/tomGalore.jpg",
            username: "@drumroomdaily",
            caption: "Drum setups always look chaotic in the best way.",
          },
          {
            id: "trying-to-sort-out-cabels",
            title: "Cable Setup",
            image: "assets/images/music/instruments/tryingToSortOutCabels.jpg",
            username: "@signalchain",
            caption: "The cable mess is part of the ritual.",
          },
        ],
      },
      {
        id: "karaoke",
        label: "Karaoke",
        posts: [
          {
            id: "home-karaoke",
            title: "Home Karaoke",
            image: "assets/images/music/karaoke/homeKaraoke.jpg",
            username: "@livingroomsessions",
            caption: "Home karaoke turns everyone into a main vocalist.",
          },
          {
            id: "karaoke-setup",
            title: "Karaoke Setup",
            image: "assets/images/music/karaoke/karaokeSetup.jpg",
            username: "@micchecknight",
            caption: "The setup decides how dramatic the night gets.",
          },
          {
            id: "karaoke-night",
            title: "Karaoke Night",
            image: "assets/images/music/karaoke/kareokeNight.jpg",
            username: "@offkeyhours",
            caption: "Bad singing somehow makes the memory better.",
          },
        ],
      },
      {
        id: "orchestra",
        label: "Orchestra",
        posts: [
          {
            id: "fun-night",
            title: "Fun Night",
            image: "assets/images/music/orchestra/funNight.jpeg",
            username: "@grandhallglow",
            caption:
              "Orchestra nights feel fancy before the music even starts.",
          },
          {
            id: "rehersal-orchestra",
            title: "Orchestra Rehearsal",
            image: "assets/images/music/orchestra/rehersalOrchestra.jpg",
            username: "@soundcheckstrings",
            caption: "Rehearsal has its own quiet kind of magic.",
          },
          {
            id: "watching-orchestra",
            title: "Watching Orchestra",
            image: "assets/images/music/orchestra/watchingOrchestra.jpg",
            username: "@balconyview",
            caption:
              "Sometimes the best seat is the one where everything feels huge.",
          },
        ],
      },
      {
        id: "vinyl",
        label: "Vinyl",
        posts: [
          {
            id: "home-display",
            title: "Home Display",
            image: "assets/images/music/vinyl/homeDisplay.webp",
            username: "@vinylcorner",
            caption: "A good display makes music feel physical again.",
          },
          {
            id: "home-display-2",
            title: "Record Wall",
            image: "assets/images/music/vinyl/homeDisplay2.webp",
            username: "@shelfrotation",
            caption: "The wall slowly becomes a playlist.",
          },
          {
            id: "vinyl-store",
            title: "Vinyl Store",
            image: "assets/images/music/vinyl/vinylStore.webp",
            username: "@cratefinds",
            caption: "Digging through records is basically treasure hunting.",
          },
        ],
      },
    ],
  },

  {
    id: "tech",
    label: "Tech",
    description:
      "Clean setups, gadgets, robotics, and modern digital lifestyle content.",
    topics: [
      {
        id: "cameras",
        label: "Cameras",
        posts: [
          {
            id: "home-photography-setup",
            title: "Home Photography Setup",
            image: "assets/images/tech/cameras/homePhotographySetUp.jpg",
            username: "@framefromhome",
            caption: "A tiny home setup can still look studio-ready.",
          },
          {
            id: "loads-camera",
            title: "Camera Gear",
            image: "assets/images/tech/cameras/loadsCamera.jpg",
            username: "@lenspile",
            caption: "Too many cameras is not a real problem.",
          },
          {
            id: "personal-setup",
            title: "Personal Setup",
            image: "assets/images/tech/cameras/personalSetup.webp",
            username: "@dailycapture",
            caption: "The best camera is the one you actually reach for.",
          },
        ],
      },
      {
        id: "desk-setup",
        label: "Desk Setup",
        posts: [
          {
            id: "gaming-setup",
            title: "Gaming Setup",
            image: "assets/images/tech/deskSetup/gamingSetup.jpg",
            username: "@setupscroll",
            caption: "RGB makes every desk feel slightly more powerful.",
          },
          {
            id: "green-setup",
            title: "Green Setup",
            image: "assets/images/tech/deskSetup/greenSetUp.avif",
            username: "@desktherapy",
            caption: "A clean setup can fully reset the mood.",
          },
          {
            id: "minimalistic-setup",
            title: "Minimalistic Setup",
            image: "assets/images/tech/deskSetup/minimalisticSetUp.jpeg",
            username: "@quietworkspace",
            caption: "Less clutter, more pretending life is organised.",
          },
        ],
      },
      {
        id: "gaming-gears",
        label: "Gaming Gears",
        posts: [
          {
            id: "console-setup",
            title: "Console Setup",
            image: "assets/images/tech/gamingGears/consoleSetUp.jpg",
            username: "@loadoutcorner",
            caption: "The console corner always feels like a comfort zone.",
          },
          {
            id: "racing-rig",
            title: "Racing Rig",
            image: "assets/images/tech/gamingGears/racingRIg.jpg",
            username: "@simlap",
            caption: "This setup makes sitting still feel fast.",
          },
          {
            id: "triple-monitor-setup",
            title: "Triple Monitor Setup",
            image: "assets/images/tech/gamingGears/tripleMonitorSetUp.webp",
            username: "@wideviewclub",
            caption: "Three screens and suddenly normal feels too small.",
          },
        ],
      },
      {
        id: "retro-tech",
        label: "Retro Tech",
        posts: [
          {
            id: "nostalgic-memories",
            title: "Nostalgic Memories",
            image: "assets/images/tech/retroTech/nostalgicMemories.jpg",
            username: "@pastbootup",
            caption: "Old tech somehow feels warmer than new tech.",
          },
          {
            id: "old-school",
            title: "Old School",
            image: "assets/images/tech/retroTech/oldSchool.jpg",
            username: "@vintagevoltage",
            caption: "Chunky buttons deserve more respect.",
          },
          {
            id: "ps1",
            title: "PS1",
            image: "assets/images/tech/retroTech/ps1.jpg",
            username: "@memorycardfull",
            caption: "The startup sound lives rent-free forever.",
          },
        ],
      },
      {
        id: "robots",
        label: "Robots",
        posts: [
          {
            id: "industrial-robotic-arms",
            title: "Robotic Arms",
            image: "assets/images/tech/robots/industrialRoboticArms.png",
            username: "@futurefactory",
            caption: "Industrial robots look graceful in a slightly scary way.",
          },
          {
            id: "robot-clerk",
            title: "Robot Clerk",
            image: "assets/images/tech/robots/robotClerk.webp",
            username: "@automatedhello",
            caption: "A robot clerk feels cute until it remembers your order.",
          },
          {
            id: "robot-exhibition",
            title: "Robot Exhibition",
            image: "assets/images/tech/robots/robotExhibition.jpg",
            username: "@metalmeetup",
            caption: "The future always looks shinier at exhibitions.",
          },
        ],
      },
      {
        id: "smart-watches",
        label: "Smart Watches",
        posts: [
          {
            id: "apple-watch",
            title: "Apple Watch",
            image: "assets/images/tech/smartWatches/appleWatch.webp",
            username: "@wristcheckdaily",
            caption: "Tiny screen, weirdly large control over my routine.",
          },
          {
            id: "garmin-watch",
            title: "Garmin Watch",
            image: "assets/images/tech/smartWatches/garminWatch.jpg",
            username: "@trainingmode",
            caption: "Fitness data becomes addictive way too quickly.",
          },
          {
            id: "whoop-band",
            title: "WHOOP Band",
            image: "assets/images/tech/smartWatches/whoopBand.avif",
            username: "@recoveryscore",
            caption: "Nothing humbles you like a sleep score.",
          },
        ],
      },
    ],
  },

  {
    id: "travel",
    label: "Travel",
    description:
      "Photogenic locations, city moments, food trips, and destination content.",
    topics: [
      {
        id: "airports",
        label: "Airports",
        posts: [
          {
            id: "changi-airport",
            title: "Changi Airport",
            image: "assets/images/travel/airports/changiAirport.jpg",
            username: "@gatechanged",
            caption: "Some airports feel like destinations by themselves.",
          },
          {
            id: "hong-kong-airport",
            title: "Hong Kong Airport",
            image: "assets/images/travel/airports/hongkongAirport.jpg",
            username: "@terminalstories",
            caption: "Airport windows make every trip feel cinematic.",
          },
          {
            id: "incheon-international-airport",
            title: "Incheon Airport",
            image:
              "assets/images/travel/airports/incheonInternationalAirport.jpg",
            username: "@boardingsoon",
            caption: "The calm before the trip always starts here.",
          },
        ],
      },
      {
        id: "beach-escapes",
        label: "Beach Escapes",
        posts: [
          {
            id: "raja-ampat-beaches",
            title: "Raja Ampat",
            image: "assets/images/travel/beachEscapes/rajaAmpatBeaches.jpg",
            username: "@clearwaterdiary",
            caption: "This is the kind of blue that feels edited but isn’t.",
          },
          {
            id: "santorini-black-sand-beach",
            title: "Santorini Beach",
            image:
              "assets/images/travel/beachEscapes/santoriniBlackSandBeach.webp",
            username: "@islandglow",
            caption: "Black sand beaches feel unreal in the best way.",
          },
          {
            id: "seminyak-sunset-bali",
            title: "Seminyak Sunset",
            image: "assets/images/travel/beachEscapes/seminyakSunsetBali.jpg",
            username: "@sunsetqueue",
            caption: "Everyone stops pretending not to take photos at sunset.",
          },
        ],
      },
      {
        id: "city-streets",
        label: "City Streets",
        posts: [
          {
            id: "city-view",
            title: "City View",
            image: "assets/images/travel/cityStreets/cityView.jpeg",
            username: "@urbanframe",
            caption: "A city view always makes life feel busier than it is.",
          },
          {
            id: "new-york-city-vibes",
            title: "New York City",
            image: "assets/images/travel/cityStreets/newYorkCityVibes.jpg",
            username: "@crosswalkstories",
            caption: "New York makes even walking feel like a scene.",
          },
          {
            id: "shibuya-crossing",
            title: "Shibuya Crossing",
            image: "assets/images/travel/cityStreets/shibuyaCrossing.jpg",
            username: "@tokyoflow",
            caption: "Organised chaos somehow looks beautiful here.",
          },
        ],
      },
      {
        id: "food-travels",
        label: "Food Travels",
        posts: [
          {
            id: "borough-market",
            title: "Borough Market",
            image: "assets/images/travel/foodTravels/boroughMarket.webp",
            username: "@passportplates",
            caption: "Markets are basically travel highlights you can eat.",
          },
          {
            id: "jalan-alor",
            title: "Jalan Alor",
            image: "assets/images/travel/foodTravels/jalanAlor.jpg",
            username: "@nightmarketwalks",
            caption:
              "Street food at night has unmatched main character energy.",
          },
          {
            id: "osaka-street-foods",
            title: "Osaka Street Foods",
            image: "assets/images/travel/foodTravels/osakaStreetFoods.jpg",
            username: "@snackpassport",
            caption: "Osaka really knows how to turn food into a memory.",
          },
        ],
      },
      {
        id: "landmarks",
        label: "Landmarks",
        posts: [
          {
            id: "mount-rushmore",
            title: "Mount Rushmore",
            image: "assets/images/travel/landmarks/mountRushmore.avif",
            username: "@postcardlogic",
            caption: "Some landmarks feel familiar before you even visit.",
          },
          {
            id: "parthenon",
            title: "Parthenon",
            image: "assets/images/travel/landmarks/parthenon.webp",
            username: "@ancientangle",
            caption: "Old stone, huge history, perfect golden-hour drama.",
          },
          {
            id: "sydney-opera-house",
            title: "Sydney Opera House",
            image: "assets/images/travel/landmarks/sydneyOperaHouse.jpg",
            username: "@harbourview",
            caption: "Instantly recognisable for a reason.",
          },
        ],
      },
      {
        id: "nature-views",
        label: "Nature Views",
        posts: [
          {
            id: "central-park-new-york",
            title: "Central Park",
            image: "assets/images/travel/natureViews/centralParkNewYork.jpg",
            username: "@greenbreak",
            caption: "A patch of calm in the middle of everything.",
          },
          {
            id: "lake-kawaguchiko",
            title: "Lake Kawaguchiko",
            image: "assets/images/travel/natureViews/lakeKawaguchiko.avif",
            username: "@mountainmirror",
            caption: "Some views make everyone go quiet for a second.",
          },
          {
            id: "lombok-indonesia",
            title: "Lombok",
            image: "assets/images/travel/natureViews/lombokIndonesia.webp",
            username: "@islandstillness",
            caption: "Soft skies and quiet views are a dangerous combination.",
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

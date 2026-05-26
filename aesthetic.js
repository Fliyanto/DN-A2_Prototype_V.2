/* =========================================
   404: Self Not Found — aesthetic.js
   Visual behaviour helpers for the bubble feed
   ========================================= */

/* =========================================
   Bubble visual settings
   These values keep the bubbles playful without
   making the layout too chaotic.
   ========================================= */

const BUBBLE_VISUAL_PRESETS = [
  {
    sizeClass: "bubble-size-small",
    driftClass: "bubble-drift-soft",
  },
  {
    sizeClass: "bubble-size-medium",
    driftClass: "bubble-drift-medium",
  },
  {
    sizeClass: "bubble-size-large",
    driftClass: "bubble-drift-slow",
  },
  {
    sizeClass: "bubble-size-wide",
    driftClass: "bubble-drift-soft",
  },
  {
    sizeClass: "bubble-size-tall",
    driftClass: "bubble-drift-medium",
  },
];

const BUBBLE_PERSONALITY_CLASSES = [
  "bubble-personality-soft",
  "bubble-personality-glossy",
  "bubble-personality-floaty",
  "bubble-personality-wobbly",
  "bubble-personality-dreamy",
];

/* =========================================
   Random visual helpers
   ========================================= */

function getRandomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInteger(min, max) {
  return Math.floor(getRandomBetween(min, max + 1));
}

function getRandomVisualPreset() {
  return getRandomItem(BUBBLE_VISUAL_PRESETS) || BUBBLE_VISUAL_PRESETS[1];
}

function getRandomPersonalityClass() {
  return (
    getRandomItem(BUBBLE_PERSONALITY_CLASSES) || BUBBLE_PERSONALITY_CLASSES[0]
  );
}

/* =========================================
   Bubble styling
   Called after bubbles are generated.
   ========================================= */

function applyBubbleAesthetic(container = document) {
  const bubbles = getAll(".feed-bubble", container);

  bubbles.forEach((bubble, index) => {
    const preset = getRandomVisualPreset();
    const personalityClass = getRandomPersonalityClass();

    const rotation = getRandomBetween(-5, 5).toFixed(2);
    const floatDelay = getRandomBetween(0, 4).toFixed(2);
    const floatDuration = getRandomBetween(6, 11).toFixed(2);
    const popDelay = Math.min(index * 0.025, 0.45).toFixed(2);

    bubble.classList.add(preset.sizeClass, preset.driftClass, personalityClass);

    bubble.style.setProperty("--bubble-rotate", `${rotation}deg`);
    bubble.style.setProperty("--bubble-float-delay", `${floatDelay}s`);
    bubble.style.setProperty("--bubble-float-duration", `${floatDuration}s`);
    bubble.style.setProperty("--bubble-pop-delay", `${popDelay}s`);

    bubble.dataset.visualReady = "true";
  });
}

/* =========================================
   Stage aesthetic
   As the feed narrows, the atmosphere becomes
   slightly heavier without becoming obvious too early.
   ========================================= */

function applyStageAesthetic(clickCount = 0) {
  const app = getElement("app");
  const currentStage = getCurrentStage(clickCount);

  if (!app || !currentStage) return;

  app.style.setProperty("--dark-shift", currentStage.darkShift || 0);
  app.dataset.stage = currentStage.id;
}

function pulseClickedBubble(bubbleElement) {
  if (!bubbleElement) return;

  bubbleElement.classList.remove("is-popping");

  window.requestAnimationFrame(() => {
    bubbleElement.classList.add("is-popping");
  });

  window.setTimeout(() => {
    bubbleElement.classList.remove("is-popping");
  }, 420);
}

/* =========================================
   Feed atmosphere helpers
   These add small changing values to the app,
   useful for CSS background shifts.
   ========================================= */

function updateAtmosphereVariables(clickCount = 0) {
  const app = getElement("app");

  if (!app) return;

  const totalClicks = window.APP_CONFIG?.totalClicksToEnding || 15;
  const progress = clampNumber(clickCount / totalClicks, 0, 1);

  app.style.setProperty("--experience-progress", progress.toFixed(3));
  app.style.setProperty("--blur-pressure", `${(progress * 7).toFixed(2)}px`);
  app.style.setProperty(
    "--contrast-pressure",
    (1 + progress * 0.18).toFixed(3),
  );
  app.style.setProperty(
    "--saturation-pressure",
    (1 - progress * 0.28).toFixed(3),
  );
}

/* =========================================
   Ending screen aesthetic
   Adds a tiny randomised glitch feel each time
   the ending appears.
   ========================================= */

function randomiseEndingGlitch() {
  const endingScreen = getElement("endingScreen");

  if (!endingScreen) return;

  endingScreen.style.setProperty(
    "--glitch-offset-a",
    `${getRandomInteger(-8, 8)}px`,
  );

  endingScreen.style.setProperty(
    "--glitch-offset-b",
    `${getRandomInteger(-10, 10)}px`,
  );

  endingScreen.style.setProperty(
    "--glitch-speed",
    `${getRandomBetween(1.4, 2.4).toFixed(2)}s`,
  );
}

/* =========================================
   Expose helpers globally
   ========================================= */

window.applyBubbleAesthetic = applyBubbleAesthetic;
window.applyStageAesthetic = applyStageAesthetic;
window.pulseClickedBubble = pulseClickedBubble;
window.updateAtmosphereVariables = updateAtmosphereVariables;
window.randomiseEndingGlitch = randomiseEndingGlitch;

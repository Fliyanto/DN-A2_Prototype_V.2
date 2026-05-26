/* =========================================
   404: Self Not Found — functions.js
   Reusable helper functions for the prototype
   ========================================= */

/* =========================================
   Basic DOM helpers
   ========================================= */

function getElement(id) {
  return document.getElementById(id);
}

function getAll(selector, parent = document) {
  return Array.from(parent.querySelectorAll(selector));
}

function showScreen(screenId) {
  const screens = getAll(".screen");

  screens.forEach((screen) => {
    const isTarget = screen.id === screenId;

    screen.classList.toggle("is-active", isTarget);
    screen.setAttribute("aria-hidden", String(!isTarget));
  });
}

function setAppStage(stageId) {
  const app = getElement("app");

  if (!app) return;

  app.dataset.stage = stageId;
}

/* =========================================
   Random helpers
   ========================================= */

function getRandomItem(items) {
  if (!Array.isArray(items) || items.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function shuffleArray(items) {
  if (!Array.isArray(items)) return [];

  const copiedItems = [...items];

  for (let i = copiedItems.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [copiedItems[i], copiedItems[randomIndex]] = [
      copiedItems[randomIndex],
      copiedItems[i],
    ];
  }

  return copiedItems;
}

function clampNumber(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/* =========================================
   App stage helpers
   ========================================= */

function getCurrentStage(clickCount) {
  const stages = window.APP_CONFIG?.stages || [];

  return (
    stages.find((stage) => {
      return clickCount >= stage.minClicks && clickCount <= stage.maxClicks;
    }) || stages[0]
  );
}

function updateStageDisplay(clickCount) {
  const totalClicks = window.APP_CONFIG?.totalClicksToEnding || 15;
  const currentStage = getCurrentStage(clickCount);

  const clickCounter = getElement("clickCounter");
  const stageLabel = getElement("stageLabel");

  if (clickCounter) {
    clickCounter.textContent = `${clickCount} / ${totalClicks} clicks`;
  }

  if (stageLabel && currentStage) {
    stageLabel.textContent = currentStage.label;
  }

  if (currentStage) {
    setAppStage(currentStage.id);
  }
}

/* =========================================
   Category helpers
   ========================================= */

function getCategoryById(categoryId) {
  return window.CATEGORY_LOOKUP?.[categoryId] || null;
}

function getActiveCategories(selectedCategoryIds = []) {
  const library = window.CONTENT_LIBRARY || [];

  if (!selectedCategoryIds.length) {
    return library;
  }

  const selectedCategories = selectedCategoryIds
    .map((categoryId) => getCategoryById(categoryId))
    .filter(Boolean);

  return selectedCategories.length ? selectedCategories : library;
}

function getPostsFromCategories(categoryIds = []) {
  const categories = getActiveCategories(categoryIds);

  return categories.flatMap((category) =>
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
}

function getPostsByCategory(categoryId) {
  return getPostsFromCategories([categoryId]);
}

function getDominantCategoryId(clickHistory = []) {
  if (!clickHistory.length) return null;

  const counts = clickHistory.reduce((result, post) => {
    result[post.categoryId] = (result[post.categoryId] || 0) + 1;
    return result;
  }, {});

  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
}

/* =========================================
   Feed generation helpers
   ========================================= */

function buildPersonalisedPostPool({
  selectedCategoryIds = [],
  clickHistory = [],
  clickCount = 0,
} = {}) {
  const currentStage = getCurrentStage(clickCount);
  const basePosts = getPostsFromCategories(selectedCategoryIds);
  const dominantCategoryId = getDominantCategoryId(clickHistory);

  if (!basePosts.length) {
    return window.ALL_POSTS || [];
  }

  if (!dominantCategoryId || !currentStage) {
    return basePosts;
  }

  const dominantPosts = getPostsByCategory(dominantCategoryId);
  const dominantWeight = currentStage.dominantWeight || 0;

  const repeatedDominantPosts = [];
  const repeatAmount = Math.round(dominantWeight * 12);

  for (let i = 0; i < repeatAmount; i += 1) {
    repeatedDominantPosts.push(...dominantPosts);
  }

  return [...basePosts, ...repeatedDominantPosts];
}

function createFeedPosts({
  selectedCategoryIds = [],
  clickHistory = [],
  clickCount = 0,
  amount = 24,
} = {}) {
  const postPool = buildPersonalisedPostPool({
    selectedCategoryIds,
    clickHistory,
    clickCount,
  });

  if (!postPool.length) return [];

  const generatedPosts = [];

  for (let i = 0; i < amount; i += 1) {
    const post = getRandomItem(postPool);

    if (post) {
      generatedPosts.push({
        ...post,
        feedInstanceId: `${post.id}-${i}-${Date.now()}`,
      });
    }
  }

  return generatedPosts;
}

/* =========================================
   Category button rendering
   ========================================= */

function renderCategoryChoices({
  container,
  selectedCategoryIds,
  onToggleCategory,
}) {
  if (!container) return;

  const categories = window.CONTENT_LIBRARY || [];

  container.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "category-choice";
    button.dataset.categoryId = category.id;
    button.setAttribute(
      "aria-pressed",
      String(selectedCategoryIds.includes(category.id)),
    );

    button.innerHTML = `
      <span class="category-choice-label">${category.label}</span>
      <span class="category-choice-description">${category.description}</span>
    `;

    button.addEventListener("click", () => {
      onToggleCategory(category.id);
    });

    container.appendChild(button);
  });
}

function updateCategoryChoiceState(selectedCategoryIds = []) {
  const buttons = getAll(".category-choice");

  buttons.forEach((button) => {
    const categoryId = button.dataset.categoryId;
    const isSelected = selectedCategoryIds.includes(categoryId);

    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  const setupHint = getElement("setupHint");
  const continueButton = getElement("continueButton");

  if (setupHint) {
    setupHint.textContent = selectedCategoryIds.length
      ? `${selectedCategoryIds.length} interest selected.`
      : "Choose at least one interest to continue.";
  }

  if (continueButton) {
    continueButton.disabled = selectedCategoryIds.length === 0;
  }
}

/* =========================================
   Bubble rendering
   ========================================= */

function createBubbleElement(post, onClick) {
  const button = document.createElement("button");

  button.type = "button";
  button.className = "feed-bubble";
  button.dataset.postId = post.id;
  button.dataset.categoryId = post.categoryId;
  button.dataset.topicId = post.topicId;
  button.setAttribute(
    "aria-label",
    `Open ${post.title} post from ${post.categoryLabel}`,
  );

  button.innerHTML = `
    <span class="bubble-image-layer">
      <img src="${post.image}" alt="" loading="lazy" />
    </span>

    <span class="bubble-gloss" aria-hidden="true"></span>

    <span class="bubble-text-layer">
      <span class="bubble-category">${post.categoryLabel}</span>
      <span class="bubble-title">${post.title}</span>
    </span>
  `;

  button.addEventListener("click", () => {
    onClick(post);
  });

  return button;
}

function renderBubbleFeed({ container, posts, onBubbleClick }) {
  if (!container) return;

  container.innerHTML = "";

  posts.forEach((post) => {
    const bubbleElement = createBubbleElement(post, onBubbleClick);
    container.appendChild(bubbleElement);
  });
}

/* =========================================
   Audio helpers
   ========================================= */

function playBubblePopSound() {
  const audio = getElement("bubblePopAudio");

  if (!audio) return;

  audio.currentTime = 0;

  const playPromise = audio.play();

  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      // Browser may block sound until user interaction.
    });
  }
}

/* =========================================
   Shared modal helpers
   Main popup content is now handled in main.js.
   These helpers only close/reset the modal safely.
   ========================================= */

function closePostModal() {
  const modal = getElement("postModal");
  const image = getElement("postImage");

  if (!modal) return;

  modal.classList.remove("is-active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (image) {
    image.src = "";
    image.alt = "";
  }
}

/* =========================================
   Ending helpers
   ========================================= */

function showEndingScreen() {
  closePostModal();
  showScreen("endingScreen");
}

function resetScrollPosition() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const bubbleFeed = getElement("bubbleFeed");

  if (bubbleFeed) {
    bubbleFeed.scrollTop = 0;
  }
}

/* =========================================
   Expose helpers globally
   ========================================= */

window.getElement = getElement;
window.getAll = getAll;
window.showScreen = showScreen;
window.setAppStage = setAppStage;

window.getRandomItem = getRandomItem;
window.shuffleArray = shuffleArray;
window.clampNumber = clampNumber;

window.getCurrentStage = getCurrentStage;
window.updateStageDisplay = updateStageDisplay;

window.getCategoryById = getCategoryById;
window.getActiveCategories = getActiveCategories;
window.getPostsFromCategories = getPostsFromCategories;
window.getPostsByCategory = getPostsByCategory;
window.getDominantCategoryId = getDominantCategoryId;

window.buildPersonalisedPostPool = buildPersonalisedPostPool;
window.createFeedPosts = createFeedPosts;

window.renderCategoryChoices = renderCategoryChoices;
window.updateCategoryChoiceState = updateCategoryChoiceState;

window.createBubbleElement = createBubbleElement;
window.renderBubbleFeed = renderBubbleFeed;

window.playBubblePopSound = playBubblePopSound;

window.closePostModal = closePostModal;

window.showEndingScreen = showEndingScreen;
window.resetScrollPosition = resetScrollPosition;

/* =========================================
   404: Self Not Found — main.js
   Main interaction flow for the prototype
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
     DOM references
     ========================================= */

  const app = getElement("app");

  const startButton = getElement("startButton");
  const continueButton = getElement("continueButton");
  const restartButton = getElement("restartButton");
  const exploreButton = getElement("exploreButton");
  const restartButtonFromExplore = getElement("restartButtonFromExplore");

  const categoryChoices = getElement("categoryChoices");
  const bubbleFeed = getElement("bubbleFeed");

  const exploreScreen = getElement("exploreScreen");
  const exploreTrack = getElement("exploreTrack");
  const exploreProgressLabel = getElement("exploreProgressLabel");
  const exploreProgressFill = getElement("exploreProgressFill");

  const postModal = getElement("postModal");
  const closePostButton = getElement("closePostButton");
  const postOverlay = getElement("postOverlay");

  const postImage = getElement("postImage");
  const postAvatar = getElement("postAvatar");
  const postAvatarInitial = getElement("postAvatarInitial");
  const postUsername = getElement("postUsername");
  const postCaptionUsername = getElement("postCaptionUsername");
  const postCategory = getElement("postCategory");
  const postTopic = getElement("postTopic");
  const postTitle = getElement("postTitle");
  const postCaption = getElement("postCaption");
  const postHashtags = getElement("postHashtags");
  const postCommentCount = getElement("postCommentCount");
  const postCommentsList = getElement("postCommentsList");
  const postLikeCount = getElement("postLikeCount");
  const postShareCount = getElement("postShareCount");
  const postSaveCount = getElement("postSaveCount");

  /* =========================================
     App state
     ========================================= */

  const state = {
    selectedCategoryIds: [],
    clickCount: 0,
    clickHistory: [],
    currentFeedPosts: [],
    exploreChapterIndex: 0,
    isExploreScrolling: false,
  };

  const totalClicksToEnding = window.APP_CONFIG?.totalClicksToEnding || 15;

  /* =========================================
     Social post helper data
     ========================================= */

  const accountNames = {
    food: ["@softbite.diary", "@cravebubble", "@forkedforyou"],
    gaming: ["@checkpoint.loop", "@pixelnest", "@questbubble"],
    sports: ["@matchdayglow", "@courtside.loop", "@sportbubble"],
    music: ["@soundloop.daily", "@playlistbloom", "@audiobubble"],
    tech: ["@futurefeed.lab", "@softtechdaily", "@clickcrafted"],
    travel: ["@postcard.loop", "@wanderbubble", "@smalltripdiary"],
    default: ["@bubblefeed", "@dailyglimpse", "@softscroll"],
  };

  const commentPool = [
    {
      user: "@mira.scrolls",
      text: "This is exactly the kind of post I would stop for.",
    },
    {
      user: "@tiny.algorithm",
      text: "The vibe is so specific but somehow comforting.",
    },
    {
      user: "@softclicker",
      text: "I keep getting more of these and honestly I’m not mad.",
    },
    {
      user: "@feedfriend",
      text: "Recommended keeps popping up on my page too.",
    },
    {
      user: "@savedbyaccident",
      text: "I opened one post like this and now my whole feed gets it.",
    },
    {
      user: "@quietlurker",
      text: "Not sure why this feels so made for me.",
    },
    {
      user: "@loopedagain",
      text: "Wait, I swear I just saw something like this earlier.",
    },
    {
      user: "@scrollhabit",
      text: "The more I look, the more the app keeps giving me this.",
    },
    {
      user: "@curatedmood",
      text: "This feels personal in a weirdly accurate way.",
    },
    {
      user: "@almostfamiliar",
      text: "I can’t tell if I found this or if it found me.",
    },
  ];

  /* =========================================
     Small text helpers
     ========================================= */

  function safeText(value, fallback = "") {
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }

    return fallback;
  }

  function normaliseLabel(value) {
    return safeText(value, "Bubble")
      .replace(/[-_]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function titleCase(value) {
    return normaliseLabel(value).replace(/\b\w/g, (letter) =>
      letter.toUpperCase(),
    );
  }

  function getPostCategoryId(post) {
    return (
      post?.categoryId ||
      post?.category ||
      post?.categoryName ||
      post?.type ||
      "default"
    );
  }

  function getPostTopic(post) {
    return (
      post?.topic ||
      post?.topicName ||
      post?.subtopic ||
      post?.tag ||
      post?.categoryName ||
      "Recommended"
    );
  }

  function getPostImage(post) {
    return post?.image || post?.imagePath || post?.src || "";
  }

  function getPostCaption(post) {
    return (
      post?.caption ||
      post?.description ||
      post?.body ||
      "A small moment picked for your feed, shaped by what you seem to enjoy."
    );
  }

  function getPostTitle(post) {
    return post?.title || titleCase(getPostTopic(post));
  }

  function pickFromList(list, seed = 0) {
    if (!Array.isArray(list) || !list.length) return "";

    const index = Math.abs(seed) % list.length;
    return list[index];
  }

  function getAccountName(post) {
    if (post?.username) return post.username;

    const categoryId = getPostCategoryId(post).toLowerCase();
    const possibleNames = accountNames[categoryId] || accountNames.default;

    return pickFromList(
      possibleNames,
      state.clickCount + getPostTitle(post).length,
    );
  }

  function getAvatarInitial(username) {
    const cleanName = safeText(username, "@b").replace("@", "").trim();

    return cleanName.charAt(0).toUpperCase() || "B";
  }

  function buildHashtags(post) {
    const category = normaliseLabel(getPostCategoryId(post))
      .toLowerCase()
      .replace(/\s+/g, "");

    const topic = normaliseLabel(getPostTopic(post))
      .toLowerCase()
      .replace(/\s+/g, "");

    return `#${category} #${topic} #foryou #bubblefeed`;
  }

  function buildEngagementStats(post) {
    const titleSeed = getPostTitle(post).length;
    const topicSeed = getPostTopic(post).length;
    const clickSeed = state.clickCount + 1;

    return {
      likes: 120 + clickSeed * 47 + titleSeed * 9,
      shares: 8 + clickSeed * 6 + topicSeed,
      saves: 23 + clickSeed * 11 + Math.round(titleSeed / 2),
    };
  }

  function createSeedFromText(value) {
    return safeText(value, "bubble")
      .split("")
      .reduce((seed, character) => {
        return seed + character.charCodeAt(0);
      }, 0);
  }

  function getRandomisedComments(post, amount = 4) {
    const seed =
      createSeedFromText(
        `${post?.id}-${getPostTitle(post)}-${state.clickCount}`,
      ) + state.clickHistory.length;

    const shuffledComments = [...commentPool].sort((a, b) => {
      const aSeed = createSeedFromText(a.user + a.text) + seed;
      const bSeed = createSeedFromText(b.user + b.text) + seed;

      return (aSeed % 17) - (bSeed % 17);
    });

    return shuffledComments.slice(0, amount);
  }

  function buildComments(post) {
    return getRandomisedComments(post, 4);
  }

  /* =========================================
     Category selection
     ========================================= */

  function toggleCategory(categoryId) {
    const isAlreadySelected = state.selectedCategoryIds.includes(categoryId);

    if (isAlreadySelected) {
      state.selectedCategoryIds = state.selectedCategoryIds.filter(
        (id) => id !== categoryId,
      );
    } else {
      state.selectedCategoryIds.push(categoryId);
    }

    updateCategoryChoiceState(state.selectedCategoryIds);
  }

  function setupCategoryChoices() {
    renderCategoryChoices({
      container: categoryChoices,
      selectedCategoryIds: state.selectedCategoryIds,
      onToggleCategory: toggleCategory,
    });

    updateCategoryChoiceState(state.selectedCategoryIds);
  }

  /* =========================================
     Feed generation
     ========================================= */

  function refreshFeed() {
    state.currentFeedPosts = createFeedPosts({
      selectedCategoryIds: state.selectedCategoryIds,
      clickHistory: state.clickHistory,
      clickCount: state.clickCount,
      amount: 30,
    });

    renderBubbleFeed({
      container: bubbleFeed,
      posts: state.currentFeedPosts,
      onBubbleClick: handleBubbleClick,
    });

    applyBubbleAesthetic(bubbleFeed);
    applyLateStageFeedPressure();
  }

  function enterFeed() {
    if (!state.selectedCategoryIds.length) return;

    state.clickCount = 0;
    state.clickHistory = [];

    updateStageDisplay(state.clickCount);
    applyStageAesthetic(state.clickCount);
    updateAtmosphereVariables(state.clickCount);
    applyLateStageFeedPressure();

    refreshFeed();
    resetScrollPosition();

    showScreen("feedScreen");
  }

  /* =========================================
     Hidden progression / subtle breakdown
     ========================================= */

  function applyLateStageFeedPressure() {
    if (!app) return;

    app.classList.remove(
      "stage-pressure-soft",
      "stage-pressure-medium",
      "stage-pressure-heavy",
    );

    if (state.clickCount >= 13) {
      app.classList.add("stage-pressure-heavy");
    } else if (state.clickCount >= 10) {
      app.classList.add("stage-pressure-medium");
    } else if (state.clickCount >= 6) {
      app.classList.add("stage-pressure-soft");
    }
  }

  /* =========================================
     Bubble click behaviour
     ========================================= */

  function handleBubbleClick(post) {
    if (!post) return;

    const clickedBubble = document.querySelector(
      `.feed-bubble[data-post-id="${post.id}"]`,
    );

    pulseClickedBubble(clickedBubble);
    playBubblePopSound();

    state.clickCount += 1;
    state.clickHistory.push(post);

    updateStageDisplay(state.clickCount);
    applyStageAesthetic(state.clickCount);
    updateAtmosphereVariables(state.clickCount);
    applyLateStageFeedPressure();

    openPostModal(post);

    if (state.clickCount >= totalClicksToEnding) {
      window.setTimeout(() => {
        closePostModal();
        randomiseEndingGlitch();
        showEndingScreen();
      }, 650);

      return;
    }

    window.setTimeout(() => {
      refreshFeed();
    }, 220);
  }

  /* =========================================
     Expanded post modal
     ========================================= */

  function openPostModal(post) {
    if (!postModal || !post) return;

    const image = getPostImage(post);
    const username = getAccountName(post);
    const category = titleCase(getPostCategoryId(post));
    const topic = titleCase(getPostTopic(post));
    const title = getPostTitle(post);
    const caption = getPostCaption(post);
    const hashtags = buildHashtags(post);
    const stats = buildEngagementStats(post);
    const comments = buildComments(post);

    if (postImage) {
      postImage.src = image;
      postImage.alt = title;
    }

    if (postAvatar) {
      postAvatar.dataset.category = getPostCategoryId(post);
    }

    if (postAvatarInitial) {
      postAvatarInitial.textContent = getAvatarInitial(username);
    }

    if (postUsername) {
      postUsername.textContent = username;
    }

    if (postCaptionUsername) {
      postCaptionUsername.textContent = username;
    }

    if (postCategory) {
      postCategory.textContent = category;
    }

    if (postTopic) {
      postTopic.textContent = topic;
    }

    if (postTitle) {
      postTitle.textContent = title;
    }

    if (postCaption) {
      postCaption.textContent = caption;
    }

    if (postHashtags) {
      postHashtags.textContent = hashtags;
    }

    if (postCommentCount) {
      postCommentCount.textContent = `${comments.length} visible`;
    }

    if (postCommentsList) {
      postCommentsList.innerHTML = comments
        .map(
          (comment) => `
            <article class="post-comment">
              <p>
                <strong>${comment.user}</strong>
                <span>${comment.text}</span>
              </p>
            </article>
          `,
        )
        .join("");
    }

    if (postLikeCount) {
      postLikeCount.textContent = stats.likes.toLocaleString();
    }

    if (postShareCount) {
      postShareCount.textContent = stats.shares.toLocaleString();
    }

    if (postSaveCount) {
      postSaveCount.textContent = stats.saves.toLocaleString();
    }

    postModal.classList.add("is-active");
    postModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closePostModal() {
    if (!postModal) return;

    postModal.classList.remove("is-active");
    postModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  function setupModalControls() {
    if (closePostButton) {
      closePostButton.addEventListener("click", closePostModal);
    }

    if (postOverlay) {
      postOverlay.addEventListener("click", closePostModal);
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closePostModal();
      }
    });
  }

  /* =========================================
     Explore screen / chapter-by-chapter scrolling
     ========================================= */

  function getExploreChapters() {
    if (!exploreTrack) return [];

    return Array.from(exploreTrack.querySelectorAll(".explore-chapter"));
  }

  function updateExploreProgress() {
    const chapters = getExploreChapters();
    const totalChapters = chapters.length || 1;
    const currentNumber = state.exploreChapterIndex + 1;
    const progressPercent = (currentNumber / totalChapters) * 100;

    if (exploreProgressLabel) {
      exploreProgressLabel.textContent = `${String(currentNumber).padStart(
        2,
        "0",
      )} / ${String(totalChapters).padStart(2, "0")}`;
    }

    if (exploreProgressFill) {
      exploreProgressFill.style.width = `${progressPercent}%`;
    }
  }

  function goToExploreChapter(index) {
    const chapters = getExploreChapters();

    if (!exploreTrack || !chapters.length) return;

    const maxIndex = chapters.length - 1;
    const nextIndex = Math.max(0, Math.min(index, maxIndex));
    const targetChapter = chapters[nextIndex];

    state.exploreChapterIndex = nextIndex;
    updateExploreProgress();

    targetChapter.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }

  function openExploreScreen() {
    closePostModal();

    state.exploreChapterIndex = 0;
    showScreen("exploreScreen");

    window.setTimeout(() => {
      goToExploreChapter(0);
    }, 60);
  }

  function handleExploreWheel(event) {
    const isExploreActive =
      exploreScreen && exploreScreen.classList.contains("is-active");

    if (!isExploreActive) return;

    event.preventDefault();

    if (state.isExploreScrolling) return;

    const scrollDirection = event.deltaY > 0 || event.deltaX > 0 ? 1 : -1;
    const chapters = getExploreChapters();
    const nextIndex = state.exploreChapterIndex + scrollDirection;

    if (nextIndex < 0 || nextIndex >= chapters.length) return;

    state.isExploreScrolling = true;
    goToExploreChapter(nextIndex);

    window.setTimeout(() => {
      state.isExploreScrolling = false;
    }, 760);
  }

  function handleExploreKeydown(event) {
    const isExploreActive =
      exploreScreen && exploreScreen.classList.contains("is-active");

    if (!isExploreActive) return;

    if (
      event.key === "ArrowRight" ||
      event.key === "ArrowDown" ||
      event.key === "PageDown"
    ) {
      event.preventDefault();
      goToExploreChapter(state.exploreChapterIndex + 1);
    }

    if (
      event.key === "ArrowLeft" ||
      event.key === "ArrowUp" ||
      event.key === "PageUp"
    ) {
      event.preventDefault();
      goToExploreChapter(state.exploreChapterIndex - 1);
    }
  }

  function setupExploreControls() {
    if (exploreButton) {
      exploreButton.addEventListener("click", openExploreScreen);
    }

    if (restartButtonFromExplore) {
      restartButtonFromExplore.addEventListener("click", restartExperience);
    }

    if (exploreScreen) {
      exploreScreen.addEventListener("wheel", handleExploreWheel, {
        passive: false,
      });
    }

    document.addEventListener("keydown", handleExploreKeydown);
    updateExploreProgress();
  }

  /* =========================================
     Screen controls
     ========================================= */

  function setupScreenControls() {
    if (startButton) {
      startButton.addEventListener("click", () => {
        showScreen("setupScreen");
      });
    }

    if (continueButton) {
      continueButton.addEventListener("click", enterFeed);
    }

    if (restartButton) {
      restartButton.addEventListener("click", restartExperience);
    }
  }

  function restartExperience() {
    state.selectedCategoryIds = [];
    state.clickCount = 0;
    state.clickHistory = [];
    state.currentFeedPosts = [];
    state.exploreChapterIndex = 0;
    state.isExploreScrolling = false;

    closePostModal();

    if (exploreTrack) {
      exploreTrack.scrollLeft = 0;
    }

    updateStageDisplay(state.clickCount);
    applyStageAesthetic(state.clickCount);
    updateAtmosphereVariables(state.clickCount);
    applyLateStageFeedPressure();
    updateExploreProgress();

    setupCategoryChoices();
    resetScrollPosition();

    showScreen("landingScreen");
  }

  /* =========================================
     Asset loading helpers
     ========================================= */

  function warmUpAudio() {
    const audio = getElement("bubblePopAudio");

    if (!audio) return;

    audio.volume = 0.65;
    audio.load();
  }

  function checkContentLibrary() {
    const hasPosts = Array.isArray(window.ALL_POSTS) && window.ALL_POSTS.length;

    if (!hasPosts) {
      console.warn(
        "No posts found. Check data.js and make sure CONTENT_LIBRARY is loading correctly.",
      );
    }
  }

  /* =========================================
     Initialisation
     ========================================= */

  function init() {
    checkContentLibrary();
    warmUpAudio();

    setupCategoryChoices();
    setupScreenControls();
    setupExploreControls();
    setupModalControls();

    updateStageDisplay(state.clickCount);
    applyStageAesthetic(state.clickCount);
    updateAtmosphereVariables(state.clickCount);
    applyLateStageFeedPressure();

    showScreen("landingScreen");
  }

  init();
});

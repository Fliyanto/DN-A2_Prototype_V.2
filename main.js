/* =========================================
   404: Self Not Found — main.js
   Main interaction flow for the prototype
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
     DOM references
     ========================================= */

  const startButton = getElement("startButton");
  const continueButton = getElement("continueButton");
  const restartButton = getElement("restartButton");

  const categoryChoices = getElement("categoryChoices");
  const bubbleFeed = getElement("bubbleFeed");

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
  };

  const totalClicksToEnding = window.APP_CONFIG?.totalClicksToEnding || 15;

  /* =========================================
     Social post helper data
     These make the popup feel more alive without
     revealing the hidden 15-click structure too early.
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

  const baseComments = [
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
  ];

  const narrowedComments = [
    {
      user: "@sameagainpls",
      text: "Wait, my feed has been showing this kind of thing all day.",
    },
    {
      user: "@loopedinside",
      text: "It feels personal, but also weirdly repetitive.",
    },
    {
      user: "@curatedmood",
      text: "The app really knows what you like now.",
    },
  ];

  const lateStageComments = [
    {
      user: "@onlythisnow",
      text: "Is anyone else seeing the same topic again and again?",
    },
    {
      user: "@feedmirror",
      text: "It’s like the feed is getting smaller every time I click.",
    },
    {
      user: "@almostme",
      text: "This feels less like discovery and more like being boxed in.",
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

  function getCommentSet() {
    if (state.clickCount >= 13) {
      return lateStageComments;
    }

    if (state.clickCount >= 8) {
      return narrowedComments;
    }

    return baseComments;
  }

  function buildComments(post) {
    const category = titleCase(getPostCategoryId(post));
    const topic = titleCase(getPostTopic(post));
    const selectedSet = getCommentSet();

    const specificComment = {
      user: "@feedfriend",
      text: `${topic} keeps popping up on my page too. The ${category} side of my feed is locked in.`,
    };

    return [specificComment, ...selectedSet];
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
  }

  function enterFeed() {
    if (!state.selectedCategoryIds.length) return;

    state.clickCount = 0;
    state.clickHistory = [];

    updateStageDisplay(state.clickCount);
    applyStageAesthetic(state.clickCount);
    updateAtmosphereVariables(state.clickCount);

    refreshFeed();
    resetScrollPosition();

    showScreen("feedScreen");
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

    openPostModal(post);

    if (state.clickCount >= totalClicksToEnding) {
      window.setTimeout(() => {
        randomiseEndingGlitch();
        showEndingScreen();
      }, 650);

      return;
    }

    // Rebuild the feed after each click so the page feels like
    // it is quietly learning from the user's behaviour.
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

    closePostModal();

    updateStageDisplay(state.clickCount);
    applyStageAesthetic(state.clickCount);
    updateAtmosphereVariables(state.clickCount);

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
    setupModalControls();

    updateStageDisplay(state.clickCount);
    applyStageAesthetic(state.clickCount);
    updateAtmosphereVariables(state.clickCount);

    showScreen("landingScreen");
  }

  init();
});

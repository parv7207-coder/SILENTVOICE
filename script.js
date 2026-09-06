// ── ALPHABET DATA ──
let alphabetData = [
  { letter: "A", emoji: "✊", hint: "Fist, thumb on side" },
  { letter: "B", emoji: "🖐️", hint: "Flat hand, thumb in" },
  { letter: "C", emoji: "🤏", hint: "Curved like letter C" },
  { letter: "D", emoji: "☝️", hint: "Index up, others curve" },
  { letter: "E", emoji: "🤙", hint: "Fingers bent down" },
  { letter: "F", emoji: "👌", hint: "OK sign shape" },
  { letter: "G", emoji: "👉", hint: "Point sideways" },
  { letter: "H", emoji: "🤞", hint: "Two fingers sideways" },
  { letter: "I", emoji: "🤙", hint: "Pinky up" },
  { letter: "J", emoji: "🤙", hint: "Pinky, draw J in air" },
  { letter: "K", emoji: "✌️", hint: "Two fingers up, spread" },
  { letter: "L", emoji: "🤙", hint: "L shape with thumb+index" },
  { letter: "M", emoji: "✊", hint: "3 fingers over thumb" },
  { letter: "N", emoji: "✊", hint: "2 fingers over thumb" },
  { letter: "O", emoji: "👌", hint: "All fingers form O" },
  { letter: "P", emoji: "👉", hint: "K shape, pointing down" },
  { letter: "Q", emoji: "👇", hint: "G shape, pointing down" },
  { letter: "R", emoji: "🤞", hint: "Crossed fingers" },
  { letter: "S", emoji: "✊", hint: "Fist, thumb over fingers" },
  { letter: "T", emoji: "✊", hint: "Thumb between fingers" },
  { letter: "U", emoji: "✌️", hint: "Two fingers up together" },
  { letter: "V", emoji: "✌️", hint: "Two fingers spread out" },
  { letter: "W", emoji: "🖐️", hint: "Three fingers spread" },
  { letter: "X", emoji: "☝️", hint: "Index finger hooked" },
  { letter: "Y", emoji: "🤙", hint: "Thumb and pinky out" },
  { letter: "Z", emoji: "☝️", hint: "Draw Z in the air" },
];

// ── NUMBERS DATA ──
let numbersData = [
  { label: "0", emoji: "👌", hint: "Fingers touch thumb forming O" },
  { label: "1", emoji: "☝️", hint: "Index finger points up" },
  { label: "2", emoji: "✌️", hint: "Index & middle fingers up" },
  { label: "3", emoji: "🤟", hint: "Thumb, index & middle up" },
  { label: "4", emoji: "🖐️", hint: "Four fingers up, thumb in" },
  { label: "5", emoji: "🖐️", hint: "All five fingers spread open" },
  { label: "6", emoji: "🤙", hint: "Pinky & thumb touch, others out" },
  { label: "7", emoji: "🤞", hint: "Middle & thumb touch, others out" },
  { label: "8", emoji: "🤌", hint: "Index & thumb touch, others out" },
  { label: "9", emoji: "👌", hint: "Index curls to touch thumb" },
];

// ── GREETINGS DATA ──
let greetingsData = [
  { label: "Hello",     emoji: "👋",  hint: "Flat hand waves from forehead outward" },
  { label: "Thank You", emoji: "🤲",  hint: "Flat hand moves from chin outward" },
  { label: "Please",    emoji: "🙏",  hint: "Flat hand circles on chest" },
  { label: "Sorry",     emoji: "✊",  hint: "Fist circles over heart" },
  { label: "Yes",       emoji: "✊",  hint: "Fist nods up and down like a head" },
  { label: "No",        emoji: "✌️", hint: "Index & middle snap to thumb" },
  { label: "Good",      emoji: "👍",  hint: "Flat hand from chin moves forward" },
  { label: "Bad",       emoji: "👎",  hint: "Flat hand from chin flips downward" },
  { label: "Help",      emoji: "🤝",  hint: "Fist on flat palm, both rise up" },
  { label: "More",      emoji: "🤌",  hint: "Flat O shapes tap together" },
  { label: "Stop",      emoji: "🖐️", hint: "Flat hand chops down on palm" },
  { label: "Wait",      emoji: "🖖",  hint: "Spread fingers wiggle, palm facing out" },
];

let simLetters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
];
let currentSimIndex = 0;
let progressInterval = null;
let isDarkMode = false;

// ── ACTIVE PRACTICE TAB ──
let activePracticeTab = "alphabets";

// ── BUILD ALPHABET GRID ──
function buildAlphabetGrid(filter) {
  let grid = document.getElementById("alphabetGrid");
  grid.innerHTML = "";

  let filtered = alphabetData.filter(function (item) {
    return true;
  });

  filtered.forEach(function (item) {
    let card = document.createElement("div");
    card.className = "alpha-card";
    card.innerHTML =
      '<span class="alpha-emoji">' + item.emoji + "</span>" +
      '<div class="alpha-letter">' + item.letter + "</div>" +
      '<div class="alpha-hint">' + item.hint + "</div>";
    card.onclick = function () {
      showSignDetail(
        item.emoji,
        "Letter: " + item.letter,
        "Hand shape: " + item.hint +
          ". Practice this sign in front of your camera. In the full app, AI will detect your gesture and give instant feedback!"
      );
    };
    grid.appendChild(card);
  });
}

// ── BUILD NUMBERS GRID ──
function buildNumbersGrid() {
  let grid = document.getElementById("numbersGrid");
  if (!grid) return;
  grid.innerHTML = "";
  numbersData.forEach(function (item) {
    let card = document.createElement("div");
    card.className = "alpha-card";
    card.innerHTML =
      '<span class="alpha-emoji">' + item.emoji + "</span>" +
      '<div class="alpha-letter">' + item.label + "</div>" +
      '<div class="alpha-hint">' + item.hint + "</div>";
    card.onclick = function () {
      showSignDetail(
        item.emoji,
        "Number: " + item.label,
        "Hand shape: " + item.hint +
          ". Practice this sign in front of your camera. In the full app, AI will detect your gesture and give instant feedback!"
      );
    };
    grid.appendChild(card);
  });
}

// ── BUILD GREETINGS GRID ──
function buildGreetingsGrid() {
  let grid = document.getElementById("greetingsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  greetingsData.forEach(function (item) {
    let card = document.createElement("div");
    card.className = "alpha-card";
    card.innerHTML =
      '<span class="alpha-emoji">' + item.emoji + "</span>" +
      '<div class="alpha-letter" style="font-size:0.75rem">' + item.label + "</div>" +
      '<div class="alpha-hint">' + item.hint + "</div>";
    card.onclick = function () {
      showSignDetail(
        item.emoji,
        item.label,
        "How to sign: " + item.hint +
          ". Practice this in front of your camera. In the full app, AI will detect your gesture and give instant feedback!"
      );
    };
    grid.appendChild(card);
  });
}

// ── SWITCH PRACTICE TAB ──
function switchPracticeTab(tab, btn) {
  activePracticeTab = tab;

  document.querySelectorAll(".practice-tab-btn").forEach(function (b) {
    b.classList.remove("active-tab-btn");
  });
  btn.classList.add("active-tab-btn");

  document.getElementById("alphabetGrid").style.display = "none";
  document.getElementById("numbersGrid").style.display = "none";
  document.getElementById("greetingsGrid").style.display = "none";

  if (tab === "alphabets") {
    document.getElementById("alphabetGrid").style.display = "grid";
  } else if (tab === "numbers") {
    document.getElementById("numbersGrid").style.display = "grid";
    buildNumbersGrid();
  } else if (tab === "greetings") {
    document.getElementById("greetingsGrid").style.display = "grid";
    buildGreetingsGrid();
  }
}

// ── SHARED SIGN DETAIL MODAL ──
function showSignDetail(icon, title, desc) {
  document.getElementById("modalIcon").textContent = icon;
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDesc").textContent = desc;
  document.getElementById("modalOverlay").classList.add("open");
}

// ── SHOW ALPHA DETAIL (legacy, kept for compatibility) ──
function showAlphaDetail(item) {
  showSignDetail(
    item.emoji,
    "Letter: " + item.letter,
    "Hand shape: " + item.hint +
      ". Practice this sign in front of your camera. In the full app, AI will detect your gesture and give instant feedback!"
  );
}

// ── LESSON MODAL ──
function openLesson(title, desc, icon, targetTab) {
  closeModal();
  scrollToSection("practice");

  if (targetTab) {
    let tabs = document.querySelectorAll(".practice-tab-btn");
    tabs.forEach(function(btn) {
      if (btn.textContent.trim().toLowerCase().includes(targetTab)) {
        btn.click();
      }
    });
  }
}

// ── LOCKED LESSON ──
function showLockedMsg() {
  document.getElementById("modalIcon").textContent = "😊";
  document.getElementById("modalTitle").textContent = "Emotions & Feelings — Coming Soon!";
  document.getElementById("modalDesc").textContent =
    "We are working on signs for Happy, Sad, Angry, Excited, Tired, and many more emotional expressions. Stay tuned!";
  document.getElementById("modalOverlay").classList.add("open");
}

// ── CLOSE MODAL ──
function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
}

// ── SCROLL TO SECTION ──
function scrollToSection(id) {
  let el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// ── TRANSLATOR ──
function translateToSign() {
  let input = document.getElementById("transInput").value.trim();
  let output = document.getElementById("transOutput");
  let note = document.getElementById("transNote");

  if (input === "") {
    output.innerHTML = '<p class="trans-placeholder">Please type something first.</p>';
    note.textContent = "";
    return;
  }

  let cleaned = input.toUpperCase().replace(/[^A-Z ]/g, "");
  let chars = cleaned.split("");

  if (chars.length === 0) {
    output.innerHTML = '<p class="trans-placeholder">No valid letters found. Use A–Z only.</p>';
    note.textContent = "";
    return;
  }

  output.innerHTML = "";
  let skipped = 0;

  chars.forEach(function (ch) {
    if (ch === " ") {
      let spacer = document.createElement("div");
      spacer.style.width = "100%";
      spacer.style.height = "0";
      output.appendChild(spacer);

      let spaceChip = document.createElement("div");
      spaceChip.className = "gesture-chip";
      spaceChip.innerHTML =
        '<span class="chip-emoji">⎵</span>' +
        '<span class="chip-letter">SPC</span>';
      output.appendChild(spaceChip);
      return;
    }

    let found = alphabetData.find(function (item) {
      return item.letter === ch;
    });

    if (found) {
      let chip = document.createElement("div");
      chip.className = "gesture-chip";
      chip.innerHTML =
        '<span class="chip-emoji">' + found.emoji + "</span>" +
        '<span class="chip-letter">' + found.letter + "</span>" +
        '<span class="chip-hint">' + found.hint + "</span>";
      chip.title = found.hint;
      output.appendChild(chip);
    } else {
      skipped++;
    }
  });

  let total = chars.filter(function (c) {
    return c !== " ";
  }).length;
  note.textContent =
    "Showing " + (total - skipped) + ' gesture(s) for: "' + input + '"';
}

// ── CLEAR TRANSLATOR ──
function clearTranslator() {
  document.getElementById("transInput").value = "";
  document.getElementById("transOutput").innerHTML =
    '<p class="trans-placeholder">Your gesture sequence will appear here...</p>';
  document.getElementById("transNote").textContent = "";
}

// ── SIMULATOR ──
function nextSimLetter() {
  currentSimIndex = (currentSimIndex + 1) % simLetters.length;
  showSimLetter();
}

function showSimLetter() {
  let letter = simLetters[currentSimIndex];
  document.getElementById("simLetter").textContent = letter;
  document.getElementById("simHint").textContent = "Detecting gesture...";
  document.getElementById("progressBar").style.width = "0%";
  clearInterval(progressInterval);
  let width = 0;
  progressInterval = setInterval(function () {
    width += 3;
    document.getElementById("progressBar").style.width = width + "%";
    if (width >= 100) {
      clearInterval(progressInterval);
      let score = Math.floor(Math.random() * 10) + 90;
      document.getElementById("simHint").textContent =
        "✅ Confidence: " + score + "%";
    }
  }, 50);
}

// ── DARK MODE ──
function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  let body = document.body;
  let btn = document.getElementById("darkToggle");
  let sheet = document.getElementById("darkModeSheet");

  if (isDarkMode) {
    body.classList.add("dark");
    sheet.setAttribute("href", "darkmode.css");
    btn.textContent = "☀️ Light Mode";
  } else {
    body.classList.remove("dark");
    sheet.setAttribute("href", "");
    btn.textContent = "🌙 Dark Mode";
  }
}

// ── ESC CLOSES MODAL ──
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// ── INIT ──
buildAlphabetGrid("all");
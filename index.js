let home = document.getElementById("homeOutput");
let guest = document.getElementById("guestOutput");
const themeIcon = document.getElementById("theme-icon");
const gameHistory = document.getElementById("gameHistory");
const resetButton = document.getElementById("reset");

function addHomePoints(point) {
  let points = Number(home.textContent) + Number(point);
  home.textContent = points;
  localStorage.setItem("homeScore", points);
}

function addGuestPoints(point) {
  let points = Number(guest.textContent) + Number(point);
  guest.textContent = points;
  localStorage.setItem("guestScore", points);
}

function loadScores() {
  const savedHomeScore = localStorage.getItem("homeScore");
  const savedGuestScore = localStorage.getItem("guestScore");

  home.textContent = savedHomeScore !== null ? savedHomeScore : 0;
  guest.textContent = savedGuestScore !== null ? savedGuestScore : 0;
}

loadScores();

//theme switcher
const toggleButton = document.getElementById("toggle-theme");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("light-theme"); // switch class light-theme
  body.classList.toggle("dark-theme"); //  switch class dark-theme

  if (body.classList.contains("light-theme")) {
    themeIcon.textContent = "🌞";
  } else {
    themeIcon.textContent = "🌙";
  }
});

//save history
function loadGameHistory() {
  const history = JSON.parse(localStorage.getItem("gameHistory")) || [];
  gameHistory.innerHTML = "";
  history.forEach((game, index) => {
    const li = document.createElement("li");
    li.textContent = `Game ${index + 1}: Home ${game.home} - Away ${
      game.guest
    }`;
    gameHistory.appendChild(li);
  });
}

function saveGameToHistory(homeScore, guestScore) {
  const history = JSON.parse(localStorage.getItem("gameHistory")) || [];
  history.push({ home: homeScore, guest: guestScore });
  localStorage.setItem("gameHistory", JSON.stringify(history));
  loadGameHistory();
}

resetButton.addEventListener("click", () => {
  const homeScore = Number(home.textContent);
  const guestScore = Number(guest.textContent);

  // Сохранить текущий счёт в истории
  saveGameToHistory(homeScore, guestScore);

  // Сбросить счёт до 0:0
  home.textContent = 0;
  guest.textContent = 0;

  // Обновить localStorage
  localStorage.setItem("homeScore", 0);
  localStorage.setItem("guestScore", 0);
});

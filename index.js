let home = document.getElementById("homeOutput");
let guest = document.getElementById("guestOutput");

function addPoints(teamElement, points) {
  teamElement.textContent = Number(teamElement.textContent) + Number(points);
}

function addOneHome() {
  addPoints(home, 1);
}
function addTwoHome() {
  addPoints(home, 2);
}
function addThreeHome() {
  addPoints(home, 3);
}

function addOneGuest() {
  addPoints(guest, 1);
}
function addTwoGuest() {
  addPoints(guest, 2);
}
function addThreeGuest() {
  addPoints(guest, 3);
}

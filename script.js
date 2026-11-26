const playerForm = document.querySelector("#player-form");
const playerNameInput = document.querySelector("#player-name");
const playerList = document.querySelector("#player-list");
const playerCount = document.querySelector("#player-count");
const emptyState = document.querySelector("#empty-state");

function updateRoster() {
  const totalPlayers = playerList.querySelectorAll(".player-item").length;
  playerCount.textContent = `${totalPlayers} ${totalPlayers === 1 ? "player" : "players"}`;
  emptyState.hidden = totalPlayers > 0;
}

playerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = playerNameInput.value.trim();
  if (!name) {
    playerNameInput.focus();
    return;
  }

  const playerItem = document.createElement("li");
  playerItem.className = "player-item";

  const avatar = document.createElement("span");
  avatar.className = "player-avatar";
  avatar.setAttribute("aria-hidden", "true");
  avatar.textContent = name.charAt(0).toUpperCase();

  const playerLabel = document.createElement("span");
  playerLabel.textContent = name;

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "remove-player";
  removeButton.textContent = "Remove";
  removeButton.setAttribute("aria-label", `Remove ${name}`);

  playerItem.append(avatar, playerLabel, removeButton);
  playerList.append(playerItem);
  playerForm.reset();
  playerNameInput.focus();
  updateRoster();
});

playerList.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) {
    return;
  }

  const removeButton = event.target.closest(".remove-player");
  if (!removeButton) {
    return;
  }

  removeButton.closest(".player-item").remove();
  updateRoster();
});

updateRoster();
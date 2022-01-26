const gameTable = document.querySelector(".game-table");
let playerIndex = 207;
let width = 18;
let direction = -1;
let startGame;
let changeDirection = false;
let clearEnemies = [];
for (let i = 0; i < 216; i++) {
  const gridDiv = document.createElement("div");
  gameTable.appendChild(gridDiv);
}

const gridDiv = Array.from(document.querySelectorAll(".game-table div"));
const enemies = [
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 39, 40, 41, 42, 43,
  44, 45, 46, 47, 48, 49, 50, 51, 52,
  // 57,58,59,60,61,62,63,64,65,66,67,68,69,70
];

function render() {
  for (let i = 0; i < enemies.length; i++) {
    if (!clearEnemies.includes(i)) {
      gridDiv[enemies[i]].classList.add("nemesis");
    }
  }
}

function deRender() {
  for (let i = 0; i < enemies.length; i++) {
    gridDiv[enemies[i]].classList.remove("nemesis");
  }
}

gridDiv[playerIndex].classList.add("player");
const playerMoves = (e) => {
  gridDiv[playerIndex].classList.remove("player");
  switch (e.key) {
    case "ArrowLeft":
      if (playerIndex % width !== 0) playerIndex -= 1;
      break;
    case "ArrowRight":
      if (playerIndex % width < width - 1) playerIndex += 1;
      break;
  }
  gridDiv[playerIndex].classList.add("player");
};
document.addEventListener("keydown", playerMoves);

const alienMoves = (e) => {
  const leftBorder = enemies[0] % width === 0;
  const rightBorder = enemies[enemies.length - 1] % width === width - 1;
  deRender();
  if (rightBorder && changeDirection) {
    for (let i = 0; i < enemies.length; i++) {
      enemies[i] += width + 1;
      direction = -1;
      changeDirection = false;
    }
  }
  if (leftBorder && !changeDirection) {
    for (let i = 0; i < enemies.length; i++) {
      enemies[i] += width - 1;
      direction = +1;
      changeDirection = true;
    }
  }

  for (let i = 0; i < enemies.length; i++) {
    enemies[i] += direction;
  }
  render();
  if (gridDiv[playerIndex].classList.contains("nemesis", "player")) {
    gameTable.innerHTML= "Game Over";
    clearInterval(startGame);
  }
  for (let i = 0; i < enemies.length; i++) {}
};
startGame = setInterval(alienMoves, 500);

const shooting = (e) => {
  let bullet;
  let bulletIndex = playerIndex;

  const bulletBallistix = () => {
    gridDiv[bulletIndex].classList.remove("bullet");
    bulletIndex -= width;
    gridDiv[bulletIndex].classList.add("bullet");

    if (gridDiv[bulletIndex].classList.contains("nemesis")) {
      gridDiv[bulletIndex].classList.remove("bullet");
      gridDiv[bulletIndex].classList.remove("nemesis");
      gridDiv[bulletIndex].classList.add("explosion");
      setTimeout(
        () => gridDiv[bulletIndex].classList.remove("explosion"),
        1500
      );
      clearInterval(bullet);

      const clearEnemy = enemies.indexOf(bulletIndex);
      clearEnemies.push(clearEnemy);
      console.log(clearEnemies);
    }
  };
  switch (e.key) {
    case " ":
      bullet = setInterval(bulletBallistix, 150);
  }
};

document.addEventListener("keydown", shooting);

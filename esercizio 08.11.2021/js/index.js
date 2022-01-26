const myexercise = document.querySelector("#myExercise");
const cookieModal = document.querySelector("#modal-cookie");
const cookieButton = document.querySelector(".button-color");
const apeButton = document.querySelector(".ape-button");
const monkeyModal = document.querySelector("#killer");
const monkeyUl = document.querySelector("#monkey-ul");

setTimeout(() => (cookieModal.style.zIndex = 1), 1000);
cookieButton.addEventListener("click", () =>
  myexercise.removeChild(cookieModal)
);
const monkeyKiller = [];

const displayMonkey = () => {
  monkeysEquipe.forEach((monkey) => {
    monkeyKiller.push(monkey.name + " " + monkey.aka);
  });
};
displayMonkey();

let intervalLaunch;

let i = 0;
apeButton.addEventListener("click", () => {
  cookieModal.style.zIndex = -1;
  setTimeout(() => {
    monkeyModal.style.zIndex = 1;

    if (!intervalLaunch) {
      intervalLaunch = setInterval(() => {
        let list = document.createElement(`p`);
        let monkeyProfile = document.createTextNode(`${monkeyKiller[i]}`);
        list.appendChild(monkeyProfile);
        monkeyUl.appendChild(list);

        i++;
        stopIt();
      }, 1000);
    }
  }, 5000);
});

const stopIt = () => {
  if (i === 5) {
    clearInterval(intervalLaunch);
    intervalLaunch = null;
  }
};

const changeName = () => {
  solarSystem.forEach((planet) => {
    planet.name = planet.name.replace("Sun", "Sole");
    planet.name = planet.name.replace("Mercury", "Mercurio");
    planet.name = planet.name.replace("Venus", "Venere");
    planet.name = planet.name.replace("Earth", "Terra");
    planet.name = planet.name.replace("Mars", "Marte");
    planet.name = planet.name.replace("Jupiter", "Giove");
    planet.name = planet.name.replace("Saturn", "Saturno");
    planet.name = planet.name.replace("Uranus", "Urano");
    planet.name = planet.name.replace("Neptune", "Nettuno");
  });
};
changeName(solarSystem);
const finalRecall = solarSystem.map(changeName);
console.log(solarSystem);

const planetDiameter = (element, callback) => {
  const diameter = [];
  for (planet of element) {
    let rad = planet.radius;
    diameter.push(callback(rad));
  }
  console.log(diameter);
  return diameter;
};
const selectRadius = planetDiameter(solarSystem, (rad) => rad * 2);

// ESERCIZIO 1
const buttonDivOne = document.querySelector("#exercise-one");
const buttonOne = buttonDivOne.lastElementChild;

buttonOne.addEventListener("click",() => {
    let input =  prompt("inserisci Quello che vuoi!");
    document.querySelector(".input").innerHTML= input;
});



// ESERCIZIO 1 OPTIONAL
const buttonDivOneOpt = document.querySelector("#exercise-one-optional");
const buttonOneOpt = buttonDivOneOpt.lastElementChild;
const input = document.querySelector("#final-input");
const title = document.querySelector(".input-title");
buttonOneOpt.addEventListener("click", () => {
    title.textContent = input.value;
});

// ESERCIZIO 2

const buttonTwo = document.querySelector("#button-two")
const motherList = document.querySelector("#mother-list")

// buttonTwo.addEventListener("click", () => {
//     const creator = document.createElement("li");
//     const newContent = document.createTextNode("New List");
//     creator.appendChild(newContent)
//     motherList.appendChild(creator);
// });

buttonTwo.addEventListener("click", () => {
    const input = prompt("quello che vuoi");
   addToDo(input);
})

const addToDo = (event) => {
    const creator = document.createElement("li");
  const newContent = document.createTextNode(event);
    creator.appendChild(newContent)
     motherList.appendChild(creator);
};












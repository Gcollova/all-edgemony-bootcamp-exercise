// ESERCIZIO 1
const PI = 3.14;

trialsOne.onClick = function () {
  firstEx();
};

function firstEx(runCode) {
  console.log(PI);

  if (PI >= 3) {
    console.log(PI);
  }
}
// /ESERCIZIO 1

// ESERCIZIO 2

var favColour = "violet";
let monthsInAYear = 12;

trialsTwo.onClick = function () {secondEx();
};


function secondEx(runCode) {
    
  if (true) {
    var favColour = "violet";
    console.log("Il mio colore preferito è:", favColour);
  }

  console.log("Ci sono", monthsInAYear, "mesi in un anno.");

}
// /ESERCIZIO 2

// ESERCIZIO 3

trialsThree.onClick = function () {thirdEx();
};


function thirdEx(runCode) {
   

function makePizza(moreIngredients) {
    let theSecond = "Sugo di pomodoro freschissimo";
    
    console.log(theSecond + ", " + moreIngredients);
    return true; 
  }
  
  if (true) {
    makePizza("rucola, prosciutto crudo e scaglie di grana.");
    console.log("Il secondo ingrediente necessario: ", theSecond);
  }

}





// /ESERCIZIO3

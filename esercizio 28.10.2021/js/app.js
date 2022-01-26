let intervSet;

const changeColor = () => {
  if (!intervSet) {
    intervSet = setInterval(flashT, 1000);
  }
};


const paragraphStandard = document.querySelector("#circleP");

const flashT = () => {
  if (paragraphStandard.className === "changeColor") {
    paragraphStandard.className = "changeColorTwo";
  } else {
    paragraphStandard.className = "changeColor";
  }
};

paragraphStandard.addEventListener("load",changeColor())


document.addEventListener("keypress", (eventOne) => {
  if (eventOne.key === "d") {
    paragraphStandard.removeEventListener("load",changeColor())
    clearInterval(intervSet);
    
  }
  
},
{once:true});
// document.addEventListener("keypress", (event) => {
//   if (event.key === "Enter") {
//     clearInterval(intervSet);
//     intervSet = null;
//   } else if (event.key === " ") {
//     changeColor();
//   }
// });




// const sum = (numOne,numTwo) => numOne+numTwo;


const parsNum = [];
const buttonEq = document.querySelector("#equal");
buttonEq.addEventListener("click", (event) => {
    
    let input = prompt("inserisci 2 o più numeri da sommare divisi da una virgola!")
    let provNum = input.split(",");
    for (x of provNum){
        parsNum.push(parseInt(x))
        console.log(parsNum);
    }
    const add = (accumulator, a) => {
        return accumulator+a
    }
    const sum = parsNum.reduce(add,0);
    document.querySelector("#result").innerHTML= sum
    console.log(sum)
    
    
    
    
    
})

 


// const finalSum = () => {
//     let sum = 0;
//     for (let i=0 ; i < parsNum.lenght; i++) {
//         sum += parsNum[i];

//     }
//     console.log(sum);
// }


//   for(let calcolo of xxx){


//   }

  

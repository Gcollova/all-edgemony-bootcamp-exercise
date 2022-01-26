let operandSum = [];
let operandSub = [];
let operandX = [];
let operandDiv = [];


function operationSum(firstOperand) {  
  let input = [parseInt(firstOperand)];
  if (firstOperand === null || firstOperand === "" || isNaN(firstOperand)) {
    alert("inserisci un numero e \n assicurati che sia valido");
  } else {
    for (x of input){
      console.log(x);
    }
    operandSum.push(...input)
    document.getElementById("calculator").reset();
   

    
    
    
  }
}




function operationSub(firstOperand) {
  let input = [parseInt(firstOperand)];
  if (firstOperand === null || firstOperand === "" || isNaN(firstOperand)) {
    alert("inserisci un numero e \n assicurati che sia valido");
  } else {
    operandSub.push(parseInt(input))
    document.getElementById("calculator").reset();
    console.log(...operandSub);
    
  }
}
function operationX(firstOperand) {
  let input = [parseInt(firstOperand)];
  if (firstOperand === null || firstOperand === "" || isNaN(firstOperand)) {
    alert("inserisci un numero e \n assicurati che sia valido");
  } else {
    operandX.push(+parseInt(input))
    document.getElementById("calculator").reset();
    console.log(...operandX);
   
  }
}
function operationDiv(firstOperand) {
  let input = [parseInt(firstOperand)];
  if (firstOperand === null || firstOperand === "" || isNaN(firstOperand)) {
    alert("inserisci un numero e \n assicurati che sia valido");
  } else {
    operandDiv.push(parseInt(input))
    document.getElementById("calculator").reset();
    console.log(...operandDiv);
    

  }
}

function operationRes(sum,sub,div,mult) {
 
  let result =  0+sum-sub;
  console.log(result)
}








// function operationSub(firstOperand, secondOperand) {
//   let input = [parseInt(firstOperand),parseInt(secondOperand) ];
//   if (firstOperand === null || firstOperand === "" || isNaN(firstOperand)) {
//     alert("inserisci un numero e \n assicurati che sia valido");
//   } else {
//     if (
//       secondOperand === null ||
//       secondOperand === "" ||
//       isNaN(secondOperand)
//     ) {
//       alert("inserisci un numero e \n assicurati che sia valido");
//     } else {
      
//       summ(parseInt(firstOperand), parseInt(secondOperand));      
//     }
//   }
// }

// function summ(sub1,sub2){
 
// }

// inputE.onClick = function () {eraseAll(canc)};

// function eraseAll(canc) {
//   document.getElementById("calcDisplay").innerHTML = canc.splice();
//   console.log(canc)

// }

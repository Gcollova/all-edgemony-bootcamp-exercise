const monitor = document.querySelector("#monitor")
const buttonOperatorPlus = document.querySelector("#plus");
const buttonOperatorMin = document.querySelector("#min");
const buttonOperatorPer = document.querySelector("#per");
const buttonOperatorDiv = document.querySelector("#divide");
const buttonOperatorEq = document.querySelector("#equal");
const input = document.querySelector("#calc-input");
const inputNumber = [];
const monitorArr = [];



const buttonPlus = () => {
  if (monitorArr.length === 0 || buttonOperatorPlus.id === "plus") {
    buttonOperatorPlus.addEventListener('click',(event) =>{
      event.preventDefault();
      inputNumber.push(parseFloat(input.value));
      sum(inputNumber);
      monitor.textContent = monitorArr;      
      console.log("event 1")
      console.log(inputNumber)
    })
  } else {
    
    buttonOperatorPlus.addEventListener('click', (eventTwo) =>{
      eventTwo.preventDefault();
      inputNumber.push(parseFloat(input.value));
      sum(inputNumber);
      monitor.textContent = monitorArr;
      console.log("event 2")
    })

  }
  
}
buttonPlus();
const buttonMin = () => {
  if (monitorArr.length === 0) {
    buttonOperatorMin.addEventListener('click',(eventThree) =>{
      eventThree.preventDefault();
      inputNumber.push(parseFloat(input.value));
      sub(inputNumber);
      monitor.textContent = monitorArr;
      console.log("event 3")
    })
  } else {
    inputNumber.splice(0,999,monitorArr[0]);    
    buttonOperatorMin.addEventListener('click', (eventFour) =>{
      eventFour.preventDefault();
      inputNumber.push(parseFloat(input.value));
      sub(inputNumber);
      monitor.textContent = monitorArr;
      console.log("event 4")
    })

  }
  
}
buttonMin();



function sum(numbers){
  let sumTotal = 0;
  for(num of numbers){
    sumTotal = sumTotal + num
  }
  console.log(sumTotal)
  monitorArr.splice(0,1,sumTotal)    
  return sumTotal
}

function sub(numbers){
  let subTotal = numbers[0];
  for (i = 1; i < numbers.length; i++){
    subTotal -= numbers[i]
  }
  monitorArr.splice(0,1,subTotal)    
  return subTotal

}









const upBtn = document.querySelector('#up')
const downBtn = document.querySelector('#down')
const leftBtn = document.querySelector('#left')
const rightBtn = document.querySelector('#right')
const board = document.querySelector(".board")
const floor = document.querySelector(".floor")
const player = document.querySelector(".player")

let backgroundBoard = 0;
let floorMovements = 0
rightBtn.addEventListener("click", () =>{
    
    board.style.backgroundPositionX = `${backgroundBoard-=3}px`;
    floor.style.backgroundPositionX = `${floorMovements-=20}px`;
    player.classList.toggle('player-movement')
    setTimeout(() => {player.classList.toggle('player-movement')}, 200);
    player.classList.remove('backward')        
        
        
    
    

})
leftBtn.addEventListener("click", () =>{
    
    board.style.backgroundPositionX = `${backgroundBoard+=3}px`;
    floor.style.backgroundPositionX = `${floorMovements+=20}px`;
    player.classList.toggle('player-movement')
    player.classList.add('backward')

    setTimeout(() => {player.classList.toggle('player-movement')}, 200);
    

})
upBtn.addEventListener("click", () =>{
    
    player.classList.toggle('animate__bounce')
    setTimeout(() => {player.classList.toggle('animate__bounce')}, 1000);
    

})



document.onkeydown = arrowPress;
function arrowPress(event){
    if (event.keyCode === 39){
        board.style.backgroundPositionX = `${backgroundBoard-=3}px`;
        floor.style.backgroundPositionX = `${floorMovements-=20}px`;
        player.classList.toggle('player-movement')
        setTimeout(() => {player.classList.toggle('player-movement')}, 200);
        player.classList.remove('backward')   
    } else if (event.keyCode === 37){
        board.style.backgroundPositionX = `${backgroundBoard+=3}px`;
        floor.style.backgroundPositionX = `${floorMovements+=20}px`;
        player.classList.toggle('player-movement')
        player.classList.add('backward')

    setTimeout(() => {player.classList.toggle('player-movement')}, 200);

    }else if (event.keyCode === 38) {
        player.classList.toggle('animate__bounce')
        setTimeout(() => {player.classList.toggle('animate__bounce')}, 1000);

    }
}


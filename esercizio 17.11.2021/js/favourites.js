import { load } from "./data.js"
import { list } from "./list.js"
const favbtn = document.querySelector("#fav-modal")
const modal = document.querySelector("#favourites")
const closeModal = document.querySelector("#fav-close")

const header = document.querySelector("header")
const main = document.querySelector("main")
const footer = document.querySelector("footer")

const toggle = () => {
    
favbtn.addEventListener("click", () => {
    modal.classList.toggle("show");
    header.classList.toggle("hide")
    main.classList.toggle("hide")
    footer.classList.toggle("hide")
       
})
closeModal.addEventListener("click", () => {
    modal.classList.toggle("show")
    header.classList.toggle("hide")
    main.classList.toggle("hide")
    footer.classList.toggle("hide")
})

}

 

     
   
    
   


    


export{toggle,}

import {getProductsList} from "./data.js"
import {list} from "./list.js"
import {addToCart, check} from "./cart.js"
window.addEventListener("DOMContentLoaded", getProductsList)



const sidebar = document.querySelector(".left")
document.querySelector("#sidebar-btn").addEventListener("click", (e) =>{
    sidebar.classList.toggle("hidden-left")
    
})

const cart = document.querySelector(".right")
document.querySelector("#cart-btn").addEventListener("click", (e) => {
    cart.classList.toggle("hidden-right")
})


window.location.href = "#allproducts";

check()
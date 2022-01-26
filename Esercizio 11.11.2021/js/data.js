import { render, priceOrder } from "./render.js";
const API = "https://fakestoreapi.com/products";
let post$ = fetch(API)
    .then((response) => response.json()
    );   
    post$.then(data => render(data))
    post$.then((newData) => priceOrder(newData) ) 

    
    
 
    
export {API}

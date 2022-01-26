import{list} from "./list.js"
import {addToCart , check, dataParse} from "./cart.js";


const getProductsList = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();  
    
    list(data)
    addToCart(data)
    dataParse(data)
    

};

export {getProductsList}
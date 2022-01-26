import { list } from "./list.js";
import { search } from "./search.js";
import { toggle } from "./favourites.js";
import { add } from "./add.js";
import  {Edit} from "./edit.js"



const API = "https://edgemony-backend.herokuapp.com/movies";
const load = () => {
 let movies$ = fetch(API).then((response) => response.json());
    movies$.then((data) => list(data));
    movies$.then((newData) =>search(newData));
} 

const render = (container, content) => (container.innerHTML = content);
export {load, API, render,};
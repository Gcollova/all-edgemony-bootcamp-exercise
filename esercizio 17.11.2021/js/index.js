import { load, API, render,  } from "./data.js";
import { list } from "./list.js";
import { search } from "./search.js";
import {toggle} from "./favourites.js"
import { add } from "./add.js";
import {Edit} from "./edit.js"





document.addEventListener("DOMContentLoaded", load);
toggle();

const getId = () => parseInt(location.hash.split("-")[1]);

window.addEventListener("hashchange", () => {
  //console.log("hash has changed", location.hash);
  const destination = location.hash.split("-")[0];

  switch (destination) {
    case "#add":
      add();
      break;
    case "#view":
      View(getId());
      break;
    
    case "#home":
      load();
      break;
    case "#description":
      load();
      break;
  }
});



    
    




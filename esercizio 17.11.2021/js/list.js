import { load, API, render,  } from "./data.js";
import { search } from "./search.js";
import { Edit } from "./edit.js";

const main = document.querySelector("#table-content");
const mainUl = main.querySelector("ul");
const input = document.querySelector("#input");
const cart = [];


const list = (data) => {
  const mapped = data
    .map(
      (items) =>
        `<li>
    <div id="paragraph-div">
    <p><p>Title : ${items.title}</p>  <p>Year : ${items.year}</p>  <a id="description-trig" class ="${items.description}"href="#description">Description</a> </p>
    </div>
    <div>
    <img id="poster" src="${items.poster}" alt="">
    </div>
    
    <div id="div-button">
    <button id="fav-btn" value="${items.title}"> <img src="https://img.icons8.com/office/16/000000/add-to-favorites--v2.png"/> </button>
    <button id="modify-btn" value="${items.id}"> <img width="20" src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/64/000000/external-edit-user-interface-icongeek26-outline-colour-icongeek26.png"/> </button>
    <button id="delete-btn" value="${items.id}"><img src="https://img.icons8.com/office/16/000000/delete-sign.png"/></button>
    </div>
    </li>`
    )
    .join("");
        const container = document.querySelector("#container")
  render(container,mapped)
        const liDescription=mainUl.querySelectorAll("li")
        for(let li of liDescription){
            let div= li.querySelector("#paragraph-div")
            let a = div.querySelector("#description-trig")
            const header = document.querySelector("header")
            const main = document.querySelector("main")
            const footer = document.querySelector("footer")
            const btn = document.createElement("button");
            btn.id="des-close"
            btn.innerHTML="Chiudi"
            const modal = document.querySelector("#description")
            a.addEventListener("click",()=>{
                modal.classList.toggle("show")
                header.classList.toggle("hide")
                main.classList.toggle("hide")
                footer.classList.toggle("hide")
                
                modal.innerHTML = a.className
                modal.appendChild(btn)
            })
            
            btn.addEventListener("click", () =>{
                modal.classList.toggle("show")
                header.classList.toggle("hide")
                main.classList.toggle("hide")
                footer.classList.toggle("hide")
            })
            console.log(a)
        }
        
        
        
        
  const allBtns = mainUl.querySelectorAll("button");  
  const add = () => {
    for (let btn of allBtns) {
      btn.addEventListener("click", () => {
        if (btn.id === "fav-btn") {
          cart.push(btn.value);
          const divFav = document.createElement("div");
          divFav.innerHTML = cart.splice(0, 1);
          const btnDelete = document.createElement("button");
          btnDelete.value = btn.value;
          btnDelete.innerText = "X";
          divFav.className = btn.value;
          btnDelete.id = `${divFav.className}`;

          divFav.appendChild(btnDelete);
          favourites.appendChild(divFav);
          document
            .getElementById(`${btnDelete.id}`)
            .addEventListener("click", () => {
              if (btnDelete.value === divFav.className) {
                favourites.removeChild(divFav);
              }
            });
        } else if (btn.id === "delete-btn") {
          const deleteItem = (event) => {
            const id = btn.value;
            const filtered = data.filter((movie) => movie.id !== id);

            fetch(`${API}/${id}`, { method: "DELETE" })
              .then((response) => response.json())
              .then(() => list(filtered))
              .then(() => load())

            {
              once: true;
            }
          };
          deleteItem();
        } else if(btn.id === "modify-btn"){
            const id = btn.value
            Edit(id)
            
        }
    });
    }
  };

  add();
  return mapped
};


export { list };

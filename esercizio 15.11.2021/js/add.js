import { render, API } from "./utils.js";

const Add = () => {
  const container = document.querySelector("#container");
  render(
    container,
    `<div id="create">
            <h3>Aggiungi un nuova scheda</h3>
            <form id="create">
                <div class="row">
                    <label for ="title">Titolo</label>
                    <input type="text" id="title" name="title" />
                </div>                
                <div class="row">
                    <label for ="completed">Completed <input type="checkbox" id="completed" name="completed" /></label>
                    
                </div>
                <div class="row">
                    <label for ="expire">Scadenza</label>
                    <input type="date"  id="expire" name="expire" />
                </div>
                
                
                <button id="save">Save</button>
            </form>
        </div>`
  );
  const form = document.querySelector("#create");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const toDoList = {
      title: event.target.title.value,
      completed: event.target.completed.value,      
      expire: event.target.expire.value,
    };

    fetch(API, {
      method: "POST",
      headers:{
          "Content-Type":"application/json"

      },
      body: JSON.stringify(toDoList),

    });
  });
};
export { Add };

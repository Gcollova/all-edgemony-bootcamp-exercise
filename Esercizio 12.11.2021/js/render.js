import { getData, saveData } from "./data.js";
const update = (element) => {
  const id  = parseInt(element.target.id);
  const newData = getData().map((item) =>{
      if(item.id === id){
          return {...item, completed: !item.completed};
      } else {
          return item
      }
  });
  saveData(newData);
  render(newData);
};
export const render = (data) => {
    console.log(data)
  const todos = document.querySelector("#todos");
  const items = data.map(
    (item, index) =>
      `<li>
      <label for="firstchoice">
      <input name="firstchoice" type="checkbox" 
      ${item.completed ? "checked" : ""} id="${item.id}"> ${item.title}
      </label>
      </li>`
  );
  todos.innerHTML = items.join("");

  const lis = [...todos.querySelectorAll("li input")];
  lis.forEach((item) => {
    item.addEventListener("click", update);
  });
};

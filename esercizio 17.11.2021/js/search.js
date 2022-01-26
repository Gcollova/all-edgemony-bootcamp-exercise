import { load } from "./data.js";
import { list } from "./list.js";

const input = document.querySelector("#input");
const searchBtn = document.querySelector("#search-btn");


const search = (data) => {
    list(data)
  input.addEventListener("keyup", () => {
    let string = input.value;
    let filtered = data.filter((items) => {
      list(data);
      return items.title.toLowerCase().includes(string.toLowerCase());
    });

    list(filtered);
  });
};

export { search };

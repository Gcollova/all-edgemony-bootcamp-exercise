import { render } from "./render.js";
import { getData, saveData } from "./data.js";

const connectionCheck = () => {
  const isOnline = window.navigator.onLine;
  const connection = document.querySelector("#online");
  connection.innerHTML = isOnline ? "online" : "offline";
};
connectionCheck();



document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("online", connectionCheck);
  window.addEventListener("offline", connectionCheck);

  const API = "https://fakestoreapi.com/products";
  fetch(API)
    .then((response) => response.json())
    .then((data) => data.filter((item, index) => index < 20))
    .then((data) => saveData(data))
    .then(() => {
      render(getData());
    })
    
});

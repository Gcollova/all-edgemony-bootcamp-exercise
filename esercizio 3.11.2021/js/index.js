const q = (selector) => document.querySelector(selector);
const myButton = document.querySelector("#my-button");

document.addEventListener("DOMContentLoaded", () => {
  const form = q("#main-form");
  render(form, data);
});

const render = (container, items) => {
  const elements = items.map((element) => {
    if (element.completed) {
      return `<label for="search">  ${element.title} <input type="checkbox" checked /></label>`;
    } else {
      return `<label for="search">  ${element.title} <input type="checkbox"/></label> `;
    }
  });

  const output = elements.join(" ");
  container.innerHTML = output;
  startIt(elements,container);
};

const startIt = (inputOne, container)  => {
  myButton.addEventListener("click", () => {
    inputOne.pop("");
    const output = inputOne.join(" ");
    container.innerHTML = output;
  });

}
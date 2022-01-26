import { render } from "./utils.js";
const List = (data) => {
    const elements = data
    .map(item => `<li>
    <label for="firstchoice">
    <input name="firstchoice" type="checkbox" 
    ${item.completed ? "checked" : ""} id="${item.id}"> ${item.title}
    </label>
    </li>`)
    .join('');

    const container = document.querySelector("#container");
    render(container,`
        My to Do List
        <ul>${elements}</ul>
    `);
};
export {List};
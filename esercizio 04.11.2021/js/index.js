const q = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
  const form = q("#main-form");
  const input = q("#main-input");
  const list = q("#main-list");
  render(list, data);

  input.addEventListener("keyup", (event) => {
    event.preventDefault();
    const value = input.value.toLowerCase();
    const results = data.filter((element, index) => {
      return element.nome.toLowerCase().search(value) > -1;
    });
    render(list, results);   
    
  });
});

const render = (container, items) => {
  const elements = items.map(
    (element) =>
      // return element.name + "," + element.phone + "," + element.email;
      // return `${element.name}`, `${element.name}`, `${element.name}`;
      `<li>
        <h3>${element.nome}</h3>
          <p><strong>Email:</strong>${element.eMail}</p>
          <p><strong>Tel:</strong>${element.telefono}</p>
        </li>`
  );
  const content = elements.sort().join("");
  container.innerHTML = content;
};

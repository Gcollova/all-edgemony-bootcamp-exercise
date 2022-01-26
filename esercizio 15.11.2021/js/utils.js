const API = "https://edgemony-backend.herokuapp.com/todos";

/**
 * RENDER SOME CONTENT WITHIN A CONTAINER HTML TAG
 */
const render = (container, content) => (container.innerHTML = content);

export { API, render };


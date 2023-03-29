import { createHTML } from "./createHTML.js";
import { fetchPoliticians } from "./dataAccess.js";

const mainContainer = document.querySelector("#container");

// Fetch all of the database so that it's stored in application state, then regenerate html
const render = () => {
    fetchPoliticians()
    .then(() => console.log('politicians have been fetched'))
    .then(() => {
        mainContainer.innerHTML = createHTML()
    })
};

render();

// Listen for state changes and invoke render() when it does
mainContainer.addEventListener("stateChanged", customEvent => {
    render()
})

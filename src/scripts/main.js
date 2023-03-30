import { createHTML } from "./createHTML.js";
import { fetchCorporateDonations, fetchCorporations, fetchLegislation, fetchPacDonations, fetchPacs, fetchPoliticianLegislation, fetchPoliticians } from "./dataAccess.js";

const mainContainer = document.querySelector("#container");

// Fetch all of the database so that it's stored in application state, then regenerate html
const render = () => {
    fetchPoliticians()
    .then(() => fetchPoliticianLegislation())
    .then(() => fetchLegislation())
    .then(() => fetchPacDonations())
    .then(() => fetchPacs())
    .then(() => fetchCorporateDonations())
    .then(() => fetchCorporations())
    .then(() => {
        mainContainer.innerHTML = createHTML()
    })
};

render();

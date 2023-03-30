const API = "http://localhost:8088"
const applicationState = {}

export const fetchPoliticians = () => {
    return fetch(`${API}/politicians`)
        .then(response => response.json())
        .then((responseArray) => { applicationState.politicians = responseArray })
}

export const getPoliticians = () => {
    return applicationState.politicians.map(obj => ({ ...obj }))
}

export const fetchPoliticianLegislation = () => {
    return fetch(`${API}/politicianLegislation`)
        .then(response => response.json())
        .then((responseArray) => { applicationState.politicianLegislation = responseArray })
}

export const getPoliticianLegislation = () => {
    return applicationState.politicianLegislation.map(obj => ({ ...obj }))
}

export const fetchLegislation = () => {
    return fetch(`${API}/legislation`)
        .then(response => response.json())
        .then((responseArray) => { applicationState.legislation = responseArray })
}

export const getLegislation = () => {
    return applicationState.legislation.map(obj => ({ ...obj }))
}

export const fetchPacDonations = () => {
    return fetch(`${API}/pacDonations`)
        .then(response => response.json())
        .then((responseArray) => { applicationState.pacDonations = responseArray })
}

export const getPacDonations = () => {
    return applicationState.pacDonations.map(obj => ({ ...obj }))
}

export const fetchPacs = () => {
    return fetch(`${API}/pacs`)
        .then(response => response.json())
        .then((responseArray) => { applicationState.pacs = responseArray })
}

export const getPacs = () => {
    return applicationState.pacs.map(obj => ({ ...obj }))
}

export const fetchCorporateDonations = () => {
    return fetch(`${API}/corporateDonations`)
        .then(response => response.json())
        .then((responseArray) => { applicationState.corporateDonations = responseArray })
}

export const getCorporateDonations = () => {
    return applicationState.corporateDonations.map(obj => ({ ...obj }))
}

export const fetchCorporations = () => {
    return fetch(`${API}/corporations`)
        .then(response => response.json())
        .then((responseArray) => { applicationState.corporations = responseArray })
}

export const getCorporations = () => {
    return applicationState.corporations.map(obj => ({ ...obj }))
}

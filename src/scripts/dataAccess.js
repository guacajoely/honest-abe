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

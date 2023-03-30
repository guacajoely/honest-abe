import { getCorporateDonations, getCorporations } from "./dataAccess.js"

export const findCorps = (matchingPacs) => {

    const corporateDonations = getCorporateDonations()
    const corporations = getCorporations()

    // Find all the CORPORATIONS tied to the politician's ID by which PACS donated to them
    // so we pick up where we left off on the code above 
    let matchingCorps = []
    matchingPacs.forEach( (pac) => {

    //get all matching donations
    const matchingCorpDonations = corporateDonations.filter((donation) => {
        return donation.pacId === pac.id
    })
    
    //get all matching corps
    const matchingCorpObjects = matchingCorpDonations.map((donation) => {
        return corporations.find((corp) => {
            return corp.id === donation.corporationId
        })
    })

    //throw corps into single array
    matchingCorpObjects.forEach((obj) => {
        matchingCorps.push(obj)
        })
    })

    //we only need one of each corp name so remove duplicates before referencing
    let sortedMatchingCorps = matchingCorps.filter((x, index) => {
        return matchingCorps.indexOf(x) === index;
    });

    return sortedMatchingCorps

}
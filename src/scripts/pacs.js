import { getPacDonations, getPacs } from "./dataAccess.js"

export const findPacs = (politician) => {

    const pacDonations = getPacDonations()
    const pacs = getPacs()

    // Find all the PACS tied to the politician's ID by donations
    const matchingpacDonations = pacDonations.filter((pair) => {
        return pair.politicianId === politician.id
    })
    
    const matchingPacs = matchingpacDonations.map((donation) => {
        return pacs.find((pac) => {
            return pac.id === donation.pacId
        })
    })

    return matchingPacs

}
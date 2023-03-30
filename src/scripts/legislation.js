import { getLegislation, getPoliticianLegislation } from "./dataAccess.js"

export const findLegislation = (politician) => {

    const politicianLegislation = getPoliticianLegislation()
    const legislation = getLegislation()

    // Find all the LEGISLATION tied to the politician's ID
    const matchingPoliticianLegislation = politicianLegislation.filter((pair) => {
        return pair.politicianId === politician.id
    })
    
    const matchingLegislation = matchingPoliticianLegislation.map((stock) => {
        return legislation.find((singleLeg) => {
            return singleLeg.id === stock.legislationId
        })
    })

    return matchingLegislation

}
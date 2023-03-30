import { getCorporateDonations, getCorporations, getLegislation, getPacDonations, getPacs, getPoliticianLegislation, getPoliticians } from "./dataAccess.js"

export const createPoliticianList = () => {
    const politicians = getPoliticians()
    const politicianLegislation = getPoliticianLegislation()
    const legislation = getLegislation()
    const pacDonations = getPacDonations()
    const pacs = getPacs()
    const corporateDonations = getCorporateDonations()
    const corporations = getCorporations()

    return `<article class="politicians">
                ${politicians.map(politician => {

                    // Find all the LEGISLATION tied to the politician's ID
                    const matchingPoliticianLegislation = politicianLegislation.filter((pair) => {
                        return pair.politicianId === politician.id
                    })
                    
                    const matchingLegislation = matchingPoliticianLegislation.map((stock) => {
                        return legislation.find((singleLeg) => {
                            return singleLeg.id === stock.legislationId
                        })
                    })

                    
                    // Find all the PACS tied to the politician's ID by donations
                    const matchingpacDonations = pacDonations.filter((pair) => {
                        return pair.politicianId === politician.id
                    })
                    
                    const matchingPacs = matchingpacDonations.map((donation) => {
                        return pacs.find((pac) => {
                            return pac.id === donation.pacId
                        })
                    })

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
                   
                    return `    <section class="politician">

                                    <header class="politician__name">
                                        <h1>${politician.name.first} ${politician.name.last}</h1>
                                    </header>

                        
                                    <div class="politician__info">
                                        <div>Age: ${politician.age}</div>
                                        <div>Represents: ${politician.district}</div>
                                    </div>

                                    <div class="politician__container">  
                                        <div class="politician__bills">
                                            <h3>Sponsored Bills</h3>
                                            <ul>
                                                ${matchingLegislation.map(singleLeg => {return `<li class="legislation" id="legislation--${singleLeg.id}"/>${singleLeg.name}</li>`}).join("")}
                                            </ul>
                                        </div>

                                        <div class="politician__funders">
                                            <h3>Related PACs</h3>
                                            <ul>
                                            ${matchingPacs.map(pac => {return `<li class="pac" id="pac--${pac.id}"/>${pac.registeredName}</li>`}).join("")}
                                            </ul>
                                        </div>

                                        <div class="politician__influencers">
                                            <h3>Influencing Corporations</h3>
                                            <ul>
                                            ${sortedMatchingCorps.map(corp => {return `<li class="corporation" id="corporation--${corp.id}"/>${corp.company}</li>`}).join("")}
                                            </ul>
                                        </div>
                                    </div>
                                </section>`
                    }).join("")
                }</article>`
    }
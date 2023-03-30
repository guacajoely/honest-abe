import { getPoliticians } from "./dataAccess.js"
import { findLegislation } from "./legislation.js"
import { findPacs } from "./pacs.js"
import { findCorps } from "./corporations.js"

export const createPoliticianList = () => {
    const politicians = getPoliticians()

    return `<article class="politicians">
                ${politicians.map(politician => {
                    
                const matchedLegislation = findLegislation(politician)
                
                const matchedPacs = findPacs(politician)

                const matchedCorps = findCorps(matchedPacs)

                return `<section class="politician">

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
                                    ${matchedLegislation.map(singleLeg => {return `<li class="legislation" id="legislation--${singleLeg.id}"/>${singleLeg.name}</li>`}).join("")}
                                </ul>
                            </div>

                            <div class="politician__funders">
                                <h3>Related PACs</h3>
                                <ul>
                                ${matchedPacs.map(pac => {return `<li class="pac" id="pac--${pac.id}"/>${pac.registeredName}</li>`}).join("")}
                                </ul>
                            </div>

                            <div class="politician__influencers">
                                <h3>Influencing Corporations</h3>
                                <ul>
                                ${matchedCorps.map(corp => {return `<li class="corporation" id="corporation--${corp.id}"/>${corp.company}</li>`}).join("")}
                                </ul>
                            </div>
                        </div>
                    </section>`
                }).join("")
            }</article>`
    }
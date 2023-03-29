import { getPoliticians } from "./dataAccess.js"

export const createPoliticianList = () => {
    const politicians = getPoliticians()

    return `<article class="politicians">
                ${politicians.map(politician => {
                   
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
                                            <div>
                                                *LIST OF SPONSORED BILLS GO HERE*
                                            </div>
                                        </div>

                                        <div class="politician__funders">
                                            <h3>Related PACs</h3>
                                            <ul>
                                                <li>*LIST OF PACS GO HERE*</li>
                                            </ul>
                                        </div>

                                        <div class="politician__influencers">
                                            <h3>Influencing Corporations</h3>
                                            <ul>
                                                <li>*LIST OF CORPS GO HERE*</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>`
                    }).join("")
                }</article>`
    }
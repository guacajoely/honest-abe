import { getPoliticians } from "./dataAccess.js"

export const createPoliticianList = () => {
    const politicians = getPoliticians()

    return `<article class="politicians"><h1>Politicians</h1>
                ${politicians.map(politician => {
                   
                    return `    <section class="politician">
                                    <header class="politician__name">
                                        <h3>${politician.name.first} ${politician.name.last}</h3>
                                    </header>
                                    <div class="politician__info">
                                        <div>Age: ${politician.age}</div>
                                        <div>Represents: ${politician.district}</div>
                                    </div>
                                </section>
                            </article>`
                    }).join("")
                }`
    }
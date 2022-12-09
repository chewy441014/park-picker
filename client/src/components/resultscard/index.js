import React, { useState, useEffect } from 'react';
import axios from "axios"
import "./style.css"


function ResultCard({ route }) {
    const { search, userLatLon } = route.params;
    console.log("=======================")
    console.log(search)
    console.log(userLatLon)


    const [searchResults, setSearchResult] = useState([])

    useEffect(() => {
        axios.get("https://developer.nps.gov/api/v1/parks?q=austin&api_key=VsW5K0iIIgUoBLJJejWXL1qmtDOOnKKy7fx22tfG").then(res => {
            console.log(res.data)
            setSearchResult(res.data.data)
        })

    }, [])


    return (
        <div >
            <button className='searchAgain'>
                Search Again
            </button>
            <div className='searchContainer'>
                {
                    searchResults.map((data) =>
                        <div key={data.id}>
                            <div className='searchcard'>
                                <h2>
                                    {data.designation}
                                </h2>
                                <h5>
                                    {data.addresses[0].stateCode
                                    }
                                </h5>
                                <p>
                                    {data.description}
                                </p>
                                <p>
                                    {/* {data.description} */}
                                    distance: { }
                                </p>
                            </div>

                        </div>)
                        
                }

            </div>
        </div>
    );
}

export default ResultCard;
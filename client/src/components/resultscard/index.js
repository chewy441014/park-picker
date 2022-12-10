import React, { useState, useEffect } from 'react';
import "./style.css"

function ResultCard(props) {
    console.log("props")
    console.log(props)
    const searchResults = props.data.result.data
    console.log(searchResults[0].url)
    // const [searchResults, setSearchResult] = useState([])

    return (
        <div >
            <button className='searchAgain'>
                Search Again
            </button>
            <h1>{props.title}</h1>
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
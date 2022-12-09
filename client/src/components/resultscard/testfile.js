///delete this later:

import React, { useState, useEffect } from 'react';
import axios from "axios"
import "./style.css"

function ResultCard() {

    const [searchResults, setSearchResult] = useState([])
    const [test, setTest] = useState([])
    const [test2, setTest2] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            console.log(res.data)
            setSearchResult(res.data.data)
        })

    }, [])
    useEffect(() => {
        axios.get("https://api.publicapis.org/entries").then(res => {
            console.log(res.data)
            setTest(res.data)
        })

    }, [])

    useEffect(() => {
        axios.get("https://api.publicapis.org/entries").then(res => {
            console.log(res.data)
            setSearchResult(res.data.data)
        })

    }, [])
    return (
        <div>
            <div>
                {
                    searchResults.map((data) =>
                        <div key={data.id}>
                            <div className='searchcard'>
                                <h2>
                                    {data.designation}
                                </h2>
                                <p>
                                    {data.description}
                                </p>
                            </div>

                        </div>)
                }
            </div>

            <div>
                {
                    test.map((data) =>
                        <div key={data.id}>
                            <div className='searchcard'>
                                <h2>
                                    {data.title}
                                </h2>
                                <p>
                                    {data.id}
                                </p>
                            </div>

                        </div>)
                }
            </div>
        </div>
    );
}

export default ResultCard;
import React from 'react';

import "./style.css"

// get distance between two lat and lon coordinate pairs in miles
function getDistance(start, end) {
    var earthRadius = 3958.761;
    var deltaPhi = (start[0] - end[0]) * Math.PI / 180; // convert deltaPhi to radian, diff in lat
    var deltaLambda = (start[1] - end[1]) * Math.PI / 180; // convert deltaLambda to radian, diff in lon
    var meanLat = (start[0] + end[0]) / 2 * Math.PI / 180; // convert mean lat to radian
    return Math.round(earthRadius * Math.sqrt(Math.pow(deltaPhi, 2) + Math.pow(Math.cos(meanLat) * deltaLambda, 2)));
}

// sorts the response data and returns the five closest results
function sortParkData(completeResponse, userLatLon) {
    // completeResponse must be the array of data taken from the nps api response
    // userlatlon is expected to be an object of form {lat: 12.123123, lng:32.123123}
    // iterate through the complete response, and calculate distance from user supplied lat / lon. 
    let userLocation = [userLatLon.lat, userLatLon.lng]; // Houston coords for now
    for (let i = 0; i < completeResponse.length; i++) {
        let parkCoords = [Number(completeResponse[i].latitude), Number(completeResponse[i].longitude)];
        let distanceCal = getDistance(userLocation, parkCoords);
        completeResponse[i].distance = distanceCal;
    }
    // sort the data and assign it to the global variable, sorted by distance from the user location
    completeResponse.sort(compareFn);
    function compareFn(a, b) {
        return a.distance - b.distance
    }
    return completeResponse;
}

function ResultCard(props) {

    const searchResults = props.data.result.data;
    const userLatLon = props.data.location;

    sortParkData(searchResults, userLatLon);

    const handleGetDetails = (event) => {
        event.preventDefault();
        console.log("clicked")

    }

    return (
        <div id="hidden-div">
            <a href="/home">
                <button className='searchAgain'>
                    Search Again
                </button>
            </a>
            <h1>{props.title}</h1>
            <div className='searchContainer'>
                {
                    searchResults.slice(0, 10).map((data) =>
                        <div key={data.id} onClick={handleGetDetails}>
                            <div className='searchcard'>
                                <h2>
                                    {data.fullName}
                                </h2>
                                <h5>
                                    {data.addresses[0].stateCode
                                    }
                                </h5>
                                <p>
                                    {data.description.slice(0, 200) + '...'}
                                </p>
                                <p>
                                    {/* {data.description} */}
                                    Distance: {data.distance} mi.
                                </p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
}


export default ResultCard;
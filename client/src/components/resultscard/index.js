import React from 'react';
import { useNavigate } from "react-router-dom";
import "./style.css"
import { useMutation } from '@apollo/client';

import { ADD_TRIP } from '../../utils/mutations';

import Auth from '../../utils/auth';

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
    const userCity = props.data.userLocationInput;
    const userActivity = props.data.userActivity;
    const navigate = useNavigate();
    const searchResults = props.data.result.data;
    const userLatLon = props.data.location;
    const parkId = props.data.id;
    sortParkData(searchResults, userLatLon);
    
    const [addTrip, { error }] = useMutation(ADD_TRIP);

    const handleGetDetails = (event) => {
        event.preventDefault();
        let level = event.target.getAttribute("data-level");
        let parent;
        if (level === "2") {
            parent = event.target.parentElement.parentElement.getAttribute("data-id")
        } else if (level === "1") {
            parent = event.target.parentElement.getAttribute("data-id")
        }
        props.data.setPark(parent);
        navigate("/park-details");
    }

    const handleSaveTrip = async (e) => {
        e.preventDefault();
        
    try {    
        console.log(Auth.getProfile().data.username);
        console.log(userActivity);
        console.log(userCity);
        console.log(Auth.getToken());
        const { response } = await addTrip({
            variables: {
                
                searchQuery: userActivity,
                location: userCity,
                username: Auth.getProfile().data.username
            },
        });
        console.log(response);
    } catch (e) {
        console.error(e);
        console.log(error);
    }
};

    return (
        <div id="hidden-div">
            <div className="d-flex justify-content-between searchbtns">
                <a href="/home">
                    <button className='searchAgain '>
                        Search Again
                    </button>
                </a>
                <p className="text-center" id="searchContext">Showing 10 results for {userActivity} near {userCity}.</p>
                {Auth.loggedIn() ? (
                    <>
                        <button className='searchAgain' onClick={handleSaveTrip}>Save Search</button>
                    </>
                ) : (
                    <>
                        <p><a href="/signup">Sign up</a> or <a href="/login">login</a> to save search.</p>
                    </>
                )}
            </div>
            <h1>{props.title}</h1>
            <div className='searchContainer'>
                {
                    searchResults.slice(0, 10).map((data) =>
                        <div data-id={data.id} onClick={handleGetDetails} data-level="0" key={data.id}>
                            <div className='searchcard' data-level="1">

                                <h2 data-level="2">
                                    {data.fullName}
                                </h2>
                                <h5 data-level="2">
                                    {data.addresses[0].stateCode
                                    }
                                </h5>
                                <p data-level="2">
                                    {data.description.slice(0, 200) + '...'}
                                </p>
                                <p data-level="2">
                                    {/* {data.description} */}
                                    Distance: {data.distance} mi.
                                </p >
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
}


export default ResultCard;
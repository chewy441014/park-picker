import React from 'react';
import Weather from '../weather';
import Map from '../map';
import API from '../../utils/API.js';
import { useNavigate } from "react-router-dom";

function ParkDetailsCard(props) {

    const navigate = useNavigate();
    const searchResults = props.data.result.data;
    const userLatLon = props.data.location;
    const parkId = props.data.id;
    console.log(props)
    console.log(searchResults);
    console.log(userLatLon);
    console.log(parkId);

    return (
        <div>
            <header>
                <h1 id="park-name">Default Park Name, Get it from the API</h1>
                <button></button>
            </header>
            <div>
                <div className="column is-justify-content-center" id="park-desc">
                    {/* Default park description, get it from the API call */}
                </div>
            </div>
            <div>
                <div id="park-details">
                    {/* Default park image, get it from the API call */}
                </div>
                <div id="map-parent">
                    {/* Default Map location, import subcomponent */}
                    <Map />
                </div>
            </div>
            <div id="weather">
                {/* Default weather location, import subcomponent */}
                <Weather />
            </div>
        </div>
    );
}

export default ParkDetailsCard;
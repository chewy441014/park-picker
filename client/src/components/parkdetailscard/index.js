import React from 'react';
import Weather from '../weather';
import Map from '../map';

function ParkDetailsCard() {
    return (
        <div>
            <header>
                <h1 id="park-name">Default Park Name, Get it from the API</h1>
                <button></button>
            </header>
            <div>
                <div class="column is-justify-content-center" id="park-desc">
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
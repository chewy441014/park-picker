import React from 'react';
import Weather from '../weather';
import Map from '../map';
import "./style.css"
// import { useNavigate } from "react-router-dom";
import "./style.css"

function ParkDetailsCard(props) {

    const searchResults = props.data.result.data;
    const userLatLon = props.data.location;
    const parkId = props.data.id;
    const parkData = searchResults.filter((elem) => elem.id === parkId )[0];

    return (
        <div className='container rowDetails'>
            <div className="detailrow">

                <div className='column1'>
                    <div id="park-details">
                        {/* Default park image, get it from the API call */}
                        <img className='parkDimg' width={"230px"} height={"230px"} src={parkData.images[0].url} alt={parkData.images[0].altText} />
                    </div>
                </div>
                <div className='column2'>

                    <header>
                        <h1 id="park-name">{parkData.fullName}</h1>

                    </header>
                    <div>
                        <div className="column is-justify-content-center" id="park-desc">
                            {/* Default park description, get it from the API call */}
                            {parkData.description}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div id="map-parent">
                    {/* Default Map location, import subcomponent */}
                    <Map coords={ [{lat: Number(parkData.latitude), lng: Number(parkData.longitude)}, userLatLon] } />
                </div>
            </div>
            <div id="weather">
                {/* Default weather location, import subcomponent */}
                <Weather coord={{ lat: parkData.latitude, lng: parkData.longitude }} />
            </div>
        </div>
    );
}

export default ParkDetailsCard;
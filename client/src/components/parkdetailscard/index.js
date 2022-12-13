import React from 'react';
import Weather from '../weather';
import Map from '../map';
import "./style.css"

import { useNavigate } from 'react-router-dom';

function ParkDetailsCard(props) {

    const searchResults = props.data.result.data;
    const userLatLon = props.data.location;
    const parkId = props.data.id;
    const parkData = searchResults.filter((elem) => elem.id === parkId)[0];
    let allactivities = parkData.directionsUrl.split("/")
    allactivities[5] = "things2do.htm"
    allactivities = allactivities.join("/")

    const navigate = useNavigate();
    const handleClick = () => {
        // 👇️ replace set to true
        navigate('/search', { replace: true });
    };

    return (
        <div className='container rowDetails'>
            <button onClick={handleClick} className='searchAgain searchB'>
                View Results
            </button>

            <header>
                <h1 id="park-name">{parkData.fullName}</h1>

            </header>
            <div>
                <div className="column is-justify-content-center" id="park-desc">
                    {/* Default park description, get it from the API call */}
                    {parkData.description}
                </div>
                <div>
                    <a className='' href={parkData.url} alt={parkData.url} rel="noreferrer" target="_blank">Park Website</a>
                    <a className='urlstyle' href={allactivities} alt={allactivities} rel="noreferrer" target="_blank">All Activities  </a>

                </div>
            </div>
            <div className="detailrow">

                <div className='column1'>
                    <div id="park-details">
                        {/* Default park image, get it from the API call */}
                        <img className='parkDimg' width={"100%"} height={"300px"} src={parkData.images[0].url} alt={parkData.images[0].altText} />
                    </div>
                </div>

                <div className='column1'>
                    <div id="map-parent">
                        {/* Default Map location, import subcomponent */}
                        <Map coords={[{ lat: Number(parkData.latitude), lng: Number(parkData.longitude) }, userLatLon]} />
                    </div>
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
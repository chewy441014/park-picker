import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';
import "./style.css"
import profile from '../assets/images/icons/profilePlaceholder.png';
// import components
import API from '../utils/API';
import { useNavigate } from 'react-router-dom';




const Profile = (props) => {

  
const navigate = useNavigate();

  const { data, loading } = useQuery(QUERY_ME);



  const searchNPS = async (query) => {
    // query needs to be an array of strings
    const response = await API.npsSearch(query);
    return response;
  }

  const getUserLocation = async (query) => {
    const response = await API.mapquestGetLatLon(query)
    return response;
  }


  // Profile card loads if user is logged in, if not message is populated

  async function searchHandler(e) {
    e.preventDefault()
    let level = e.target.getAttribute("data-level");
    let location
    let activity


    if (level === "2") {
      location = e.target.parentElement.children.location.textContent
      activity = e.target.parentElement.children.search.textContent
    } else {
      location = e.target.children.location.textContent
      activity = e.target.children.search.textContent
    }

    const searchResult = await searchNPS(activity);
    const userLatLon = await getUserLocation(location);

    props.data.setUserLocationInput(location);
    props.data.setUserActivity(activity);

    props.data.setLocation(userLatLon);
    props.data.setSearchResult(searchResult);
    console.log(props.data)
    navigate("/search")
  }


  if (loading) {
    return <div>Loading...</div>;
  }

  if (Auth.loggedIn()) {

    return (

      <section className="d-flex flex-column justify-content-end my-2" id='info'>

        <div className='col' >

          <div className='flex-row'>
            <img id='profilePic' alt='Placeholder profile icon' src={profile}></img>
            <h2>{Auth.getProfile().data.firstName} {Auth.getProfile().data.lastName}</h2>
          </div>

          <h5>Username: {Auth.getProfile().data.username} <br /> Email: {Auth.getProfile().data.email}</h5>
        </div>
        <hr />
        <section className='d-flex flex-column align-items-center'>
          <h4>Saved Trips:</h4>
          {
            data.me.recentSearches.map((elem) =>
              <h5 data-level="1" key={elem._id} onClick={searchHandler} ><span data-level="2" id='search'>{elem.searchQuery}</span> from <span data-level="2" id='location'>{elem.location}</span></h5>
            )
          }
        </section>
      </section>

    )
  };


  if (!Auth.loggedIn()) {
    console.log("Not Logged In")
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }
};

export default Profile;

import React from 'react';
import './userProfile.css'
import profile from '../../assets/images/icons/profilePlaceholder.png'
import Auth from '../../utils/auth';

export default function userProfile() {
  return (

  <section className="row" id='info'>
    <div className='col-sm-12 col-med-3' >
      <img id='profilePic' alt='Placeholder profile image' src={profile}></img>
    </div>
    <div className='col-sm-12 col-med-9' >
      <h2>{Auth.getProfile().data.firstName} {Auth.getProfile().data.lastName}</h2>
      <h4> Username: {Auth.getProfile().data.username} <br /> Email: {Auth.getProfile().data.email}</h4>
    </div>
  </section>



  );
}
import React, { useRef } from 'react';
import { useQuery } from '@apollo/client';
import ProfileCard from '../components/userProfile';

// import components

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useRef(Auth.getProfile().data.username);

  const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });



  // Profile card loads if user is logged in, if not message is populated
  
  if (Auth.loggedIn() && data) {
    console.log(data);
    return (
      
          <ProfileCard />
      
  )
  }


  if (!Auth.loggedIn()) {
    console.log("Not Logged In")
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      
    </div>
  );
};

export default Profile;

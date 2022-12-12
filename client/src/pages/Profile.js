import ProfileCard from '../components/userProfile';
import Auth from '../utils/auth';
// import components





const Profile = () => {
  



  // Profile card loads if user is logged in, if not message is populated
  
  if (Auth.loggedIn()) {
    
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

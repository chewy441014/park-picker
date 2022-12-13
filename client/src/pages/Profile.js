import Auth from '../utils/auth';
import "./style.css"
import profile from '../assets/images/icons/profilePlaceholder.png'
// import components





const Profile = () => {




  // Profile card loads if user is logged in, if not message is populated

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

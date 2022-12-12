import React, { useState, useEffect } from 'react';
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import background from "./assets/images/backgrounds/big_prairie.jpg"
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Results from './pages/Results';
import ParkDetails from './components/parkdetailscard';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const myStyle = {
  background: `url(${background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

function App() {

  const [searchResult, setSearchResult] = useState();
  const [location, setLocation] = useState();
  const [parkId, setParkId] = useState();

  const [userActivity, setUserActivity] = useState();
  const [userLocationInput, setUserLocationInput] = useState();
  // useEffect(() => {
  // const script = document.createElement('script');
  // script.src = "https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js";
  // script.async = true;
  // const link = document.createElement('link');
  // link.href ="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css"
  // link.rel = "stylesheet"
  // link.type = "text/css"
  // document.head.appendChild(link)
  // document.body.appendChild(script);
  // }, []);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div style={myStyle} className="d-flex flex-column justify-content-between min-vh-100">
          <Navbar />
          <div className="container mt-5 w-50 pl-5 bg-white justify-center border search-box ">
            {/* context provider wraps routes */}
            <Routes>
              <Route
                path="/home"
                element={<Home data={{ location: location, result: searchResult, userActivity: userActivity, userLocationInput: userLocationInput, setUserLocationInput: setUserLocationInput, setUserActivity: setUserActivity, setLocation: setLocation, setSearchResult: setSearchResult }} />}
              />
              {/* Add additional routes */}
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/userdash"
                element={<Profile />}
              />
              {/* pass props to search setup */}
              <Route
                path="/search"
                element={<Results data={{ location: location, result: searchResult, id: parkId, userActivity: userActivity, userLocationInput: userLocationInput, setUserLocationInput: setUserLocationInput, setUserActivity: setUserActivity, setPark: setParkId, setLocation: setLocation, setSearchResult: setSearchResult }} />}
              />
              <Route
                path="/park-details"
                element={<ParkDetails data={{ location: location, result: searchResult, id: parkId, setPark: setParkId, setLocation: setLocation, setSearchResult: setSearchResult }} />}
              />
              <Route
                path="*"
                element={
                  <Navigate to="/home" />
                }
              />
            </Routes>

          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
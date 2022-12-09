import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import API from '../../utils/API';
import { useState, useEffect, useRef } from 'react';

function SearchCard() {

    const [activities, setActivities] = useState([]);
    const activity = useRef();
    const location = useRef();

    const getActivities = async () => {
        const response = await API.npsGetActivities();
        // console.log(response.data)
        const list = response;
        list.unshift("Nothing Selected");
        setActivities(list);
    }

    const searchNPS = async (query) => {
        // query needs to be an array of strings
        const response = await API.npsSearch(query);
        // console.log('User selected ' + query + ', searching NPS API for results: ---------------')
        // console.log(response);
        // console.log('NPS API RESPONSE ABOVE');
        return response;
    }

    const getUserLocation = async (query) => {
        const response = await API.mapquestGetLatLon(query)
        // console.log('User searched location ' + query + ', searching Mapquest API for results: ---------------')
        // console.log(response)
        // console.log('MAPQUEST API RESPONSE ABOVE');
        return response;
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // pull current versions of both refs
        const searchResult = await searchNPS(activity.current?.value);
        const userLatLon = await getUserLocation(location.current?.value);
        console.log(searchResult, userLatLon);
        // call searchNPS and mapquest GEOLOCATION
        // verify that all inputs are good, 
        // redirect the user to the results page, and pass the api responses to that other page
    }

    useEffect(() => {
        getActivities();

    }, []);

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formActivityList" >
                    <Form.Label className='d-flex justify-content-center'><h4>Select park activities:</h4></Form.Label>
                    <Form.Select ref={activity} >
                        {activities.map((elem, index) =>
                            <option key={index}> {elem} </option>
                        )}
                    </Form.Select>
                </Form.Group>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Use current location."
                />
                <Form.Group className="mb-3" controlId="formLocationSearch">
                    <Form.Label>Enter your address below</Form.Label>
                    <Form.Control type="text" placeholder="123 Fake St..." ref={ location }  />
                </Form.Group>
                <Button variant="primary" type="button" onClick={ handleFormSubmit }>
                    Search
                </Button>
            </Form>
        </div>
    );
}

export default SearchCard;
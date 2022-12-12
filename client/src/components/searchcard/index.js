import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import API from '../../utils/API';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import "./style.css"

function SearchCard(props) {
    const [activities, setActivities] = useState([]);
    const activity = useRef();
    const location = useRef();
    const navigate = useNavigate();

    const getActivities = async () => {
        const response = await API.npsGetActivities();
        const list = response;
        list.unshift("Nothing Selected");
        setActivities(list);
    }

    const searchNPS = async (query) => {
        // query needs to be an array of strings
        const response = await API.npsSearch(query);
        return response;
    }

    const getUserLocation = async (query) => {
        const response = await API.mapquestGetLatLon(query)
        return response;
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // pull current versions of both refs
        if (!activity.current?.value || !location.current?.value) {
            console.log('Search activity or location blank')

        } else if (activity.current?.value === "Nothing Selected") {
            console.log('Nothing selected selected, please make a selection')

        } else {
            const searchResult = await searchNPS(activity.current?.value);
            const userLatLon = await getUserLocation(location.current?.value);
            if (searchResult && userLatLon) {
                activity.current.value = 'Nothing Selected';
                location.current.value = '';
                props.data.data.setLocation(userLatLon);
                props.data.data.setSearchResult(searchResult);
                navigate('/search')
                // redirect the user to the results page, and pass the api responses to that other page
            }
        }
    }

    useEffect(() => {
        getActivities();
    }, []);

    return (
        <div >
            <Form className="mb-3">
                <Form.Group className="mb-3" controlId="formActivityList" >
                    <Form.Label className='d-flex justify-content-center mt-3'><h5 className="searchCardHeader">Select a park activity from the dropdown list and enter your location below.</h5></Form.Label>
                    <p className='text-center'>The 10 closest parks with your chosen activity will be displayed.</p>
                    <Form.Select ref={activity} className="squaredThree hoverEffect" >
                        {activities.map((elem, index) =>
                            <option key={index}> {elem} </option>
                        )}
                    </Form.Select>
                </Form.Group>
                <Form.Check className=""
                    type="switch"
                    id="custom-switch"
                    label="Use current location."
                />
                <Form.Group className="mb-3" controlId="formLocationSearch">
                    <Form.Label>Enter your address below</Form.Label>
                    <Form.Control className="hoverEffect" type="text" placeholder="123 Fake St..." ref={location} />
                </Form.Group>
                <Button className="searchB mb-3" type="button" onClick={handleFormSubmit}>
                    Search
                </Button>
            </Form>
        </div>
    );
}

export default SearchCard;
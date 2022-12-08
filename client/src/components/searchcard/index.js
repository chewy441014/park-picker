import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import API from '../../utils/API';
import { useState, useEffect } from 'react';

function SearchCard() {

    const [activities, setActivities] = useState([]);

    const getActivities = async () => {
        const response = await API.npsGetActivities();
        // console.log(response.data)
        const list = response.data;
        list.unshift("Nothing Selected");
        setActivities(list);
    }


    // console.log(activities);
    useEffect(() => {
        getActivities();
        // console.log(activities)
    }, []);

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formActivityList">
                    <Form.Label className='d-flex justify-content-center'><h4>Select park activities:</h4></Form.Label>
                    <Form.Select>
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
                    <Form.Control type="text" placeholder="123 Fake St..." />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
        </div>
    );
}

export default SearchCard;
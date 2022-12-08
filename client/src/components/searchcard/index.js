import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import API from '../../utils/API';

// export default { weather, mapquestGetLatLon, npsSearch, npsGetActivities };

async function SearchCard() {

    const activities = await API.npsGetActivities();
    console.log(activities.data);

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formActivityList">
                    <Form.Label>Select park activities.</Form.Label>
                    <Form.Select>
                        <option>Nothing selected</option>
                        <option>Camping</option>
                        <option>Swimming</option>
                        <option>Hiking</option>
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
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default SearchCard;
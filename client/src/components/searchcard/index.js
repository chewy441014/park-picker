import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchCard() {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formActivityList">
                    <Form.Label className='d-flex justify-content-center'><h4>Select park activities:</h4></Form.Label>
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
                    Search
                </Button>
            </Form>
        </div>
    );
}

export default SearchCard;
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Auth from '../utils/auth';

const Signup = (props) => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const username = useRef();
  const password = useRef();

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleFormSubmit = async (e) => {
    e.preventDefault();


    try {
      const { data } = await addUser({
        variables: {
          firstName: firstName.current?.value,
          lastName: lastName.current?.value,
          email: email.current?.value,
          username: username.current?.value,
          password: password.current?.value,

        },
      });
      console.log(data)
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          {/* <h4 className="card-header bg-dark text-light p-2">Sign Up</h4> */}
          <h4 className="card-header p-2">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/home">back to the homepage.</Link>
              </p>
            ) : (
              <Form className="d-flex flex-column align-items-center">
                <Form.Control className="form-input" type="text" placeholder="First Name" ref={firstName} />
                <Form.Control className="form-input" type="text" placeholder="Last Name" ref={lastName} />

                <Form.Control className="form-input" type="text" placeholder="New Username" ref={username} />
                <Form.Control className="form-input" type="text" placeholder="Email" ref={email} />
                <Form.Control className="form-input" type="password" placeholder="New Password" ref={password} />

                <Button className="btn btn-block btn-primary" style={{ cursor: 'pointer' }} type="button" onClick={handleFormSubmit}>
                  Sign Up
                </Button>
              </Form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;

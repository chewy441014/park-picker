import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Auth from '../utils/auth';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "./style.css"

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
      console.log(error)
    }
  };

  return (

    <div className="flex-row justify-center mb-4">
      <h2 className="card-header text-center p-2">Sign Up</h2>
      <div className="card-body">
        {data ? (
          <p>
            Success! You may now head{' '}
            <Link to="/home">back to the homepage.</Link>
          </p>
        ) : (
          <Form>
            <Row className="g-3">
              <Col md>
                <FloatingLabel className="mb-3">
                  <Form.Control className="form-input" type="text" placeholder="Enter First Name" ref={firstName} />
                  <label>
                    First Name
                  </label>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel className="mb-3">
                  <Form.Control className="form-input" type="text" placeholder="Enter Last Name" ref={lastName} />
                  <label>
                    Last Name
                  </label>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel className="mb-3">
                  <Form.Control className="form-input" type="text" placeholder="Enter Username" ref={username} />
                  <label>
                    Username
                  </label>
                </FloatingLabel>
              </Col>
            </Row>
            <FloatingLabel className="mb-3">
              <Form.Control className="form-input" type="text" placeholder="Enter Email" ref={email} />
              <label>
                Email address
              </label>
            </FloatingLabel>

            <FloatingLabel className="mb-3">
              <Form.Control className="form-input" type="password" placeholder="Enter your new password" ref={password} />
              <label>
                New Password
              </label>

              </FloatingLabel>
              

           <Button className="btn btn-block btn-primary searchB" style={{ cursor: 'pointer' }} type="button" onClick={handleFormSubmit}>
                   Sign Up
          </Button>
      </Form>
     
       )}
        {error && (
              <div className="my-3 p-3 text-danger">
                {error.message}
              </div>
            )}
       </div>
    </div>
  );
};

// <main className="flex-row justify-center mb-4">
//   <div className="col-12 col-lg-10">
//     <div className="card">
//       {/* <h4 className="card-header bg-dark text-light p-2">Sign Up</h4> */}
//       <h4 className="card-header p-2">Sign Up</h4>
//       <div className="card-body">
//         {data ? (
//           <p>
//             Success! You may now head{' '}
//             <Link to="/home">back to the homepage.</Link>
//           </p>
//         ) : (
//           <Form className="d-flex flex-column align-items-center">
//             <Form.Control className="form-input" type="text" placeholder="Enter First Name" ref={firstName} />
//             <Form.Control className="form-input" type="text" placeholder="Enter Last Name" ref={lastName} />

//             <Form.Control className="form-input" type="text" placeholder="Enter Username" ref={username} />
//             <Form.Control className="form-input" type="text" placeholder="Enter Email" ref={email} />
//             <Form.Control className="form-input" type="password" placeholder="New Password" ref={password} />

//             <Button className="btn btn-block btn-primary" style={{ cursor: 'pointer' }} type="button" onClick={handleFormSubmit}>
//               Sign Up
//             </Button>
//           </Form>
//         )}
//       </div>
//     </div>
//   </div>
// </main>
// );
// };

export default Signup;

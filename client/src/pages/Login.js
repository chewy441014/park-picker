import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Auth from '../utils/auth';

const Login = (props) => {
  const username = useRef();
  const password = useRef();
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // submit form
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({
        variables: { 
          username: username.current?.value, 
          password: password.current?.value 
        },
      });
      console.log(data)

      Auth.login(data.login.token);
    } catch (e) {
      console.log(error)
      console.error(e);
    }
  };

  return (
<div className="flex-row justify-center mb-4">
       <h2 className="card-header text-center p-2">Login</h2>
       <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/home">back to the homepage.</Link>
              </p>
       ) : (
      <Form>
      
         <Form.Group className="">
        <Form.Label>Username</Form.Label>
         <Form.Control className="form-input" type="text" placeholder="Your username" ref={ username } />
          </Form.Group>  
          <Form.Group className="">
        <Form.Label>Password</Form.Label>
         <Form.Control className="form-input" type="password" placeholder="******" ref={ password } />
          </Form.Group> 
          <Button className="btn btn-block btn-primary" style={{ cursor: 'pointer' }} type="button" onClick={handleFormSubmit}>
                 Login
                 </Button>
      </Form>
       )}
  </div>
    </div>
  );
};
    // <main className="flex-row justify-center mb-4">
    //   <div className="col-12 col-lg-10">
    //     <div className="card">
    //       <h4 className="card-header bg-dark text-light p-2">Login</h4>
    //       <div className="card-body">
    //         {data ? (
    //           <p>
    //             Success! You may now head{' '}
    //             <Link to="/home">back to the homepage.</Link>
    //           </p>
    //         ) : (
    //           <Form>
    //             <Form.Control className="form-input" type="text" placeholder="Your username" ref={ username } />
    //             <Form.Control className="form-input" type="password" placeholder="******" ref={ password } />
    //             <Button className="btn btn-block btn-primary" style={{ cursor: 'pointer' }} type="button" onClick={ handleFormSubmit }>
    //               Login
    //             </Button>
    //           </Form>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </main>
//   );
// };

export default Login;

import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, seterror] = useState(false)
    let history = useHistory();
    const handleSubmit = () => {
        fetch('http://localhost:8084/user-service/api/v1/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.token) {
              localStorage.setItem('token', data.token);
              localStorage.setItem('email', email);
            //   setError(false);
             // setIsAuthenticated(true);
             history.push('/dashboard');
            } else {
            //   setError(true);
            // alert('Email/password Incorrect');
            history.push('/login')
            }
          });
          // history.push('/dashboard');
        console.log(email, password);
      };


    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <h2 className="text-center text-light">Login</h2>
                    <div className="mb-2">
                        <input id="username" onChange={(e) => { setEmail(e.target.value); }} type="text" className="form-control" placeholder="Email" />
                    </div>
                    <div className="mb-2">
                        <input id="password" onChange={(e) => { setPassword(e.target.value); }} type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="mb-2">
                        <button   id="btn-login" className="btn btn-success" onClick={handleSubmit}>Login</button>
                    </div>


                </div>
            </div>
        </div>
    );

    }
export default Login;

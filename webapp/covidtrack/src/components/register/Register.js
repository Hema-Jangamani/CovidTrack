import React , { useState} from 'react'
import { useHistory } from 'react-router';

export default function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();
    function RegisterUser(){
        fetch('http://localhost:8084/user-service/api/v1/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body :JSON.stringify({username,email,password})
        }).then(res => {
            if(res.status==200){
                // alert("Registered Successfully");
                history.push('/'); 
            }
            else{
                alert("User Already Registered ");
            }
        } );
        
    }
    return (
        <div className="container mt-3">
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <h2   className="text-center text-white">Register</h2>
                <div className="mb-2">
                    <input id="username" onChange = { (e) =>setUsername(e.target.value)} type="text" className="form-control" placeholder="User Name" />
                </div>
                <div className="mb-2">
                    <input id="login" onChange = { (e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Email" />
                </div>
                <div className="mb-2">
                    <input id="password" onChange ={ (e) => setPassword(e.target.value) } type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="mb-2">
                    <button id="btnLogin" className="text-center" type="button" onClick={RegisterUser} className="btn btn-success" >Register</button>
                </div>
            </div>
        </div>
    </div>
    )
}

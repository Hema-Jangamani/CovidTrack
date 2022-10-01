import React from 'react'
import { useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

export default function Edit() {
    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  let emailId=localStorage.getItem('email');
  useEffect(() => {
  
     console.log(emailId);
     setEmail(emailId)


}, [])

let history = useHistory();
function EditContact() {
    fetch(`http://localhost:8084/user-service/api/v1/${emailId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username,email, password })
    }).then(res => {
        console.log(res)
      if(res.status==200){  
          
        history.push('/login');            
        //  alert("Edited Succesfully")          
      
        // }            else{             
        //    alert("USER NOT FOUND")          
        } 
        
    });

}
return (
    <div>
        <div className="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: 'fixed', top: '0', width: '100%', display: 'block', zIndex: '10', left: '0' }}>

          <div className="container-fluid">
            <Link className="navbar-brand" to="/dashboard">CovidTrack</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/home" className="nav-link" >Home</Link>
                </li>
              </ul>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              </ul>
              {/* <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link to="/register" className="nav-link">Registration</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/login" className="nav-link">Login</Link>
                                        </li>
                                    </ul> */}
              <ul className="navbar-nav ml-auto">

                <li className="nav-item">
                  <div className="dropdown">
                    <button className="bg-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <Link to="login" className="nav-link"><i className="fas fa-user-circle"></i></Link>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link to="/" className="dropdown-item">Logout</Link></li>
                      <li><Link to="/dashboard" className="dropdown-item">Dashboard</Link></li>
                      {/* <li><Link to="/favorite" className="dropdown-item">Favorite</Link></li> */}
                    </ul>

                  </div>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </div>


    <div className="container mt-3">
    <div className="row">
    <div className="col-md-4 offset-md-4 text-center text-white">
        
        <h2><i className="fas fa-user-edit" ></i></h2>
        
        <div className="mb-2" >
           < input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} placeholder="User Name" /><i className="fas fa-pencil-alt"></i>
        </div>
        <div className="mb-2"  >
        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}  disabled placeholder="Email" /><i class="fas fa-at"></i> 
        
        </div>
        <div className="mb-2" >
            < input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password" /><i class="fas fa-key"></i>
       </div>
        {/* <div >
            <input type="password"  placeholder="New Password"/><i class="far fa-eye-slash"></i>
        </div>
        <div>
            < input type="password"  placeholder="Confirm Password"/><i class="far fa-eye-slash"></i>
        </div> */}
        <div className="mb-2"  >
                <button onClick={EditContact} type="submit" className="btn btn-success" >Save Changes</button>
            </div>
    </div >
    </div>
    </div>
    </div>
    
)
}
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import CountryCard from "../card/CountryCard";
import FavCard from "../favcard/FavCard";
export default function Favorite() {
   const [inputCountry, setInputCountry] = useState([]);
   let email = localStorage.getItem('email');
   useEffect(() => {
      let token = localStorage.getItem('token');
     
      fetch(`http://localhost:8084/favorite-service/api/v1/countrylist/${email}/getFavoriteCountry`, {
         headers: {
            'token': token
         }
      })
         .then((res) => res.json())
         .then(data => {
            setInputCountry(data);
            console.log(data);

         });
   }, []);
   function DeleteFavoriteFunction(countryName) {
      console.log(countryName)
      let filteredcountries = inputCountry.filter(x => x.countryName !== countryName);
      setInputCountry([...filteredcountries]);
      let token = localStorage.getItem('token');
      fetch(`http://localhost:8084/favorite-service/api/v1/favorite/${email}/deleteFromFavorite/${countryName}`, {
         method: 'DELETE',
         headers: {
            'token': token
         }
      });
   }

   return (
      <>
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
                                        <li><Link to="/dashboard" className="dropdown-item">DashBoard</Link></li>
                                        <li><Link to="/edit" className="dropdown-item">EditProfile</Link></li>
                                        {/* <li><Link to="/favorite" className="dropdown-item">Favorite</Link></li> */}
                                    </ul>
                    
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
       
         {inputCountry.map((item) => (
            //  <div className="container">
            //  <div className="row">
            //  <div className="col-md-3">
            <FavCard DeleteCountry={DeleteFavoriteFunction}
               //key={i}
               //flag={item.countryInfo.flag}
               countryName={item.countryName}
               totalCases={item.totalCases}
               activeCases={item.activeCases}
               recovered={item.recovered}
               deaths={item.deaths}
            />
        //      </div>
        //  </div>
        //  </div>
         ))}
        
      </>
   );
}
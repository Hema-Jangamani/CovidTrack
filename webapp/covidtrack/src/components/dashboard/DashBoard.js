import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import CountryCard from "../card/CountryCard";
import Card from "../card/Card";
import { useHistory } from "react-router";
export default function DashBoard(props) {
  const [inputCountry, setInputCountry] = useState('');
  const [countrydata, setcountrydata] = useState([])

  function dataFetch() {
    console.log(inputCountry, "welcome");
    let token = localStorage.getItem('token');
    console.log(token);
    fetch(`http://localhost:8084/search-service/api/v1/${inputCountry}`, {
      // fetch(`https://corona.lmao.ninja/v2/countries/${inputCountry}`, {
      headers: {
        // 'token': `${localStorage.getItem('token')}`
        'token': token
      }
    })
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setcountrydata(data))



  }

  // let history = useHistory();
  // function AddFavoriteFunction(id) {
  //   let token=localStorage.getItem('token');
  //   console.log(token)
  //     fetch(`http://localhost:8084/favorite-service/api/v1/addfavorite`, {
  //         method: 'POST',
  //         headers: {
  //             'token': token
  //         },
  //         body: JSON.stringify({  })
  //     }).then(res => {
  //       console.log(countrydata)
  //         history.push('/favorite');
  //     });
  //     // console.log(id);
  // }
  function addFav() {
    let emailId = localStorage.getItem('email')
    var pushingObj = {}
    // var sendObj={}
    // let id1=uuidv4();
    // pushingObj.id=id1;
    pushingObj.countryName = inputCountry;
    pushingObj.flag = countrydata.countryInfo.flag;
    pushingObj.continent = countrydata.continent;
    pushingObj.totalCases = countrydata.cases;
    pushingObj.activeCases = countrydata.active;
    pushingObj.recovered = countrydata.recovered;
    pushingObj.deaths = countrydata.deaths;
    // console.log(pushingObj);
    let countriesdata = [];

    countriesdata.push(pushingObj)
    console.log(countriesdata)
    let email = emailId
    let countries = countriesdata

    let token = localStorage.getItem('token');
    console.log(token)
    fetch('http://localhost:8084/favorite-service/api/v1/addfavorite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': token
      },
      body: JSON.stringify({ email, countries })
    }).then(res => {

      if (res.status == 200) {
        alert("added succesfully")
      }
      else {
        // alert("Error in adding")
      }


    });

    // console.log(sendObj);
  }

  // function AddCountryHandler(){
  //   props.AddCountryEvent({countrydata});
  //   // console.log({countrydata});
  // }


  return (
    <div>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: 'fixed', top: '0', width: '100%', display: 'block', zIndex: '10', left: '0' }}>

          <div className="container-fluid">
            <a className="navbar-brand" to="#">CovidTrack</a>
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
                      <li><Link to="/edit" className="dropdown-item">EditProfile</Link></li>
                      <li><Link to="/favorite" className="dropdown-item">Favorite</Link></li>
                    </ul>

                  </div>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </div>





      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <form className="d-flex">
              <input className="form-control me-2" type="search" value={inputCountry} onChange={(e) => setInputCountry(e.target.value)} placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" onClick={dataFetch} type="button">Search</button>
            </form>
          </div>
        </div>
      </div>
      <div data-testid="one" className="container mt-3">
        <div data-testid="two" className="row">
          <Card
            // flag={countrydata.countryInfo.flag}
            key={countrydata.country}
            country={countrydata.country}
            cases={countrydata.cases}
            active={countrydata.active}
            recovered={countrydata.recovered}
            deaths={countrydata.deaths}
            AddFavorite={addFav}
          />
        </div>
      </div>
      {/* {countrydata.map((country, i) => ( */}

      {/* <Card //AddFavorite={AddFavoriteFunction}
          // key={i}
          // flag={countrydata.countryInfo.flag}
          country={countrydata.country}
          cases={countrydata.cases}
          active={countrydata.active}
          deaths={countrydata.deaths}
        /> */}

      {/* ))} */}

      {/* <section>
        {
          countrydata.map(countrydata=> <Card country={countrydata.country}/>)
        }
      </section> */}
    </div>

  );
}
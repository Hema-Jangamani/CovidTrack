import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header1 from './components/header1/Header1';
import Header2 from './components/header2/Header2';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import { useState } from 'react';
import DashBoard from './components/dashboard/DashBoard';
import Register from './components/register/Register';
import Edit from './components/edit/Edit';
import Favorite from './components/favorite/Favorite';
// import Favorite from './components/favorite/Favorite';
// import Countrylist from './components/countrylist/Countrylist';



function App() {
  // const [searchVal, setSearchVal] = useState("");
  // function setFunc(val) {
  //   setSearchVal(val);
  // }
  return (
    <Router>
    <div className="App">
      <Header2  />
      {/* <Home /> */}
        {/* <Route exact path="/header" component={Header} /> */}
        {/* <Route exact path="/header/home" component={Header2}/> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/favorite" component={Favorite} />
        <Route exact path="/edit" component={Edit} />
        <Route exact path="/dashboard" component={DashBoard} /> 
        {/* <Route exact path="/addfavorite" component={Favorite} /> */}
     
      {/* <Login /> */}
      {/* <Dashboard /> */}
      {/* <Countrylist /> */}
      <Footer />
    </div>
    </Router>
  );
}

export default App;

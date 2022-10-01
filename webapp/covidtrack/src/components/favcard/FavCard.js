// import { Card } from "react-bootstrap";
import "./FavCard.css";
const FavCard = (props) => {
  console.log(props);
    function DeleteCountryHandler(){
      console.log(props.countryName)
        props.DeleteCountry(props.countryName);
        
    }
  return (
    
    <div className="card"> 
    {/* <img className="card__img" src={props.flag} alt="Country Flag" /> */}
    <p className="card__img">Country:</p>
    <p className="card_name">{props.countryName}</p>
    <p>Total Cases:</p>
    <p>{props.totalCases}</p>
    <p>Active Cases:</p>
    <p>{props.activeCases}</p>
    <p>Recovered:</p>
    <p>{props.recovered}</p>
    <p>deaths:</p>
    <p>{props.deaths}</p>
    {/* <i class="far fa-times-circle fa-lg float-end text-danger" onClick={DeleteCountryHandler.bind(this, props.cpuntry)}></i> */}
    <form action="#">
    <button className="btn btn-outline-danger" onClick={DeleteCountryHandler.bind(this, props.countryName)} type="button">Remove</button>
    </form>
  </div>
  
  );
  }
 
export default FavCard;
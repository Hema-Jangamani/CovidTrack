// import { Card } from "react-bootstrap";
import "./Card.css";
const Card = (props) => {
  // function AddFavoriteHandler(id){
  //   props.AddFavorite(id);
  // }
  // console.log(props.country)
  return (
            // <div class="card">
            //   <div class="card-body">
            //     {/* <i class="fas fa-heart fa-lg float-end text-danger" onClick={AddFavoriteHandler.bind(this,props.country)}></i>  */}
            //     <i class="fas fa-heart fa-lg float-end text-danger" onClick={props.AddFavorite}></i> 
            //     <p>{props.country}</p>
            //     <p>Cases:{props.cases}</p>
            //     <p>Active:{props.active}</p>
            //     <p>Recovered:{props.recovered}</p>
            //     <p>deaths:{props.deaths}</p>
            //   </div>
            // </div>
            <div>
              <div className="card"> 
            {/* <img className="card__img" src={props.flag} alt="Country Flag" /> */}
            <p className="card__img">Country:</p>
            <p className="card_name">Africa</p>
            <p>Total Cases:</p>
            <p>1725445</p>
            <p>Active Cases:</p>
            <p>6474681</p>
            <p>Recovered:</p>
            <p>727267</p>
            <p>deaths:</p>
            <p>6263654</p>
            <i class="fas fa-heart fa-lg float-end text-danger" ></i> 
            </div>
              

            <div className="card"> 
            {/* <img className="card__img" src={props.flag} alt="Country Flag" /> */}
            <p className="card__img">Country:</p>
            <p className="card_name">{props.country}</p>
            <p>Total Cases:</p>
            <p>{props.cases}</p>
            <p>Active Cases:</p>
            <p>{props.active}</p>
            <p>Recovered:</p>
            <p>{props.recovered}</p>
            <p>deaths:</p>
            <p>{props.deaths}</p>
            <i class="fas fa-heart fa-lg float-end text-danger" onClick={props.AddFavorite}></i> 
            </div>

            </div>
      
   
   
  )
};

export default Card;

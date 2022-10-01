import React from 'react'
import PropTypes from 'prop-types';
export default function CountryCard(props) {
 
    const newCard={
        id:props.key,
        flag:props.flag,
        active:props.flag
    }
  return (
    <div className="col-md-3 mt-50 offset-md-1 p-2 pt-5 text-center" style={{zIndex:'0',position:'relative'}}>
            <div className="card">
              <div className="cardsContainer img w-0 " >
                  <div className="card-body">
                      <img src={props.flag} data-testid="image" className="image" alt="image not available" style={{ height: 5 + "em" }, { width: 10 + "em" }} />
                  </div>
 
                    <h5 className="card-title">Country Details</h5>
                    <p className="card-text">{props.country}</p>
                    <p className="card-text">Cases: {props.cases}</p>
                    <p className="card-text">Deaths: {props.deaths}</p>
                </div>
            </div>
        </div>    
    );
}
CountryCard.propTypes={
    key:PropTypes.func,
    flag:PropTypes.func,
    country:PropTypes.func,
    cases:PropTypes.func,
    deaths:PropTypes.func
}  

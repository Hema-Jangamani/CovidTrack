import React,{useState} from 'react'
import Card from '../Card/Card'
import Dashboard from '../Dashboard/Dashboard'

export default function Countrylist() {
    const [country, setcountry] = useState([])
    function AddCountryFunction(country){
        // console.log(card);
        setcountry([...country,country])
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Dashboard AddCountryEvent={AddCountryFunction}/>
                </div>
                <div className="col-md-3">
                  {
                      country.map(item =>   <Card country={item.country} cases={item.cases} active={item.cases} recovered={item.recovered} deaths={item}/>)
                  }
                </div>
            </div>
        </div>
    )
}


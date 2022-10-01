import React, { useState } from 'react';
import { useState } from 'react';

const SearchCard = () => {
    const [country, setcountry] = useState([]).value;
    useEffect(() => {
        fetch('https://corona.lmao.ninja/v2/countries')
        .then(res => res.json())
        .then(data => {
            
        });
    }, [])
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="mb-2">
                        <input type="text" onChange={(e)=>setcountry(e.target.value)} className="form-control" placeholder="country" />
                    </div>
                    <div className="mb-2">
                        <button onClick={()} className="btn btn-secondary">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchCard;

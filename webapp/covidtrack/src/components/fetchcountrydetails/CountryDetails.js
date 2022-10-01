import axios from 'axios';
import React,{useState,useEffect} from 'react';

const CountryDetails = () => {
    const [loading, setloading] = useState(true)
    const [content, setcontent] = useState()
    useEffect(() => {
      async function getData(){
          const res = await axios.get('https://corona.lmao.ninja/v2/countries')
          console.log(res);
          setcontent(res.data)
          
          setloading(false)
      }
      getData()
    }, [])
    return (
        <div>
            {loading?<h1>Loading...</h1>:content.map(item=>(
                <p>{item.country}</p>
            ))}
        </div>
    );
}

export default CountryDetails;

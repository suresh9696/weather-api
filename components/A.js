import React, { useEffect, useState } from 'react';

const A = () => {
    let [city, setCity] = useState("")
    let [op, setOp] = useState({})
    let [data, setData] = useState(false)
    let[error,seterror] = useState({})

    let apikey = '8ce452aa691f1d1a43258cc5624c9287';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

    let changeHandler = e => {
        setCity(e.target.value);
    }


    let submitHandler = e => {

   if(city === ''){
    alert("enter location")
   }else{
    fetch(url)
    .then(res => res.json())
    .then(res => { 
        setOp(res); 
        setData(true)
    })
   
   }
   
    }


    console.log("error" + error)


    


    return (
        <div className='main'>
            <center >
            <div className='card'>
                <div className='card-body'>
                      <h3 className='card-title'>Weather Forecast</h3>
                      <br/>
                      <input className='text' name='city' value={city} onChange={changeHandler} placeholder='Pincode/Place' />

                    <button onClick={submitHandler} >Submit</button>
                    <img src='https://freesvg.org/img/sivvus_weather_symbols_3.png' />
                     
                {/* <p style={{color:'red'}}>{error.message}</p> */}

            {data ?
                (<div>
                    <h3>{op.name}</h3>
                    <h4>{Math.round(op.main.temp - 272)+"°C"}</h4>
                    <h5>{op.weather[0].description}</h5>

                </div>)
                :
                (<h4>No Weather Data</h4>)

            }
                </div>
            </div>
            </center>  

            

                {/* <p style={{color:'red'}}>{error.message}</p> */}

           
        </div>
    );
};

export default A;
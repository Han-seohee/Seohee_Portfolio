import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherView from './WeatherView';
import '../../Styles/Weather.css';

function Weather() {
    const key = '1b387889fa14212d8905f74ee68f22fa';
    const lat = '37.596000';
    const lon = '127.084080';
    const [data, setData] = useState([]);
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        call_Api();
    }, []);

    function call_Api() {
        axios.defaults.baseURL = "http://ec2-52-78-205-163.ap-northeast-2.compute.amazonaws.com:3000";
        axios.get("/weather", {
            params: {
                "appid" : key,
                "lat" : lat,
                "lon": lon,
                "units" : "metric",
                "lang" : "kr"
            }
        })
        .then((response) => {
            setData(response.data.response);
            setDisplay(true);
        })
        .catch((error) => {
            console.log(error);
            setDisplay(false);
        });
    }

    return(
        <>
        <h2 className={'weatherTitle'}>
        ⛅How is the weather right now❔
        </h2>
            {display ?
                <div>
                    <WeatherView data={data}/>
                </div>
                :
                <div></div>}
        </>
    )
}

export default Weather;
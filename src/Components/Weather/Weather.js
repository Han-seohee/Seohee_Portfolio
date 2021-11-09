import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherView from './WeatherView';

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
        axios
        .get("weather/data/2.5/weather",{
        params: {
            "appid" : key,
            "lat" : lat,
            "lon": lon,
            "units" : "metric",
            "lang" : "kr"
        }
        })
        .then((response) => {
            setData(response.data);
            setDisplay(true);
        })
        .catch((error) => {
            console.log(error);
            setDisplay(false);
        })
    }

    return(
        <>
        {/* <p>
            안녕하세요? 날씨를 볼 수 있는 페이지입니다.
        </p> */}
            {/* <button onClick={call_Api}>날씨</button> */}
            {display ?
                <div>
                    <WeatherView data={data}/>
                </div>
                :
                <div></div>}
        </>
    )
}

// 별표 5조5억개
export default Weather;
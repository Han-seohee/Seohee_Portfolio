import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { icons } from 'react-icons';

function WeatherView(props) {
    const weather_name = props.data.name;
    const weather_now = props.data.weather[0].main; // 현재 날씨 요약
    const weather_desc = props.data.weather[0].description; // 현재 날씨 요약
    const weather_icon = props.data.weather[0].icon;
    const weather_temp = props.data.main.temp;
    const weather_fellsLike = props.data.main.feels_like;
    const weather_pressure = props.data.main.pressure;
    const weather_humidity = props.data.main.humidity;
    const wind_speed = props.data.wind.speed;

    // 여기에서 props를 console로 출력하면서 하나하나 더 보십쇼~
    console.log(props);
    console.log(props.data);
    console.log(props.data.weather);
    console.log(props.data.main);
    console.log(props.data.main.temp);
    console.log(props.data.main.feels_like);
    console.log(props.data.main.pressure);
    console.log(props.data.main.humidity);
    console.log(props.data.wind.speed);
    const url = `http://openweathermap.org/img/w/${weather_icon}.png`;
    // http://openweathermap.org/img/wn/${weather_icon}@2x.png

    return (
        <>
            <Table striped bordered hover size="lg">
                <thead>
                    <tr>
                        <td>도시이름</td>
                        <td>{weather_name}</td>{/*??*/}
                    </tr>
                    <tr>
                        <td>현재 날씨</td>
                        <td>{weather_now}({weather_desc})</td>
                    </tr>
                    <tr>
                        <td>현재 날씨(아이콘)</td>
                        <td>
                            <img src={url}/>
                        </td>{/*??*/}
                    </tr>
                    <tr>
                        <td>기온</td>
                        <td>{weather_temp} ℃</td>
                    </tr>
                    <tr>
                        <td>체감온도</td>
                        <td>{weather_fellsLike} ℃</td>
                    </tr>
                    <tr>
                        <td>기압</td>
                        <td>{weather_pressure} hPa</td>
                    </tr>
                    <tr>
                        <td>습도</td>
                        <td>{weather_humidity} %</td>
                    </tr>
                    <tr>
                        <td>풍속</td>
                        <td>{wind_speed} m/s</td>
                    </tr>
                </thead>
            </Table>
        </>
    )
}

export default WeatherView;
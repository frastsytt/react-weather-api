import React from 'react';

const Weather = (props) => {
    return (
        <div className='card mx-5 bg-info bg-opacity-10'>
            <h2>{props.city.name}</h2>
            <p>Description: {props.city.desc}</p>
            <p>Temperature: <b>{props.city.temp}°C</b></p>
        </div>
    );
}
export default Weather;
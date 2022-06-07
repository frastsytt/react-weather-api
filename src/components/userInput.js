import React, { useState } from 'react';

const WeatherForm = (props) => {
    const [city, setCity] = useState('Tartu');

    const submitHandler = (event) => {
        event.preventDefault();
        props.onChangeCity(city);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label className='h5'>Change city:</label> <br></br>
                <input className='text-center w-50' onChange={(e) => setCity(e.target.value)}/>
                <br></br><button className='btn btn-primary mt-2' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default WeatherForm;
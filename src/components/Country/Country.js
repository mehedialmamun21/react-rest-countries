import React from 'react';
import './Country.css'

const Country = (props) => {

    const { area, capital, population, name } = props.country;

    return (
        <div className='country'>
            <h2>Country Name : {name.common}</h2>
            <h3>Capital : {capital}</h3>
            <h4>Area : {area}</h4>
            <h3>Population : {population}</h3>
        </div>
    );
};

export default Country;
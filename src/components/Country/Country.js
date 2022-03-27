import React from 'react';
import './Country.css'

const Country = (props) => {
    /* console.log(props); */
    return (
        <div className='country'>
            <h2>Country Name : {props.name}</h2>
            <h3>Capital : {props.capital}</h3>
            <h4>Area : {props.area}</h4>
            <h3>Population : {props.population}</h3>
        </div>
    );
};

export default Country;
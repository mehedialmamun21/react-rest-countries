import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h3>Length of Countries : {countries.length}</h3>
            {/* {
                countries.map(country => console.log(country))
            } */}
            {
                countries.map(country => <Country
                    name={country.name.common}
                    capital={country.capital}
                    area={country.area}
                    population={country.population} ></Country>)
            }
        </div>
    );
};

export default Countries;
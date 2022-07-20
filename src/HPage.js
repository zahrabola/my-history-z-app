import React, { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
const HPage = () => { 
    const [country, setCountry] = useState([]);

const { info} = useParams();

useEffect(() => {
  const fetchCountryData = async () => {
    const response = await fetch(
      `https://black-history-month-api.herokuapp.com/people`
    );
    const country = await response.json();
    setCountry(country);
    console.log(country);
  };
  fetchCountryData();
}, [info]);

return (
  <>
  
    <h1 className="countrytitle"> Country Data </h1>
    <section className="country">
      {country.map((c) => {
        const { died, name, description,dob, age, knownFor, } = c;

        return (
          <article>
            <div className="countrydetail">
              <h2>{name}</h2>
              <ol className="card-list">
                <li>
                  name 2: <span>{name}</span>
                </li>
                <li>
                  population: <span>{description}</span>
                </li>
                <li>
                  Year of Death: <span>{died}</span>
                </li>
                <li>
                  Date of Birth: <span>{dob}</span>
                </li>
                <li>
                  Age: <span>{age}</span>
                </li>

                <li>
                  Occupation: <span>{knownFor}</span>
                </li>
              </ol>
            </div>
          </article>
        );
      })}
    </section>
  </>
);
  }


export default HPage;

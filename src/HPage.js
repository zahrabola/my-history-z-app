import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HPage = ({  }) => {
    const [page, setPage] = useState();



  const { info } = useParams();

  useEffect(() => {
    const fetchPageData = async () => {
      const response = await fetch(`https://restcountries.com/v2/name/${info}`);
      const page = await response.json();
     setPage(page);
      console.log(page);
    };
    fetchPageData();
  }, [info]);

  
  return (
    <>
      <h1> Hello </h1>

      <section>
        {page.map((p) => {
          const { dob, name } = p;

          return (
            <article>
              <div className="countrydetail">
                <p>Name {name}</p>
                <p>Date of {dob}</p>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};










export default HPage; 
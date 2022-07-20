import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Search from "./Search";
import BlackH from "./BlackH";
import CenteredModal from "./CenteredModal";
import Button from "react-bootstrap/Button";


//import HPage from "./HPage";
//import axios from "axios";
///https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/

function History () {
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);
          const [text, setText] = useState("");
const [modalShow, setModalShow] = useState (false)
         const [searchParam] = useState(["name"]);

         function search(items) {
           return items.filter((item) => {
             return searchParam.some((newItem) => {
               return (
                 item[newItem]
                   .toString()
                   .toLowerCase()
                   .indexOf(text.toLowerCase()) > -1
               );
             });
           });
         }


        useEffect(() => {
            fetch("https://black-history-month-api.herokuapp.com/people")
              .then((res) => res.json())
              .then(
                (result) => {
                  setIsLoaded(true);
                  setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                  setIsLoaded(true);
                  setError(error);
                }
              );
        }, []);

        if (error) {
            return <>{error.message}</>;
        } else if (!isLoaded) {
            return <>    loading...</>;
        } else {
            return (
              /* here we map over the element and display each item as a card  */
              <div className="wrapper">
                <BlackH />
                <Container>
                  <Search setText={setText} />
                  <Row>
                    <Col md="5">
                      {" "}
                      <ul className="card-grid">
                        {search(items).map((item) => (
                          <li>
                            <article className="card" key={item.id}>
                              <div className="card-image">
                                <img src={item.image} alt={item.name} />
                              </div>
                            </article>
                             <section className="cards">
                       
                          <div className="card-content">

 <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <CenteredModal
        show={modalShow}
        item={item}
        onHide={() => setModalShow(false)}
      />
  

                            <h2 className="card-name">{item.name}</h2>
                            <ol className="card-list">
                              <li>
                                name 2: <span>{item.name}</span>
                              </li>
                              <li>
                                population: <span>{item.description}</span>
                              </li>
                              <li>
                                Year of Death: <span>{item.died}</span>
                              </li>
                              <li>
                                Date of Birth: <span>{item.dob}</span>
                              </li>
                              <li>
                                Age: <span>{item.age}</span>
                              </li>

                              <li>
                                Occupation: <span>{item.knownFor}</span>
                              </li>
                            </ol>
                     </div>
                      </section>
                          </li>
                          
                        ))}
                      </ul>
                     
                    </Col>
                  </Row>
                </Container>
              </div>
            );
        }

      }








export default History;
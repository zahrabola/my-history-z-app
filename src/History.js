import React, { useState, useEffect } from "react";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
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
              <div className="wrapper">
                <BlackH />
                <div className="container">
                  <div className="row">
                    <Search setText={setText} />
                  </div>

                  <div className="row">
                    <div className="col">
                      {" "}
                      <div className="card-grid">
                        {search(items).map((item) => (
                          <div>
                            <article
                              className="card"
                              key={item.id.toString()}
                              value={item}
                            >
                              <div className="card-image">
                                <img src={item.image} alt={item.name} />
                              </div>
                            </article>
                            <section className="cards">
                              <div className="card-content">
                                <Button
                                  variant="primary"
                                  onClick={() => setModalShow(true)}
                                >
                                  {item.name}
                                </Button>
                              </div>
                              <CenteredModal
                                show={modalShow}
                                item={item}
                                item={item.toString()}
                                onHide={() => setModalShow(false)}
                              />
                            </section>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
        }

      }








export default History;
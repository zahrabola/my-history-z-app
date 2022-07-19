import React from "react";
import { Button, Row, Col } from "react-bootstrap";




function  BlackH()
{
 return (
   <div className="App">
     <span className="badge bg-danger">React JS component</span> <br />
  
     <Row className="mx-0">
       <Button as={Col} variant="primary">
         Button #1
       </Button>
       <Button as={Col} variant="secondary" className="mx-2">
         Button #2
       </Button>
       <Button as={Col} variant="success">
         Button #3
       </Button>
     </Row>
   </div>
 );


}
export default BlackH;

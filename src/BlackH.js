import React, { useState, useEffect } from "react";
import axios from "axios";
import History from "./History";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function  BlackH()
{
    return (
  <Container>
      <Row>
    <History />
      </Row>
    </Container>
    )
}
export default BlackH;

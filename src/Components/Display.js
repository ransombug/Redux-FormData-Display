import React from 'react';
import { ListGroup, ListGroupItem, Label, Card, Button, CardTitle, CardText, Row, Col} from "reactstrap";

import '../App.css';

//redux
import { connect } from "react-redux";

const Display = ({ inp }) => {

  console.log(inp)
    return (
      <div>
   
        {/* <ListGroup className="mt-5 mb-2">
          {inp.map((x,index) => (
            <ListGroupItem key={index}>{x?.title}{x?.msg}</ListGroupItem>
          ))} 
        </ListGroup> */}

        <Row id="redu">
          <Col sm="12" lg="4">
            <Card id="redu" body inverse color="info">
              <CardTitle tag="h5">First Name</CardTitle>
              <CardText>{inp[0]?.fname}</CardText>
            </Card>
          </Col>
          <Col sm="12" lg="4">
            <Card id="redu" body inverse color="info">
              <CardTitle tag="h5">Last Name</CardTitle>
              <CardText>{inp[0]?.lname}</CardText>
            </Card>
          </Col>
          <Col sm="12" lg="4">
            <Card id="redu" body inverse color="info">
              <CardTitle tag="h5">Address</CardTitle>
              <CardText>{inp[0]?.msg}</CardText>
            </Card>
          </Col>
        </Row>

      </div>
          
    )
};

const mapStateToProps = (state) => ({
    inp : state.data,
})

const mapDispatchToProps = (state) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Display);

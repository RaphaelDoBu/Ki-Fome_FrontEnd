import React from 'react';
import {Card, Button, CardTitle, CardText, Container, Row, Col } from 'reactstrap';


export default class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render() {

        return (
            <Container>
                <h1>Preço total: {this.props.preco}</h1>
            </Container>
            
        );
  }
}

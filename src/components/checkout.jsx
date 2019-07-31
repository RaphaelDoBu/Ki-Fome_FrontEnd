import React from 'react';
import {Card, Button, CardTitle, CardText, Container, Row, Col, CardBody, CardSubtitle, CardLink } from 'reactstrap';


export default class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render() {

        return (
            <Container>
                <Card>
                    <CardBody>
                        <CardTitle><h2>Checkout</h2></CardTitle>
                        <CardSubtitle><h4>Nome: Usuário</h4></CardSubtitle>
                    </CardBody>
                    <CardBody>
                        <div>
                            {this.props.comida.map((comidaCheckout, index) =>
                            <div key={index}>
                                <CardText>{comidaCheckout.qtd}x {comidaCheckout.nome}.........{comidaCheckout.preco}</CardText>
                            </div>
                            )
                            }
                        </div>
                        <CardLink href="#">Card Link</CardLink>
                        <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                </Card>
            </Container>
            
        );
  }
}

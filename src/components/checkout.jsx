import React from 'react';
import {Card, Button, CardTitle, CardText, Container, Row, Col, CardBody, CardLink } from 'reactstrap';


export default class Checkout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            precoFinalCheckout: props.comida[0].precoFinal
        }
    }

    componentDidUpdate() {
        var somatorioPreco = 0;
        var somatorioPrecoAnterior = this.state.precoFinalCheckout;

        this.props.comida.map((comidaPreco) => {
            somatorioPreco += comidaPreco.precoFinal
        })

        if(somatorioPrecoAnterior !== somatorioPreco){
            this.setState({
                precoFinalCheckout: somatorioPreco
            })
        }
    }

    acrescentarComidaCheckout= (comidaNome, comidaPreco) => {
        this.props.valorProduto(comidaNome, comidaPreco, "acrescentar");
    }

    diminuirComidaCheckout = (comidaNome, comidaPreco) => {
        this.props.valorProduto(comidaNome, comidaPreco, "diminuir");
    }

    render() {
        return (
            <Container>
                <Card color="light" style={{borderRadius: 10, borderWidth:4}}>
                    <CardBody bordered>
                        <Row className="justify-content-md-center">
                            <CardTitle>
                                <h2>Checkout</h2>
                            </CardTitle>
                        </Row>
                        <CardText>Pedidos: </CardText>
                            {this.props.comida.map((comidaCheckout, index) =>
                            <div key={index}>
                                <Row>
                                    <Col xs="8">
                                        <CardText >{comidaCheckout.qtd}x {comidaCheckout.nome}.........R$ {comidaCheckout.precoFinal}</CardText>
                                    </Col>
                                    <Col xs="1">
                                        <Button onClick={() => this.acrescentarComidaCheckout(comidaCheckout.nome, comidaCheckout.precoFinal)}>+</Button>
                                    </Col>
                                    <Col xs="1">
                                        <Button onClick={() => this.diminuirComidaCheckout(comidaCheckout.nome, comidaCheckout.precoFinal)}>-</Button>
                                    </Col>
                                </Row>
                                <Card></Card>
                            </div>
                            )
                            }
                        <h4>Preço Final: R$ {this.state.precoFinalCheckout}</h4>
                        <CardLink href="#">Finalizar Pedido</CardLink>
                    </CardBody>
                </Card>
            </Container>
            
        );
  }
}

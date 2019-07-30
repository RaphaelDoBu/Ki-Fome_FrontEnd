import React from 'react';
import {Card, Button, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
import Checkout from '../components/checkout'

export default class Comidas extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            preco : 0.0
        }
    }

    valorProduto = (precoComida) =>{
        const somaPrecoComida = precoComida + this.state.preco;

        this.setState({
            preco : somaPrecoComida
        })
        
    }

    exibirCheckout = () =>{
        if(this.state.preco > 0.0){
            return <Checkout comida={this.state.nomeComida} preco={this.state.preco}></Checkout>
        }
    }
   
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="6">
                        <h4>Comida Selecionada: {this.props.tipo}</h4>
                        <div>
                            {this.props.tipoComidaFiltrada.map((comida, index) =>
                                <div key={index}>
                                    <Card body>
                                        <CardTitle>{comida.title}</CardTitle>
                                        <CardText>{comida.price}</CardText>
                                        <Button onClick={()=> this.valorProduto(comida.price)}>Adicionar ao carrinho</Button>
                                    </Card>
                                </div>
                                )
                            }
                        </div>
                    </Col>
                    <Col xs="6">
                        {this.exibirCheckout()}
                    </Col>
                </Row>
                    
            </Container>
            
        );
  }
}

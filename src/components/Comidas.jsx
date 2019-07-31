import React from 'react';
import {Card, Button, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
import Checkout from '../components/checkout'

export default class Comidas extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            preco : 0.0,
            comidaCheckout: []
        }
    }

    valorProduto = (nomeComida, precoComida) =>{
        const somaPrecoComida = precoComida + this.state.preco;
        const comida = {'nome':nomeComida, 'preco':precoComida, 'qtd':1}
        var indexEncontrado = -1

        if(this.state.comidaCheckout.length > 0){
            indexEncontrado = this.state.comidaCheckout.findIndex(verificarComida => {
                return verificarComida.nome === nomeComida;
            })

            if(indexEncontrado >= 0){
                var comidaIndex = [...this.state.comidaCheckout];
                comidaIndex[indexEncontrado].qtd = comidaIndex[indexEncontrado].qtd + 1;
                this.setState({
                    comidaCheckout: comidaIndex,
                })
            }
            else{
                this.setState({
                    comidaCheckout: [...this.state.comidaCheckout, comida],
                    preco : somaPrecoComida
                });
                this.comida = {}
            }
    
        }
       
        else{
            this.setState({
                comidaCheckout: [comida],
                preco : somaPrecoComida
            });
            this.comida = {}
        }
    }

    exibirCheckout = () =>{
        if(this.state.preco > 0.0){
            return <Checkout comida={this.state.comidaCheckout} preco={this.state.preco}></Checkout>
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
                                    <Button onClick={()=> this.valorProduto(comida.title,comida.price)}>
                                        Adicionar ao carrinho
                                    </Button>
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

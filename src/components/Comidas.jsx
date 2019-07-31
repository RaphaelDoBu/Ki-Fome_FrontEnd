import React from 'react';
import {Card, Button, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
import Checkout from '../components/checkout'

export default class Comidas extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            precoFinalCheckout : 0.0,
            comidaCheckout: []
        }
    }

    valorProduto = (nomeComida, precoComida, alteracaoQtdPedido) => {
        if(alteracaoQtdPedido === 'acrescentar'){
            const comida = {'nome':nomeComida, 'precoUnidade':precoComida, 'precoFinal': precoComida,'qtd':1}
            var indexEncontrado = -1
    
            if(this.state.comidaCheckout.length > 0){
                indexEncontrado = this.state.comidaCheckout.findIndex(verificarComida => {
                    return verificarComida.nome === nomeComida;
                })
    
                if(indexEncontrado >= 0){
                    var comidaIndex = [...this.state.comidaCheckout];
                    comidaIndex[indexEncontrado].qtd = comidaIndex[indexEncontrado].qtd + 1;
                    comidaIndex[indexEncontrado].precoFinal = comidaIndex[indexEncontrado].precoUnidade * comidaIndex[indexEncontrado].qtd
                    this.setState({
                        comidaCheckout: comidaIndex,
                    })
                }
                else{
                    this.setState({
                        comidaCheckout: [...this.state.comidaCheckout, comida]
                    });
                    this.comida = {}
                }
        
            }
           
            else{
                this.setState({
                    comidaCheckout: [comida]
                });
                this.comida = {}
            }
        }

        else{
            var comidaIndex = [...this.state.comidaCheckout];
            indexEncontrado = this.state.comidaCheckout.findIndex(verificarComida => {
                return verificarComida.nome === nomeComida;
            })

            if(comidaIndex[indexEncontrado].qtd >1){
                comidaIndex[indexEncontrado].qtd = comidaIndex[indexEncontrado].qtd - 1;
                comidaIndex[indexEncontrado].precoFinal = comidaIndex[indexEncontrado].precoUnidade * comidaIndex[indexEncontrado].qtd
                this.setState({
                    comidaCheckout: comidaIndex,
                })
            }

            else{
                comidaIndex.splice(indexEncontrado,1);
                this.setState({
                    comidaCheckout: comidaIndex
                })
            }
         
        }
           
    }

    exibirCheckout = () => {
        if(this.state.comidaCheckout.length > 0){
            return <Checkout valorProduto={this.valorProduto} comida={this.state.comidaCheckout} precoTotal={this.state.precoFinalCheckout}></Checkout>
        }
    }
   
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="6">
                        <h4>Tipo de Comida Selecionada: {this.props.tipo}</h4>
                        <div>
                            {this.props.tipoComidaFiltrada.map((comida, index) =>
                            <div key={index}>
                                <Card body>
                                    <CardTitle>{comida.title}</CardTitle>
                                    <CardText>{comida.price}</CardText>
                                    <Button onClick={()=> this.valorProduto(comida.title,comida.price, "acrescentar")}>
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

import React from 'react';
import { Button, Row, Col, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice, faAlignJustify, faFish, faHamburger, faBirthdayCake, faLeaf } from '@fortawesome/free-solid-svg-icons'
import Comidas from '../components/Comidas.jsx'
import Menu from '../database/menu.json'

export default class Categorias extends React.Component {
    constructor(props) {
        super(props);
        this.tipoComida = this.tipoComida.bind(this);
        this.filtrarTipoComida = this.filtrarTipoComida.bind(this)

        this.state = { 
            tipoComida: '', 
            comida: []
         };
    }
   
    tipoComida = (tipoEscolhido) => {
        this.setState({
            tipoComida: tipoEscolhido
        })
        
        this.filtrarTipoComida(tipoEscolhido)
    }

    filtrarTipoComida = (tipoComida) => {

        if(tipoComida == "all"){
            this.setState({
                comida: Menu["food"]
            })
        }
        else{
            let comidaFiltrada = Menu["food"].filter((comida) => {
                return comida.cuisine === tipoComida;
            })

            this.setState({
                comida: comidaFiltrada
            })
        }
    }

    render() {
    return (
        <Container>
            <Row></Row>
            <Row className="justify-content-md-center">
                <Col sm="auto">
                    <Button tipo="todos" onClick={() => this.tipoComida("all")}>All
                        <p></p>
                        <FontAwesomeIcon icon={faAlignJustify}></FontAwesomeIcon>
                    </Button>{' '}
                    <Button color="primary" onClick={() => this.tipoComida("chinese")}>Chinese
                        <p></p>
                        <FontAwesomeIcon icon={faFish}></FontAwesomeIcon>
                    </Button>{' '}
                    <Button color="success" onClick={() => this.tipoComida("burgers")}>Burgers
                        <p></p>
                        <FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon>
                    </Button>{' '}
                    <Button color="info" onClick={() => this.tipoComida("salad")}>Salad
                        <p></p>
                        <FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon>
                    </Button>{' '}
                    <Button color="warning" onClick={() => this.tipoComida("cake")}>Cake
                        <p></p>
                        <FontAwesomeIcon icon={faBirthdayCake}></FontAwesomeIcon>
                    </Button>{' '}
                    <Button color="danger" onClick={() => this.tipoComida("pizza")}>Pizza
                        <p></p>
                        <FontAwesomeIcon icon={faPizzaSlice}></FontAwesomeIcon>
                    </Button>{' '}
                </Col>
            </Row>
            <Comidas tipo={this.state.tipoComida} tipoComidaFiltrada={this.state.comida}></Comidas>
        </Container>
    );
  }
}

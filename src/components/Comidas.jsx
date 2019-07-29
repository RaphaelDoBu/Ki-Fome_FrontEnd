import React from 'react';
import { Button, Row, Col, Container } from 'reactstrap';
import Menu from '../database/menu.json'


export default class Comidas extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        return (
            <Container>
                <h1>aqui</h1>
                <div>{this.props.tipo}</div>
                <div>{Menu["food"].map((value) =>
                    <div>
                        <span>{value.title}</span>
                        {/* <span>{value.name}</span>
                        <span>{value.agency}</span> */}
                    </div>)
                    } 
                </div>
            </Container>

            
        );
  }
}

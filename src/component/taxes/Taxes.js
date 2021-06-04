import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Taxes extends Component{
    render() {
        return(
            <Row className="show-grid">
                <Col md={6}>
                    Taxes et frais
                </Col>
                <Col md={6}>
                    {`$${this.props.price}`}
                </Col>
                <Col md={12}>
                    <hr/>
                </Col>
            </Row>
        )
    }
}
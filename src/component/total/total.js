import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';


var styles = {
    reduction: {
        textDecoration: 'underline'
    },
    totalReduc: {
        color: 'red',
        fontWeight: 800
    }
}
export default class Total extends Component{
    render() {
        return(
            <Row className="show-grid">
                <Col md={6}>
                    Total
                </Col>
                <Col md={6}>
                    {`$${this.props.price}`}
                </Col>
                <Col md={6} >
                
                <div style={styles.reduction}>
                 reduction
                </div>
          
        </Col>
        <Col style={styles.totalReduc} md={6}>
        {`$${this.props.reduc}`}
        </Col>
            </Row>
        )
    }
}
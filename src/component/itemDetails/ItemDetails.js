import React, {Component} from 'react';
import { Row, Col, Button, Collapse } from 'react-bootstrap';

class  ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            open: false
         }
    }
    render() { 
        return (  
            <div className="item-details">
            <Button 
            className="item-button"
            variant='link'
            onClick= {() => this.setState({open: !this.state.open })}>
                { this.state.open === false ? `See` : `Hide`} item details
                { this.state.open === false ? ` +`: ` -`}
            </Button>
            <Collapse in={this.state.open}>
            <div className="box-details" >
                            
                            <Row className="show-grid">
                                <Col md={6}>
                                <img className="img-details" width={100} height={150} src="https://images-na.ssl-images-amazon.com/images/I/81C8HowNZIL._AC_UY500_.jpg" alt="" />
                                </Col>
                                <Col md={6} >
                                <p className="txt-details"> Chemise Miami a fleurs, parfaite pour l'été !!</p>
                                <Row>
                                <Col md={6}>
                                
                                <strong> {`$${this.props.price}`} </strong>
                                    <br/>
                                    <strong className="price-strike"> {`$${this.props.price}`}  </strong>
                                </Col>
                                <Col md={6} >
                                    Qty: 1
                                </Col>
                                </Row>
                                
                                </Col>
                                
                            </Row>
                       
            </div>
        
            </Collapse>
            </div>
            

        );
    }
}
 
export default ItemDetails;
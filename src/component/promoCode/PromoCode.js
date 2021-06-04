import React, {Component} from 'react';

import {
    Button,
    Collapse,
    Row,
    Col,
    FormGroup,
    Form,
    FormControl
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleChange } from '../../actions/promoCodeActions';

class PromoCode extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            open: false
         };
    }

    handleChange = e => {
        this.props.handleChange(e);
    };

    render() { 
        return ( 
            <div >
                  <Button 
            className="item-button"
            variant='link'
            onClick= {() => this.setState({open: !this.state.open })}>
                { this.state.open === false ? `Apply` : `Hide`} enter PromoCode
                { this.state.open === false ? ` +`: ` -`}
            </Button>
            <div className="box-details">
            <Collapse in={this.state.open}>
                <Row className="show-grid" >
                    <Col md={8} >
                        <FormGroup>
                            <Form.Label className='txt-promo'>Promo Code :</Form.Label>
                            <FormControl
                            type="text"
                            placeholder="enter promo code"
                            className="form-promo"
                            value={this.props.promocode}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <Button
                        block
                        variant='success'
                        className="btn-round"
                        disabled={this.props.isDisabled}
                        onClick={this.props.giveDiscount}
                        >
                        Apply
                        </Button>
                        </Col>
                    
                    
                </Row>
            </Collapse>
                       
            </div>
            </div>
         );
    }
}
 
const mapStateProps = state => ({
    promoCode: state.promoCode.value
});

export default connect(mapStateProps, {handleChange}) (PromoCode) ;
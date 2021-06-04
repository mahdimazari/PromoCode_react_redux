import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import './App.css'
import Total from './component/total/total';
// import Reduction from './component/reduction/Reduction';
import Taxes from './component/taxes/Taxes';
import TotalEstim from './component/totalestim/TotalEstim'
import ItemDetails from './component/itemDetails/ItemDetails';
import PromoCode from './component/promoCode/PromoCode';
import {connect} from 'react-redux';
import { handleChange } from './actions/promoCodeActions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      total: 180,
      somreduc: -3.85,
      taxes: 0,
      totalestim: 0,
      disablePromo: false
    };
  }

  componentDidMount() {
    this.setState({
      taxes: (this.state.total + this.state.somreduc) * 0.0875
    },
    function() {
      this.setState({
        totalestim: 
        this.state.total + this.state.somreduc + this.state.taxes
      })
    }
    );
  };

  giveDiscountHandler = () => {
    if (this.props.promoCode === 'DISCOUNT'){
      this.setState({
        totalestim : this.state.totalestim * 0.75
      },
      function(){
        this.setState({
          disablePromoButton: true
        });
      
      }
      );
    }
  }
  render() { 
    return ( 
      <div className="container">
        <Row className="purchase-card">
          <Total price={this.state.total.toFixed(2)} reduc={this.state.somreduc.toFixed(2)} />
          <br/>
          {/* <Reduction price={this.state.somreduc.toFixed(2)} /> */}
          <Taxes price={this.state.taxes.toFixed(2) } />
          <hr />
          <TotalEstim price={this.state.totalestim.toFixed(2)} />
          <ItemDetails price={this.state.totalestim.toFixed(2)}/>
          <hr />
          <PromoCode 
          giveDiscount={ () => this.giveDiscountHandler()}
          isDisabled = { this.state.disablePromoButton}
          /> 
        </Row>
      </div>
     );
  }
}
 const mapStateToProps = state => ({
   promoCode: state.promoCode.value
 })
export default connect(mapStateToProps, {handleChange}) (App);


import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Detail from '../../components/products/Detail';
import ProductSelected from '../../components/products/ProductSelected';

import {getSelectedProducts, getProduct} from '../../actions/product-action';

class Single extends Component{
  render() {
    var elmnt = document.getElementById("product-single");
    if (elmnt !== null) {
      elmnt.scrollIntoView({behavior: "smooth"});
    }
    return(
      <React.Fragment>
        <main className="detail gadget" id="product-single">
          <div className="wrapper">
            <Detail
              data={this.props.product}
            />
          </div>
          <ProductSelected
            data={this.props.selectedProducts}
          />
        </main>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state){
  return {
    selectedProducts: state.product.selectedProducts,
    product: state.product.product,
  };
};
function mapDispatchToProps(dispatch, props){
  return bindActionCreators({
    getSelectedProducts: dispatch(getSelectedProducts()),
    getProduct: dispatch(getProduct(props.match.params.slug))
  }, dispatch)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Single));
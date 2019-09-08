import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Detail from '../../components/products/Detail';
import ProductSelected from '../../components/products/ProductSelected';

import {getSelectedProducts, getProduct} from '../../actions/product-action';

class Single extends Component{
  render() {
    return(
      <React.Fragment>
        <main className="detail gadget">
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
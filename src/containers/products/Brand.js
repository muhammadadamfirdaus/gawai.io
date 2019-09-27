import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../../components/products/Header';
import ProductBrand from '../../components/products/Brand';
import ProductSelected from '../../components/products/ProductSelected';
import PostRelated from '../../components/posts/Related';
import Tag from '../../components/Tag';

import {getProductsByBrand} from '../../actions/product-action';
import {getBrand} from '../../actions/brand-action';

class Brand extends Component{
  render() {
    var elmnt = document.getElementById("product-brand");
    if (elmnt !== null) {
      elmnt.scrollIntoView({behavior: "smooth"});
    }
    return(
      <React.Fragment>
        <main className="detail category" id="product-brand">
          <Header
            data={this.props.brand}
          />
          <section class="col-2">
            <div class="wrapper">
              <aside class="right">
                <PostRelated
                  data={this.props.brand}
                />
                <section class="card tags">
                  {/* <Tag/> */}
                </section>
              </aside>
              <div class="left gadget-index">
                <ProductBrand
                  data={this.props.products}
                />
              </div>
            </div>
          </section>
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
    products: state.product.products,
    brand: state.brand.brand,
  };
};
function mapDispatchToProps(dispatch, props){
  return bindActionCreators({
    getProductsByBrand: dispatch(getProductsByBrand(props.match.params.slug)),
    getBrand: dispatch(getBrand(props.match.params.slug))
  }, dispatch)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Brand));
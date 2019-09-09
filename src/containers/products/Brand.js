import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../../components/products/Header';
import ProductBrand from '../../components/products/Brand';
import ProductSelected from '../../components/products/ProductSelected';
import PostRelated from '../../components/posts/Related';
import Tag from '../../components/Tag';

class Brand extends Component{
  render() {
    return(
      <React.Fragment>
        <main className="detail category">
          <Header/>
          <section class="col-2">
            <div class="wrapper">
              <aside class="right">
                <PostRelated/>
                <section class="card tags">
                  {/* <Tag/> */}
                </section>
              </aside>
              <div class="left gadget-index">
                <ProductBrand/>
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
    selectedProducts: state.product.selectedProducts
  };
};
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    
  }, dispatch)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Brand));
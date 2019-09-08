import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MostPopular from '../../components/posts/MostPopular';
import Header from '../../components/posts/Header';
import Detail from '../../components/posts/Detail';
import Tag from '../../components/Tag';
import ProductSelected from '../../components/products/ProductSelected';

import {getPopularPosts, getPost} from '../../actions/post-action';
import {getSelectedProducts} from '../../actions/product-action';

class Single extends Component{  
  render() {
    return(
      <React.Fragment>
        <main className="detail" itemScope itemType="http://schema.org/Article">
          <Header
            data={this.props.post}
          />
          <section className="col-2">
            <div className="wrapper">
              <aside className="right">
                <MostPopular
                  data={this.props.popularPosts}
                />
              </aside>
              <div className="left">
                <div className="wrapper">
                  <Detail
                    data={this.props.post}
                  />
                  <Tag/>
                </div>
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
    popularPosts: state.post.popularPosts,
    post: state.post.post,
    selectedProducts: state.product.selectedProducts
  };
};
function mapDispatchToProps(dispatch, props){
  return bindActionCreators({
    getPopularPosts: dispatch(getPopularPosts()),
    getPost: dispatch(getPost(props.match.params.slug)),
    getSelectedProducts: dispatch(getSelectedProducts())
  }, dispatch)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Single));
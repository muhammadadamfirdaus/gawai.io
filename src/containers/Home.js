import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Headline from '../components/Headline';
import Tag from '../components/Tag';
import MostPopular from '../components/posts/MostPopular';
import PostByBrand from '../components/posts/PostByBrand';
import ProductSelected from '../components/products/ProductSelected';

import {getSelectedProducts} from '../actions/product-action';
import {getPostsHeadline} from '../actions/post-action';

class Home extends Component{
  render(props) {
    return(
      <React.Fragment>
        <main className="home">
          <Headline
            data={this.props.postHeadlines}
          />
          <section className="col-2">
            <div className="wrapper">
              <aside className="right">
                <MostPopular
                  data={this.props.popularPosts}
                />
              </aside>
              <div className="left">
                <PostByBrand/>
              </div>
            </div>
          </section>
          <ProductSelected
            data={this.props.selectedProducts}
          />
          <section className="col-2">
            <div className="wrapper">
              <aside className="right">
                <Tag
                  data={this.props.popularTags}
                />
              </aside>
              <div className="left">
                <PostByBrand/>
              </div>
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state){
  return {
    popularPosts: state.post.popularPosts,
    popularTags: state.post.popularTags,
    selectedProducts: state.product.selectedProducts,
    postHeadlines: state.post.headlines
  };
};
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getSelectedProducts: dispatch(getSelectedProducts()),
    getPostsHeadline: dispatch(getPostsHeadline())
  }, dispatch)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home));
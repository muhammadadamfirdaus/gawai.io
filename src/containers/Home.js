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
import {getBrands} from '../actions/brand-action';

class Home extends Component{
  render(props) {
    let brands = this.props.brands;
    let brands1 = [];
    let brands2 = [];
    brands.map((data, i) => {
      if (i < 3) {
        brands1.push(data);
      }else{
        brands2.push(data);
      }
    })
    var elmnt = document.getElementById("home");
    if (elmnt !== null) {
      elmnt.scrollIntoView({behavior: "smooth"});
    }
    return(
      <React.Fragment>
        <main className="home" id="home">
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
                <PostByBrand
                  data={brands1}
                />
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
                <PostByBrand
                  data={brands2}
                />
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
    postHeadlines: state.post.headlines,
    brands: state.brand.brands
  };
};
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getSelectedProducts: dispatch(getSelectedProducts()),
    getPostsHeadline: dispatch(getPostsHeadline()),
    getBrands: dispatch(getBrands())
  }, dispatch)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home));
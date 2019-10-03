import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Footer from '../components/footers/Footer';
import Header from '../components/headers/Header';
import ProductSelected from '../components/products/ProductSelected';

import {getPopularTags, getPopularPosts} from '../actions/post-action';
import {getClassifications} from '../actions/classification-action';

class Layout extends Component {
  state = {
  }

	render() {
		return (
      <React.Fragment>
        <div className="container">
          <div className="wrapper">
            <Header
              classifications={this.props.classifications}
            />
              {this.props.children}
            <Footer
              tags={this.props.popularTags}
              posts={this.props.popularPosts}
            />
          </div>
        </div>
      </React.Fragment>
    );
	}
}

function mapStateToProps(state){
  return {
    popularTags: state.post.popularTags,
    popularPosts: state.post.popularPosts,
    classifications: state.classification.classifications,
  };
};
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getPopularTags: dispatch(getPopularTags()),
    getPopularPosts: dispatch(getPopularPosts()),
    getClassifications: dispatch(getClassifications()),
  }, dispatch)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Layout));

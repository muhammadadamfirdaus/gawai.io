import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Headline from '../components/Headline';
import Tag from '../components/Tag';
import MostPopular from '../components/posts/MostPopular';
import PostByBrand from '../components/posts/PostByBrand';
import ProductSelected from '../components/products/ProductSelected';

class Home extends Component{
  render() {
    return(
      <React.Fragment>
        <main className="home">
          <Headline/>
          <section className="col-2">
            <div className="wrapper">
              <aside className="right">
                <MostPopular/>
              </aside>
              <div className="left">
                <PostByBrand/>
              </div>
            </div>
          </section>
          <ProductSelected/>
          <section className="col-2">
            <div className="wrapper">
              <aside className="right">
                <Tag/>
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

  };
};
function mapDispatchToProps(dispatch){
  return bindActionCreators({

  }, dispatch)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home));
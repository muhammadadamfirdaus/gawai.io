import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MostPopular from '../../components/posts/MostPopular';
import Header from '../../components/posts/Header';
import Detail from '../../components/posts/Detail';
import Tag from '../../components/Tag';
import ProductSelected from '../../components/products/ProductSelected';

class Single extends Component{
  render() {
    return(
      <React.Fragment>
        <main class="detail" itemscope itemtype="http://schema.org/Article">
          <Header/>
          <section className="col-2">
            <div className="wrapper">
              <aside className="right">
                <MostPopular/>
              </aside>
              <div className="left">
                <div className="wrapper">
                  <Detail/>
                  <Tag/>
                </div>
              </div>
            </div>
          </section>
          <ProductSelected/>
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
)(withRouter(Single));
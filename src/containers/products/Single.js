import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Detail from '../../components/products/Detail';
import ProductSelected from '../../components/products/ProductSelected';

class Single extends Component{
  render() {
    return(
      <React.Fragment>
        <main class="detail gadget">
          <div class="wrapper">
            <Detail/>
          </div>
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
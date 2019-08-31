import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Footer from '../components/footers/Footer';
import Header from '../components/headers/Header';
import ProductSelected from '../components/products/ProductSelected';

class Layout extends Component {
  state = {
  }

	render() {
		return (
      <React.Fragment>
        <div className="container">
          <div className="wrapper">
            <Header/>
              {this.props.children}
            <Footer/>
          </div>
        </div>
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
)(withRouter(Layout));

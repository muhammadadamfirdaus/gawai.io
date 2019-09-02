import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout';
import Home from './containers/Home';
import PostSingle from './containers/posts/Single';
import ProductSingle from './containers/products/Single';
import ProductBrand from './containers/products/Brand';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
            <Switch>
              <Layout>
                <Route exact path="/" component={Home} />
                <Route exact path="/post/detail/:slug" component={PostSingle} />
                <Route exact path="/product/detail/:slug" component={ProductSingle} />
                <Route exact path="/product/brand/:slug" component={ProductBrand} />
              </Layout>
            </Switch>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

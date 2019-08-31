import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout';
import Home from './containers/Home';
import PostSingle from './containers/posts/Single';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
            <Switch>
              <Layout>
                <Route exact path="/" component={Home} />
                <Route exact path="/post/:slug" component={PostSingle} />
              </Layout>
            </Switch>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

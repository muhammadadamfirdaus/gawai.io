import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';

import MostPopular from '../../components/posts/MostPopular';
import Header from '../../components/posts/Header';
import Detail from '../../components/posts/Detail';
import Tag from '../../components/posts/Tag';
import ProductSelected from '../../components/products/ProductSelected';
import PostList from '../../components/posts/List';

import {getPostsByTag, getPopularTags} from '../../actions/post-action';
import {getSelectedProducts} from '../../actions/product-action';

class PostTag extends Component{  
  render() {
    var elmnt = document.getElementById("post-tag");
    if (elmnt !== null) {
      elmnt.scrollIntoView({behavior: "smooth"});
    }
    return(
      <React.Fragment>
        <main class="category" id="post-tag">
          <div class="headline">
            <div class="wrapper">
              <figure>
                <hgroup>
                  <div class="wrapper">
                    <h1 class="title">
                      #{this.props.match.params.slug}
                    </h1>
                  </div>
                </hgroup>
              </figure>
            </div>
          </div>
          <section className="col-2">
            <div className="wrapper">
              <aside className="right">
                <section class="news">
                  <h2 class="subheading">
                    Populer tentang <span id="name-tags" data-tags="Apple">Laptop Gaming</span>
                  </h2>
                  <div class="wrapper">
                  <section class="card list">
                    <div class="wrapper">
                      {
                        this.props.popularPosts.map((data, i) => {
                          return(
                            <li>
                              <div class="wrapper">
                                <Link to={`/post/detail/${data.post.slug}`} class="thumbnail">
                                    <img src="../../assets/images/macbook-pro.png" alt={data.post.title}/>
                                </Link>
                                <h1>
                                  <Link to={`/post/detail/${data.post.slug}`}>{data.post.title}</Link>
                                </h1>
                              </div>
                            </li>
                          )
                        })
                      }
                    </div>
                    </section>
                  </div>
                </section>
                <section class="card tags">
                  <h2 class="subheading">Lihat Juga Berdasarkan</h2>
                  <div class="wrapper">
                    {
                      this.props.popularTags.map((data, i) => {
                        return(
                          <li>
                            <h1>
                              <Link to={`/post/tag/${data.tag.slug}`} class="thumbnail">
                                {data.tag.name}
                              </Link>
                            </h1>
                          </li>
                        )
                      })
                    }
                  </div>
                </section>
              </aside>
              <section class="left card list lg">
                <PostList
                  data={this.props.posts}
                />
              </section>
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
    popularTags: state.post.popularTags,
    posts: state.post.posts,
    selectedProducts: state.product.selectedProducts
  };
};
function mapDispatchToProps(dispatch, props){
  return bindActionCreators({
    getPostsByTag: dispatch(getPostsByTag(props.match.params.slug)),
    getSelectedProducts: dispatch(getSelectedProducts())
  }, dispatch)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PostTag));
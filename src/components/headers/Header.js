import React from 'react';
import {Link} from 'react-router-dom';
import {globalUrl} from '../../actions/config';

const Header = (props) => {
  return(
    <React.Fragment>
      <header>
        <div className="wrapper">
          <Link to="/" className="logo">
            <img src="../../assets/images/gawai-logo-white.png" alt="Official GAWAI.IO logo"/>
          </Link>
          <input type="checkbox" id="amp" className="amp-menu"/>
          <div className="menu-mobile"><span></span></div>
          <nav className="menu">
            <li><Link to="/">Home</Link></li>
            {
              props.classifications.map((data, i) => {
                return(
                  <React.Fragment key={i}>
                    <li className="sub">
                      <a href="#">{data.classification.name}</a>
                      <input type="checkbox" id="amp" className="amp-sub-menu"/>
                      <ul>
                      <div className="sub-menu-container">
                        <div className="tabs">
                          <div className="wrapper">
                            {
                              data.rubrics.map((rubric, i2) => {
                                return(
                                  <React.Fragment key={i2}>
                                    <li>
                                      <a href="#" data-tab="tab-1-laptop">{rubric.name}</a>
                                    </li>
                                    <input type="radio" name="amp-tab-menu-1" id="amp" className="amp-sub-menu" checked/>
                                    <div id="tab-1-laptop" className="tab-content">
                                      <div className="wrapper">
                                        {
                                          rubric.newPosts.data.map((post, i3) => {
                                            return(
                                              <React.Fragment key={i3}>
                                                <li>
                                                  <Link to={`/post/detail/${post.post.slug}`} className="thumbnail">
                                                    <img src={globalUrl+post.post.thumbnail} alt={post.post.title}/>
                                                  </Link>
                                                  <h1>
                                                    <Link to={`/post/detail/${post.post.slug}`} >{post.post.title}</Link>
                                                  </h1>
                                                </li>
                                              </React.Fragment>
                                            )
                                          })
                                        }
                                      </div>
                                    </div>
                                  </React.Fragment>
                                )
                              })
                            }
                          </div>
                        </div>
                      </div>
                      </ul>
                    </li>
                  </React.Fragment>
                )
              })
            }
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
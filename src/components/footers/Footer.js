import React from 'react';
import {Link} from 'react-router-dom';

const Footer = (props) => {
  return(
    <React.Fragment>
      <footer>
        <div className="wrapper">
          <li>
            <div className="wrapper">
              <Link to="/" className="logo">
                <img src="../../assets/images/gawai-logo-white.png" alt="Official GAWAI.IO logo"/>
              </Link>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, vero ex aperiam molestiae nam voluptate esse non, distinctio quis maiores expedita rerum fugiat ducimus, natus impedit! Corporis vel nihil dolorem explicabo eius, nam consectetur culpa amet ipsum ratione dolor eum molestiae natus assumenda incidunt in esse, consequuntur iste est. Quasi aspernatur eligendi reiciendis placeat tempore neque nesciunt, rerum consequatur. Ipsam?
              </p>
              <nav className="link">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Advertise</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </nav>
            </div>
          </li>
          <li>
            <div className="wrapper">
              <nav className="tags">
                <h2 className="subheading">Keyword Populer</h2>
                {
                  props.tags.map((data, i) => {
                    return(
                      <React.Fragment>
                        <li>
                          <h1>
                            <Link to={`/post/tag/${data.tag.slug}`}>
                              {data.tag.name}
                            </Link>
                          </h1>
                        </li>
                      </React.Fragment>
                    )
                  })
                }
              </nav>
              <nav className="recent">
                <h2 className="subheading">Paling Banyak Dibaca</h2>
                {
                  props.posts.map((data, i) => {
                    return(
                      <React.Fragment>
                        <li>
                          <Link to={`/post/detail/${data.post.slug}`}>
                            {data.post.title}
                          </Link>
                        </li>
                      </React.Fragment>
                    )
                  })
                }
              </nav>
            </div>
          </li>
          <li>
            <div className="wrapper">
              <nav className="social">
                <h2 className="subheading">Follow Us!</h2>
                <li>
                  <a className="icon icon-facebook" href="https://www.facebook.com/gawai.io" target="blank">
                  </a>
                </li>
                <li>
                  <a className="icon icon-instagram" href="https://www.instagram.com/gawai.io/" target="blank">
                  </a>
                </li>
                <li>
                  <a className="icon icon-twitter" href="https://twitter.com/gawaiio" target="blank">
                  </a>
                </li>
              </nav>
            </div>
          </li>
          <li>
            <div className="wrapper">
              <p>
                Copyright &copy; 2019 GAWAI.IO. All rights reserved.
              </p>
            </div>
          </li>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
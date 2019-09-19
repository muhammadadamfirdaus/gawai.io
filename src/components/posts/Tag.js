import React from 'react';
import {Link} from 'react-router-dom';

const Tag = (props) => {  
  return(
    <React.Fragment>
      {
        props.data.map((data, i) => {
          return(
            <React.Fragment key={i}>
              <div className="wrapper">
                <section className="card tags">
                  <h2 className="subheading">Lihat Juga Berdasarkan</h2>
                  <div className="wrapper">
                    {
                      data.tags.map((data2, i2) => {
                        return(
                          <React.Fragment key={i2}>
                            <li>
                              <h1>
                                <Link to={`/post/tag/${data2.slug}`} className="thumbnail">
                                  {data2.name}
                                </Link>
                              </h1>
                            </li>
                          </React.Fragment>
                        )
                      })
                    }
                  </div>
                </section>
              </div>
            </React.Fragment>
          )
        })
      }
    </React.Fragment>
  );
}

export default Tag;
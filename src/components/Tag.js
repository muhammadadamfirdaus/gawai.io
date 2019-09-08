import React from 'react';
import {Link} from 'react-router-dom';

const Tag = (props) => {  
  return(
    <React.Fragment>
      <div className="wrapper">
        <section className="card tags">
          <h2 className="subheading">Lihat Juga Berdasarkan</h2>
          <div className="wrapper">
            {
              props.data.map((data, i) => {
                console.log(data);
                
                return(
                  <React.Fragment key={i}>
                    <li>
                      <h1>
                        <Link to={`post/tag/${data.tag.slug}`} className="thumbnail">
                          {data.tag.name}
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
  );
}

export default Tag;
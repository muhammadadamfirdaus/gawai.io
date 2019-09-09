import React from 'react';
import {Link} from 'react-router-dom';

const MostPopular = (props) => {
  return(
    <React.Fragment>
      <div className="wrapper">
        <section className="card list popular">
          <h2 className="subheading">Paling Banyak Dibaca</h2>
          <div className="wrapper">
            {
              props.data.map((data, i) =>{
                return(
                  <React.Fragment key={i}>
                    <li>
                      <div className="wrapper">
                        <span>{i+1}</span>
                        <Link className="thumbnail" to={`/post/detail/${data.post.slug}`}>
                          <img src="../../assets/images/redmi-note-7.jpg" alt="Redmi Note 7"/>
                        </Link>
                        <h1>
                          <Link className="thumbnail" to={`/post/detail/${data.post.slug}`}>
                            {data.post.title}
                          </Link>
                        </h1>
                      </div>
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

export default MostPopular;
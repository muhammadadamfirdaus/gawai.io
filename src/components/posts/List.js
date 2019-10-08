import  React from 'react';
import {Link} from 'react-router-dom';
import {globalUrl} from '../../actions/config';

const List = (props) => {
  return(
    <React.Fragment>
      <div class="wrapper">
        {
          props.data.map((data, i) => {
            return(
              <li>
                <div class="wrapper">
                  <Link class="thumbnail" to={`/post/detail/${data.post.title}`}>
                    <img src={globalUrl+data.post.thumbnail} alt={data.post.title}/>
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
    </React.Fragment>
  )
}

export default List;
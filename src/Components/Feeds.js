import React from 'react';
import { Link } from 'react-router-dom';

const Feeds = (feeds) => {



  return (

    <div className="container">
      <div className="section">
        <div className="col span_2_of_3">
          <div className="blog-post">
            <h1 className="blog-title">{feeds.feeds.title}</h1>
            <h2 className="date">{feeds.feeds.date}</h2>
            <p className="blog-content">
              {feeds.feeds.description}
            </p>
            <Link to={`edit-blog/${feeds.feeds.id}`}>
              <button type="button" className="editBlogButton">Edit Blog</button>
            </Link>
            

          </div>
          {/* <CreateBlog /> */}
        </div>
      </div>
    </div>

  );
};

export default Feeds;

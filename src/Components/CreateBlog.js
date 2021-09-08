import React from "react";
import { Link } from "react-router-dom";

const CreateBlog = () => {
  return (
    <aside className="col span_1_of_3">
      <div className="side-post">
        <p className="side-content">
          Blogs are a way to express. Want to Create One ?
        </p>
        <a href="#" className="button">
          <Link to="/new-blog">Create a New Blog</Link>
        </a>
      </div>
    </aside>
  );
};

export default CreateBlog;

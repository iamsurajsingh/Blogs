import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getDataAction } from "../action/getDataAction";
import { updateDataAction } from "../action/updateDataAction";
import { deleteDataAction } from "../action/deleteDataAction";


const EditBlog = () => {

  let { id } = useParams();
  const dispatch = useDispatch();
  const blogger = useSelector((state) => (state.blogs.blog));
  console.warn(blogger);
  let history = useHistory();
  const [getTitle, setTitle] = useState("");
  const [getDescription, setDescription] = useState("");


  useEffect(() => {
    dispatch(getDataAction(id));
  }, [id]);

  useEffect(() => {
    if (blogger != null) {
      setTitle(blogger.title);
      setDescription(blogger.description);
    }
  }, [blogger]);

  const updateChanges = (e) => {
    e.preventDefault();
    checkValidation(e);

    const updatedBlog = Object.assign(blogger, { title: getTitle, description: getDescription });

    dispatch(updateDataAction(updatedBlog));
    history.push("/");
  }




  return (
    <div className="newBlogContainer">

      <div className="card-header">
        <p className="headingEdit">Edit Blog</p>
      </div>

      <div className="card-body">
        <form onSubmit={(e) => updateChanges(e)} className="newForm">
          <input type="text" placeholder="Title" value={getTitle} onChange={(event) => setTitle(event.target.value)} className="titlePane" />
          <textarea placeholder="Description" value={getDescription} onChange={(event) => setDescription(event.target.value)} className="descPane" />
          <div className="buttonsEdit">
            <button type="submit" name="Save Blog" className="button">Save Blog</button>
            <button type="button" name="Delete Blog" onClick={() => { dispatch(deleteDataAction(id)); history.push("/"); }} className="buttonDelete">Delete Blog</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;

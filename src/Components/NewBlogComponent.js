import React, {useState}from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { createDataAction } from "../action/createDataAction";
import '../styles.css';

const NewBlogComponent = () => {

  const dispatch = useDispatch();
    const history = useHistory();
    const [getTitle, setTitle] = useState("");
    const [getDescription, setDescription] = useState("");
    
    
    const createNewBlog = (e) => {
        e.preventDefault();
        console.log([getTitle, getDescription]);
        console.log(new Date().getTime().toString());
        const newBlog = {
            id: new Date().getTime().toString(),
            title: getTitle,
            description: getDescription,
            date: new Date().toLocaleString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: true
            }),
            length: '',
        }
        dispatch(createDataAction(newBlog));
        history.push("/");
        
    }
  return (
    <div className="newBlogContainer">
      <div className="card-header">
        <p className="headingAdd">Add New Blog</p>    
      </div>

      <div className="card-body">
        <form onSubmit = {(e) => createNewBlog(e)} className = "newForm">
          <input type = "text" placeholder = "Title" value = {getTitle} onChange = {(event) => setTitle(event.target.value)} className = "titlePane"/>
          <textarea placeholder = "Description" value = {getDescription} onChange = {(event) => setDescription(event.target.value)} className = "descPane"/>
          <button type = "submit" name = "Add New Blog" className="button">Add New Blog</button>
        </form>
      </div>
    </div>
  );
};

export default NewBlogComponent;

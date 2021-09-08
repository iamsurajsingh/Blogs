import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Feeds from "./Components/Feeds";
import CreateBlog from "./Components/CreateBlog";
import NewBlogComponent from "./Components/NewBlogComponent";
import { connect } from "react-redux";
// import {useEffect} from 'react';
import { useSelector } from "react-redux";
import EditBlog from "./Components/EditBlog";
function App() {

  const feeds = useSelector((data) => data.blogs.blogs);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>

          <Route exact path="/">
            <Navbar />
            {
              feeds.map((items) => {
                return (
                  <>
                    <Feeds feeds={items} key={items.id} />

                  </>
                )
              })
            }
            <CreateBlog />
          </Route>

          <Route exact path="/new-blog">
            <NewBlogComponent />
          </Route>

          <Route exact path="/edit-blog/:id">
            <EditBlog />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default connect()(App)

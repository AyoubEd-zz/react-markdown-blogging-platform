import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
//Material UI Imports
import { withStyles } from "@material-ui/core/styles";
//Components
import Sidebar from "./subcomponents/sidebar";
import Postlist from "./subcomponents/postlist";
import Post from "./subcomponents/post";
//Files
import "./App.css";

const style = {};

function Blog(props) {
  const {
    location: { search }
  } = props;

  const [filter, setFilter] = useState(search.length > 0 ? [search.split("=")[1]] : []);

  function addTagToFilter(ele) {
    setFilter([...filter, ele]);
  }
  function deleteTagFromFilter(tag) {
    setFilter([...filter.filter(ele => ele !== tag)]);
  }
  function resetFilter() {
    setFilter([]);
  }

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        height: "100%"
        // paddingBottom: "5vh"
      }}
    >
      <Sidebar {...props} addTagToFilter={addTagToFilter} resetFilter={resetFilter} />
      <div
        style={{
          padding: "0 60px",
          flex: "1 1 400px",
          height: "100%",
          overflow: "auto"
        }}
      >
        <Switch>
          <Route path="/*/:id" exact component={Post} />
          <Route
            path="/*"
            exact
            render={props => (
              <Postlist
                {...props}
                list={props.match.url}
                addTagToFilter={addTagToFilter}
                deleteTagFromFilter={deleteTagFromFilter}
                filter={filter}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default withStyles(style)(Blog);

import React, { useState } from "react";
//Material UI Imports
import { withStyles } from "@material-ui/core/styles";
//Components
import Sidebar from "./subcomponents/sidebar";
import Postlist from "./subcomponents/postlist";
//Files
import "./App.css";

const style = {};

function Blog(props) {
  const {
    location: { search }
  } = props;

  const screenWidth = window.screen.width;
  const bp = 768;
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
        flexFlow: "row",
        height: "100%"
      }}
    >
      {screenWidth >= bp && <Sidebar {...props} addTagToFilter={addTagToFilter} resetFilter={resetFilter} />}
      <div
        style={{
          padding: screenWidth <= bp ? "0 5vw" : "0 60px",
          flex: "1 1 70%",
          height: "100%",
          overflow: "auto"
        }}
      >
        <Postlist
          {...props}
          list={props.match.url}
          addTagToFilter={addTagToFilter}
          deleteTagFromFilter={deleteTagFromFilter}
          filter={filter}
        />
      </div>
    </div>
  );
}

export default withStyles(style)(Blog);

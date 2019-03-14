import React, { Component } from "react";
//Material UI Imports
import { withStyles } from "@material-ui/core/styles";
//Components
//Files
import { bloglist } from "./bloglist";
import "./App.css";
const style = {};

class Blog extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        {bloglist.map(ele => (
          <div style={{ display: "column" }}>{ele.title}</div>
        ))}
      </div>
    );
  }
}

export default withStyles(style)(Blog);

import React, { Component } from "react";
//Material UI Imports
import { withStyles } from "@material-ui/core/styles";
//Components
//Files
import "./App.css";
const style = {};

class Blog extends Component {
  render() {
    const { classes } = this.props;
    return <div className="App">Hello from Blog</div>;
  }
}

export default withStyles(style)(Blog);

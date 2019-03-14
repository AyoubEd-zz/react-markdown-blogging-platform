import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

//Material UI Imports
import { withStyles } from "@material-ui/core/styles";
//Components
//Files
import "./App.css";
const style = {};
// let input = "# This is a header\n\nAnd this is a paragraph";

class Post extends Component {
  render() {
    const { match } = this.props;
    let input;
    fetch(`../posts/post1.md`)
      .then(r => r.text())
      .then(t => console.log(t));
    return (
      <div className="App">
        <p>Hello me love!</p>
        <ReactMarkdown source={input} />
      </div>
    );
  }
}

export default withStyles(style)(Post);

import React, { Component } from "react";
import Markdown from "react-markdown/with-html";
import CodeBlock from "../code-block";
//Material UI Imports
import { withStyles } from "@material-ui/core/styles";
//Components
//Files
import "../App.css";
import "github-markdown-css";
const style = {};

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }
  componentDidMount() {
    this.readTextFile();
  }

  readTextFile = () => {
    try {
      var rawFile = new XMLHttpRequest();
      rawFile.open("GET", require(`../../content/posts${this.props.match.url}.md`), false);
      rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4) {
          if (rawFile.status === 200 || rawFile.status === 0) {
            var allText = rawFile.responseText;
            this.setState({
              text: allText
            });
          }
        }
      };
      rawFile.send(null);
    } catch {
      this.setState({
        text: "### This post does not exist!"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="return-button">
          <div onClick={() => window.history.back()}>Return</div>
        </div>
        <div className="result-pane" style={{ padding: "0 20vw" }}>
          <div className="markdown-body">
            <Markdown
              source={this.state.text}
              skipHtml={this.state.htmlMode === "skip"}
              escapeHtml={this.state.htmlMode === "escape"}
              renderers={{ code: CodeBlock }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(Post);

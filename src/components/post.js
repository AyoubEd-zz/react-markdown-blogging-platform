import React, { Component } from "react";
import Markdown from "react-markdown";
import CodeBlock from "./code-block";
//Material UI Imports
import { withStyles } from "@material-ui/core/styles";
//Components
//Files
import "./App.css";
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
    var rawFile = new XMLHttpRequest();
    rawFile.open(
      "GET",
      require(`../posts/${this.props.match.params.id}.md`),
      false
    );
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          var allText = rawFile.responseText;
          this.setState({
            text: allText
          });
        }
      }
    };
    rawFile.send(null);
  };

  render() {
    const { match } = this.props;

    return (
      <div>
        <div className="result-pane">
          <div className="markdown-body">
            <Markdown
              className="result"
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

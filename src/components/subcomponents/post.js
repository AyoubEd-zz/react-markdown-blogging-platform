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
    // console.log(this.props.match.url);
  }

  readTextFile = () => {
    try {
      var rawFile = new XMLHttpRequest();
      rawFile.open(
        "GET",
        require(`../../content/posts${this.props.match.url}.md`),
        false
      );
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
    const url = window.location.pathname
    const regex = /\/(.*?)\//g
    const page = url.match(regex)
    const str = (page && page.length>0)?page[0]:url
    return (
      <div>
        <div className='return-button'>
          <a href={str.substr(0, str.length-1)}>Return</a>
        </div>
        <div className="result-pane" style={{padding:"0 20vw"}}>
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

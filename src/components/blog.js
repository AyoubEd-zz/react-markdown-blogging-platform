import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
//Material UI Imports
import { withStyles } from "@material-ui/core/styles";
//Components
import Sidebar from "./subcomponents/sidebar";
import Postlist from "./subcomponents/postlist";
import Post from "./subcomponents/post";
//Files
import "./App.css";
import * as lists from "./lists";

const style = {};

class Blog extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          height: "90vh"
        }}
      >
        <div
          style={{
            display: "block",
            borderRight: "solid 1px #E6E6E6",
            height: "fit-content",
            width: "400px",
            ["@media (minWidth:780px)"]: {
              width: "100%"
            }
          }}
        >
          <Sidebar {...this.props} />
        </div>
        <div
          style={{
            padding: "0 40px",
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
                <Postlist {...props} list={this.props.match.url} />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(Blog);

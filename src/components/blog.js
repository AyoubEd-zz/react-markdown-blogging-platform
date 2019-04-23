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

const style = {};

class Blog extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          height: "100%"
          // paddingBottom: "5vh"
        }}
      >
        <Sidebar {...this.props} />
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

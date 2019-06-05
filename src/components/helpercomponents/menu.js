import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  menuItem: {
    width: "fit-content",
    margin: "0 10px",
    fontWeight: 600,
    fontSize: "14px",
    textDecoration: "none",
    textTransform: "uppercase",
    "&:hover": {
      textDecoration: "underline"
    }
  }
};

class Menu extends Component {

  render() {
    const { classes } = this.props;
    
    return (
      <div
        style={{
          display: "flex",
          background: "#000",
          justifyContent: "center",
          position: "fixed",
          width: "100%",
          boxShadow: "0 3px 4px -2px #999"
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: "15px 0"
          }}
        >
          <Link
            to="/"
            className={classes.menuItem}
            style={{ color: "#fff" }}
            // style={"{
            //   textDecoration:
            //     this.props.match.url == "Home" ? "underline" : ""
            // }}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className={classes.menuItem}
            style={{ color: "#fff"}}
          >
            Blog
          </Link>
          <Link
            to="/competitiveprogramming"
            className={classes.menuItem}
            style={{ color: "#fff" }}
          >
            Competitive Programming
          </Link>
          <Link
            to="/teachingmyselfcs"
            className={classes.menuItem}
            style={{ color: "#fff" }}
          >
            Teaching myself cs
          </Link>
          <Link
            to="/opensource"
            className={classes.menuItem}
            style={{ color: "#fff" }}
          >
            Open Source
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Menu);

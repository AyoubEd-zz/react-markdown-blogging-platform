import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const gray = "rgb(74, 74, 74)";

const styles = {
  menuItem: {
    width: "fit-content",
    margin: "0 10px",
    fontWeight: 600,
    color: "#fff",
    textDecoration: "none",
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
          <Typography variant="button">
            <Link
              to="/"
              className={classes.menuItem}
              // style={{
              //   textDecoration:
              //     this.props.match.url == "Home" ? "underline" : ""
              // }}
            >
              Home
            </Link>
          </Typography>
          <Typography variant="button">
            <Link to="/blog" className={classes.menuItem}>
              Blog
            </Link>
          </Typography>
          <Typography variant="button">
            <Link to="/competitiveprogramming" className={classes.menuItem}>
              Competitive Programming
            </Link>
          </Typography>
          <Typography variant="button">
            <Link to="/teachingmyselfcs" className={classes.menuItem}>
              Teaching myself cs
            </Link>
          </Typography>
          <Typography variant="button">
            <Link to="/opensource" className={classes.menuItem}>
              Open Source
            </Link>
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Menu);

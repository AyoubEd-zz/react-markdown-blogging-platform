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
    color: gray,
    textDecoration: "none",
    "&:hover": {
      color: "#5d93ff",
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
          flexFlow: "row",
          justifyContent: "center",
          height: "5vh",
          margin: "10px 0 0 0"
        }}
      >
        <Typography variant="button">
          <Link to="/" className={classes.menuItem}>
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
    );
  }
}

export default withStyles(styles)(Menu);

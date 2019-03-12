import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import App from "./components/App";
import Blog from "./components/blog";

const gray = "rgb(74, 74, 74)";

const styles = {
  menuItem: {
    width: "fit-content",
    margin: "0 10px",
    color: "gray",
    "&:hover": {
      color: gray
    }
  }
};

class RouterComponent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div>
          <div
            style={{
              display: "flex",
              flexFlow: "row",
              justifyContent: "center",
              height: "20px",
              margin: "10px 0 30px"
            }}
          >
            <Typography variant="button">
              <Link to="/" exact className={classes.menuItem}>
                Home
              </Link>
            </Typography>
            <Typography variant="button">
              <Link to="/os" exact className={classes.menuItem}>
                Open Source
              </Link>
            </Typography>
            <Typography variant="button">
              <Link to="/tmcs" exact className={classes.menuItem}>
                Teaching myself cs
              </Link>
            </Typography>
            <Typography variant="button">
              <Link to="/cp" exact className={classes.menuItem}>
                Competitive Programming
              </Link>
            </Typography>
            <Typography variant="button">
              <Link to="/blog" exact className={classes.menuItem}>
                Blog
              </Link>
            </Typography>
          </div>
          <Route path="/blog" component={Blog} />
          <Route path="/" exact component={App} />
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(RouterComponent);

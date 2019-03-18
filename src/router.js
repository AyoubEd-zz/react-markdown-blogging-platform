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
    fontWeight: 600,
    color: gray,
    textDecoration: "none",
    "&:hover": {
      color: "#5d93ff",
      textDecoration: "underline"
    }
  }
};

class RouterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: "" };
  }
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            flexFlow: "column"
          }}
        >
          <div
            style={{
              display: "flex",
              flexFlow: "row",
              justifyContent: "center",
              height: "10vh",
              margin: "10px 0 30px"
            }}
          >
            <Typography variant="button">
              <Link
                to="/"
                className={classes.menuItem}
                onClick={() => this.setState({ url: "/" })}
              >
                Home
              </Link>
            </Typography>
            <Typography variant="button">
              <Link
                to="/operatingsystems"
                className={classes.menuItem}
                onClick={() => {
                  this.setState({ url: "/operatingsystems" });
                }}
              >
                Open Source
              </Link>
            </Typography>
            <Typography variant="button">
              <Link
                to="/teachingmyselfcs"
                className={classes.menuItem}
                onClick={() => this.setState({ url: "/teachingmyselfcs" })}
              >
                Teaching myself cs
              </Link>
            </Typography>
            <Typography variant="button">
              <Link
                to="/competitiveprogramming"
                className={classes.menuItem}
                onClick={() =>
                  this.setState({ url: "/competitiveprogramming" })
                }
              >
                Competitive Programming
              </Link>
            </Typography>
            <Typography variant="button">
              <Link
                to="/blog"
                className={classes.menuItem}
                onClick={() => this.setState({ url: "/blog" })}
              >
                Blog
              </Link>
            </Typography>
          </div>
          <div style={{ flexGrow: 1, height: "90vh" }}>
            <Route path="/" exact component={App} />
            <Route
              path="/*"
              render={props => <Blog {...props} url={this.state.url} />}
              url={this.state.url}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(RouterComponent);

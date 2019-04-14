import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./components/App";
import Blog from "./components/blog";
import Menu from "./components/helpercomponents/menu";

class RouterComponent extends React.Component {
  render() {
    return (
      <Router>
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            flexFlow: "column"
          }}
        >
          <Menu onChangeUrl={this.onChangeUrl} />
          <div style={{ flexGrow: 1, height: "90vh" }}>
            <Route path="/" exact component={App} />
            <Route path="/*" render={props => <Blog {...props} />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default RouterComponent;

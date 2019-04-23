import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./components/App";
import Blog from "./components/blog";
import Menu from "./components/helpercomponents/menu";
import Footer from "./components/helpercomponents/footer";

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
          <div style={{ flexGrow: 1, marginTop: "70px" }}>
            <Switch>
              <Route path="/" exact component={App} />
              <Route path="/*" render={props => <Blog {...props} />} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default RouterComponent;

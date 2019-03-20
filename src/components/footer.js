import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexGrow: 1, flexFlow: "row nowrap", background:"#000", color:"#fff" }}>
        Made with <3 and React 
      </div>
    );
  }
}

export default Footer;

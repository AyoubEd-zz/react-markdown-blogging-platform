import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexGrow: 1, flexFlow: "row nowrap", justifyItems:"center" }}>
        <div style={{width:"fit-content"}}>© Built with ❤ & ReactJs</div>
      </div>
    );
  }
}

export default Footer;

import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#F9F9F9",
          marginTop: "20px"
        }}
      >
        <div
          style={{
            fontStyle: "italic",
            fontSize: "14px",
            margin: "20px 0",
            color: "#8c8c8c"
          }}
        >
          Copyright © 2019 , Inc. No rights reserved.
        </div>
      </div>
    );
  }
}

export default Footer;

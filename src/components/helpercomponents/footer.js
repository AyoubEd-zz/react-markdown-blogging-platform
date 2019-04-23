import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#F6F6F6",
          marginTop: "20px"
        }}
      >
        <div
          style={{
            fontStyle: "italic",
            fontSize: "14px",
            margin: "20px 0"
          }}
        >
          © No rights reserved.
        </div>
      </div>
    );
  }
}

export default Footer;

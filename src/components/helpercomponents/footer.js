import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "100px"
        }}
      >
        <div
          style={{
            width: "fit-content",
            color: "#5d93ff",
            fontStyle: "italic",
            fontSize: "14px"
          }}
        >
          © Built with{" "}
          <span role="img" aria-label="drink emoji">
            🥤
          </span>
          & React
        </div>
      </div>
    );
  }
}

export default Footer;

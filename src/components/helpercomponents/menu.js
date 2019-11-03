import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  menuItem: {
    width: "fit-content",
    margin: "0 10px",
    fontWeight: 600,
    fontSize: "14px",
    textDecoration: "none",
    textTransform: "uppercase",
    "&:hover": {
      textDecoration: "underline"
    }
  }
};

class Menu extends Component {
  render() {
    const { classes } = this.props;
    const screenWidth = window.screen.width;

    if (screenWidth <= 768) return <BurgerMenu />;

    return (
      <div
        style={{
          display: "flex",
          background: "#000",
          justifyContent: "center",
          position: "fixed",
          width: "100%",
          boxShadow: "0 3px 4px -2px #999"
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: "15px 0"
          }}
        >
          <Link
            to="/"
            className={classes.menuItem}
            style={{ color: "#fff" }}
            // style={"{
            //   textDecoration:
            //     this.props.match.url == "Home" ? "underline" : ""
            // }}
          >
            Home
          </Link>
          <Link to="/blog" className={classes.menuItem} style={{ color: "#fff" }}>
            Blog
          </Link>
          <Link to="/competitiveprogramming" className={classes.menuItem} style={{ color: "#fff" }}>
            Competitive Programming
          </Link>
          <Link to="/teachingmyselfcs" className={classes.menuItem} style={{ color: "#fff" }}>
            Teaching myself cs
          </Link>
          <Link to="/opensource" className={classes.menuItem} style={{ color: "#fff" }}>
            Open Source
          </Link>
        </div>
      </div>
    );
  }
}

function BurgerMenu() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div style={{ width: "100vw", boxSizing: "border-box", background: open ? "#000" : "" }}>
      <MenuIcon style={{ margin: "10px", color: open ? "white" : "", cursor: "pointer" }} onClick={handleClick} />
      {open && (
        <div style={{ width: "100vw", height: "calc(100vh - 28px)", background: "#000" }}>
          <div
            style={{
              display: "flex",
              flexFlow: "column",
              margin: "0 10px"
            }}
          >
            <Link to="/" style={{ color: "#fff", marginBottom: "2vh" }} onClick={handleClick}>
              Home
            </Link>
            <Link to="/blog" style={{ color: "#fff", marginBottom: "2vh" }} onClick={handleClick}>
              Blog
            </Link>
            <Link to="/competitiveprogramming" style={{ color: "#fff", marginBottom: "2vh" }} onClick={handleClick}>
              Competitive Programming
            </Link>
            <Link to="/teachingmyselfcs" style={{ color: "#fff", marginBottom: "2vh" }} onClick={handleClick}>
              Teaching myself cs
            </Link>
            <Link to="/opensource" style={{ color: "#fff", marginBottom: "2vh" }} onClick={handleClick}>
              Open Source
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default withStyles(styles)(Menu);

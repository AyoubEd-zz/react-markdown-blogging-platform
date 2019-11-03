import React from "react";

const styles = {
  menu: {
    position: "absolute",
    top: "5%",
    left: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "2rem",
    height: "2rem",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: 0,
    zIndex: 10,

    "&:focus": {
      outline: "none"
    },

    div: {
      width: "2rem",
      height: "0.25rem",
      // background: ${({ theme }) => theme.primaryLight};
      borderRadius: "10px",
      transition: "all 0.3s linear",
      position: "relative",
      transformOrigin: "1px"
    }
  },
  column: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    //   background: ${({ theme }) => theme.primaryLight};
    height: "100vh",
    textAlign: "left",
    padding: "2rem",
    position: "absolute",
    top: 0,
    left: 0,
    transition: "transform 0.3s ease-in-out",

    "@media (max-width: 768px)": {
      width: "100%"
    },

    a: {
      fontSize: "2rem",
      textTransform: "uppercase",
      padding: "2rem 0",
      fontWeight: "bold",
      letterSpacing: "0.5rem",
      // color: ${({ theme }) => theme.primaryDark};
      textDecoration: "none",
      transition: "color 0.3s linear",

      "@media (max-width: 768px)": {
        fontSize: "1.5rem",
        textAlign: "center"
      },

      "&:hover": {
        //   color: ${({ theme }) => theme.primaryHover};
      }
    }
  }
};

function BurgerMenu() {
  return <div>Hello</div>;
}

export default BurgerMenu;

import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
//Material UI imports
import { withStyles } from "@material-ui/core/styles";
//Components

//File Imports
import { featuredposts } from "../../content/lists";

const styles = {
  postTitle: {
    width: "fit-content",
    fontWeight: 600,
    color: "#222",
    fontSize: "1.6875rem",
    lineHeight: "2.4375rem",
    borderBottom: "0.5px solid white",
    "&:hover": {
      borderBottom: "0.5px solid gray"
    },
    marginBottom: "20px"
  },
  upperT: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: ".875rem"
  },
  upperCat: {
    textTransform: "uppercase",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: ".875rem",
    marginLeft: "10px",
    color: "#F19F46",
    "&:hover": {
      color: "#5d93ff",
      cursor: "pointer"
    }
  },
  read: {
    width: "fit-content",
    fontSize: "1rem",
    color: "#5d93ff",
    margin: "20px 0",
    borderBottom: "0.5px solid #fff",
    "&:hover": {
      borderBottom: "0.5px solid #5d93ff"
    }
  },
  tag: {
    textTransform: "uppercase",
    borderColor: "#f19f46",
    color: "#f19f46",
    fontSize: "14px"
  },
  closeicon: {
    color: "#f19f46",
    "&:hover": {
      color: "#ffbc75"
    }
  }
};

function FeaturedPostList({ classes }) {
  let list = featuredposts;

  return (
    <div>
      {list && list.length === 0 && <div className={classes.postTitle}>Nothing here!</div>}
      {list &&
        list.map((element, index) => {
          return (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  flexFlow: "row"
                }}
              >
                <div className={classes.upperT}>{moment(element.date).format("MMMM YYYY")}</div>
                {element.tag.map(ele => (
                  <Link to={`${element.subUrl}?filter=${ele}`} key={ele} className={classes.upperCat}>
                    {ele}
                  </Link>
                ))}
              </div>
              <Link
                to={`${element.subUrl}/${element.link}`}
                style={{
                  textDecoration: "none",
                  marginBottom: "10px",
                  width: "fit-content"
                }}
              >
                <div className={classes.postTitle}>{element.title}</div>
              </Link>
              <div style={{ textAlign: "left" }}>{element.description}</div>
              <Link
                style={{
                  textDecoration: "none"
                }}
                to={`${element.subUrl}/${element.link}`}
              >
                <div className={classes.read}>Read</div>
              </Link>
            </div>
          );
        })}
      <div>
        <Link to={`blog`} className={classes.read} style={{ textDecoration: "none" }}>
          more...
        </Link>
      </div>
    </div>
  );
}
export default withStyles(styles)(FeaturedPostList);

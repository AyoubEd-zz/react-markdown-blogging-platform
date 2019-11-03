import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
//Material UI imports
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

//Components

//File Imports
import * as lists from "../../content/lists";

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

class Postlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.url !== this.state.url) {
      this.setState({ url: nextProps.match.url });
    }
  }

  render() {
    const { classes, match, filter } = this.props;
    let list;

    switch (this.props.location.pathname) {
      case "/blog":
        list = lists.blog;
        break;
      case "/competitiveprogramming":
        list = lists.competitiveprogramming;
        break;
      case "/teachingmyselfcs":
        list = lists.teachingmyselfcs;
        break;
      case "/opensource":
        list = lists.opensource;
        break;
      default:
        list = lists.errorlist;
    }

    for (let tag of this.props.filter) {
      list = list.filter(ele => ele.tag.includes(tag));
    }

    return (
      <div>
        <div style={{ display: "flex", flexFlow: "row wrap" }}>
          {filter.map(ele => (
            <div
              style={{
                display: "flex",
                flexFlow: "row",
                margin: "0 5px 15px 0"
              }}
              key={ele}
            >
              <Chip
                label={ele}
                onDelete={() => this.props.deleteTagFromFilter(ele)}
                color="secondary"
                classes={{
                  root: classes.tag,
                  deleteIcon: classes.closeicon
                }}
                variant="outlined"
              />
            </div>
          ))}
        </div>
        {list.length === 0 && <div className={classes.postTitle}>Nothing here!</div>}
        {list.map((element, index) => {
          const subUrl = element.category ? element.category + "/" : "";
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
                  <div key={ele.toString()} className={classes.upperCat} onClick={() => this.props.addTagToFilter(ele)}>
                    {ele}
                  </div>
                ))}
              </div>
              <Link
                to={`${match.url}/${subUrl}${element.link}`}
                style={{
                  textDecoration: "none",
                  marginBottom: "10px",
                  width: "fit-content"
                }}
              >
                <div className={classes.postTitle}>{element.title}</div>
              </Link>
              <div>{element.description}</div>
              <Link
                style={{
                  textDecoration: "none"
                }}
                to={`${match.url}/${subUrl}${element.link}`}
              >
                <div className={classes.read}>Read</div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
export default withStyles(styles)(Postlist);

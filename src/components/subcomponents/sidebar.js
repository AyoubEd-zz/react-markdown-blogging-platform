import React, { Component } from "react";
//Material UI Imports
import { withStyles } from "@material-ui/core/styles";
//Comopents
//Files
import * as lists from "../../content/lists";

const styles = {
  tagList: {
    width: "fit-content",
    margin: "5px 0",
    fontSize: "1rem",
    borderBottom: "0.5px solid white",
    "&:hover": {
      borderBottom: "0.5px solid #5d93ff",
      color: "#5d93ff",
      cursor: "pointer"
    }
  },
  icons: {
    border: "1px solid #ebebeb",
    borderRadius: "50%",
    padding: "10px",
    height: "18px",
    width: "18px",
    margin: "20px 5px 0 0"
  }
};
class Sidebar extends Component {
  render() {
    const { classes } = this.props;
    let tags, page, description;

    switch (this.props.history.location.pathname.split("/")[1]) {
      case "blog":
        tags = lists.blog_tags;
        description = lists.blog_description;
        page = "Blog";
        break;
      case "competitiveprogramming":
        tags = lists.competitiveprogramming_tags;
        description = lists.competitiveprogramming_description;
        page = "Competitive Programming";
        break;
      case "teachingmyselfcs":
        tags = lists.teachingmyselfcs_tags;
        description = lists.teachingmyselfcs_description;
        page = "Teaching Myself CS";
        break;
      case "opensource":
        tags = lists.opensource_tags;
        description = lists.opensource_description;
        page = "Open Source";
        break;
      default:
        tags = [];
    }

    return (
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          height: "100%",
          paddingLeft: "20vh",
          width: "50vh",
          borderRight: "solid 1px #E6E6E6"
        }}
      >
        <div
          style={{
            fontSize: "1.125rem",
            fontWeight: 600,
            lineHeight: "1.82813rem",
            marginBottom: "1.625rem"
          }}
        >
          {page}
        </div>
        <div
          style={{
            color: "#888",
            marginBottom: "1.625rem",
            lineHeight: "1.625rem",
            fontStyle: "italic",
            borderLeft: "2px solid #5d93ff",
            padding: "0 10px"
          }}
        >
          {description}
        </div>
        <div
          style={{
            alignItems: "flex-start"
          }}
        >
          <div
            className={classes.tagList}
            style={{
              borderBottom: "0.5px solid #000"
            }}
          >
            All
          </div>
          {tags.map(ele => (
            <div className={classes.tagList}>{ele}</div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifySelf: "flex-end"
          }}
        >
          <div className={classes.icons}>
            <a
              href="https://twitter.com/AyoubEddakhly"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg viewBox="0 0 26 28">
                <path d="M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z" />
              </svg>
            </a>
          </div>
          <div className={classes.icons}>
            <a
              href="https://github.com/ayoubed"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg viewBox="0 0 26 28">
                <path d="M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z" />
              </svg>
            </a>
          </div>
          <div className={classes.icons}>
            <a
              href="mailto:ayoubed@protonmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg viewBox="0 0 28 28">
                <path d="M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Sidebar);

import React from "react";
import { withStyles } from "@material-ui/core/styles";
/* Material UI*/
import { Typography } from "@material-ui/core";
/* Files */

const styles = {
  projects: {
    display: "flex",
    flexFlow: "row",
    flexWrap: "wrap"
  },
  project: {
    // minWidth: "300px",
    display: "flex",
    flexFlow: "row",
    flex: "0 40%",
    boxShadow: "none",
    backgroundColor: "#f5f5f5",
    textAlign: "left",
    borderRadius: "10px",
    paddingRight: "10px"
  },
  projectCover: {
    width: 500
  },
  projectTitle: {
    padding: "0 0 8px 0",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer"
    }
  },
  projectBody: {
    textAlign: "left"
  }
};

class Projects extends React.Component {
  render() {
    const { classes, projects } = this.props;
    return (
      <div className={classes.projects}>
        {projects.map((ele, index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                flexWrap: "wrap",
                marginBottom: "15px",
                justifyContent: "space-between"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flex: "0 50%",
                  justifyContent: index % 2 === 0 ? "flex-start" : "flex-end"
                }}
              >
                <div style={{ display: "flex", width: "90%" }}>
                  <div style={{ display: "flex", flexFlow: "column" }}>
                    <Typography variant="h6" align="left" style={{ marginBottom: "15px" }}>
                      {ele.title}
                    </Typography>
                    <div style={{ textAlign: "left" }}>{ele.content}</div>
                  </div>
                </div>
              </div>
              <div style={{ flex: "0 50%", textAlign: index % 2 === 0 ? "right" : "left" }}>
                <img width="90%" src={require("../../content/assets/image-test.png")} alt="project" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(Projects);

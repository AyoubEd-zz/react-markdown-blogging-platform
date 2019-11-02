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
  projectTitle: {
    cursor: "pointer",
    textDecoration: "none",
    width: "fit-content",
    fontWeight: 600,
    color: "#222",
    fontSize: "1.4875rem",
    lineHeight: "1.0375rem",
    borderBottom: "0.5px solid white",
    "&:hover": {
      borderBottom: "0.5px solid gray"
    }
  },
  projectCover: {
    width: 500
  },
  projectBody: {
    textAlign: "left"
  },
  upperCat: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: ".875rem",
    marginRight: "10px",
    color: "#F19F46",
    "&:hover": {
      color: "#5d93ff",
      cursor: "pointer"
    }
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
                    <Typography variant="h6" align="left">
                      <a href={ele.url} target="_blank" rel="noopener noreferrer" className={classes.projectTitle}>
                        {ele.title}
                      </a>
                    </Typography>
                    <div style={{ display: "flex", marginTop: "5px", marginBottom: "20px" }}>
                      {ele.tag.map(ele => (
                        <div key={ele.toString()} className={classes.upperCat}>
                          {ele}
                        </div>
                      ))}
                    </div>
                    <div style={{ textAlign: "left" }}>{ele.content}</div>
                  </div>
                </div>
              </div>
              <div style={{ flex: "0 50%", textAlign: index % 2 === 0 ? "right" : "left" }}>
                <a href={ele.url} target="_blank" rel="noopener noreferrer">
                  <img width="90%" src={require(`../../content/assets/${ele.image}`)} alt="project" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(Projects);

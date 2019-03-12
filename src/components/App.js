import React, { Component } from "react";
//Material UI Imports
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import { Github, Linkedin } from "@material-ui/icons";
//Components
//Files
import profile from "../assets/profile.png";
import { data } from "../resumeInfo";
import "./App.css";

const gray = "rgb(74, 74, 74)";

const style = {
  titleName: {
    color: gray
  },
  bar: {
    backgroundColor: gray,
    flexFlow: "row",
    height: "fit-content",
    fontColor: "white",
    width: "100%",
    margin: "20 15cm 0 15cm",
    borderRadius: "2px"
  },
  textInBar: {
    color: "white",
    marginTop: "20px"
  },
  icon: {
    color: gray,
    padding: "10px"
  },
  section: {
    margin: "1em 0",
    borderLeft: "5px solid",
    borderColor: gray,
    borderRadius: "3px",
    padding: "0.1em",
    backgroundColor: "lightgray",
    width: "fit-content",
    fontWeight: "bold",
    color: gray
  },
  jobs: {
    display: "flex",
    flexFlow: "column"
  },
  projects: {
    display: "flex",
    flexFlow: "row",
    flexWrap: "wrap"
  },
  job: {
    display: "grid",
    flexFlow: "column",
    padding: "0.5em",
    borderLeft: "3px solid",
    borderColor: gray,
    content: "attr(date)"
  },
  tag: {
    position: "absolute",
    background: gray,
    height: "25px",
    width: "25px",
    borderRadius: "100%",
    marginLeft: "-22px",
    color: "white",
    fontWeight: "bold"
  },
  jobContent: {
    display: "flex",
    flexFlow: "column",
    flexGrow: 1,
    alignItems: "flex-start",
    padding: "0 1em"
  },
  videoContainer: {
    flexGrow: 1,
    width: "200px",
    height: "auto",
    alignSelf: "flex-start",
    margin: "0.5em"
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={profile} className="App-logo" alt="profile" />
          <Typography variant="h4" className={classes.titleName} gutterBottom>
            Ayoub Eddakhly
          </Typography>
          <Typography variant="subheading">
            <i>ayoubed@protonmail.com</i>
          </Typography>
          <div>
            <a
              href="https://www.linkedin.com/in/ayoub-eddakhly/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedinIn className={classes.icon} />
            </a>
            <a
              href="https://github.com/AyoubEd"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub className={classes.icon} />
            </a>
            <a
              href="https://twitter.com/AyoubEddakhly"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter className={classes.icon} />
            </a>
          </div>
          <div className={classes.bar}>
            <div className={classes.textInBar}>
              <Typography variant="h6" className={classes.textInBar}>
                Software Engineer | Student at the National Institute INPT
              </Typography>
              <div
                style={{
                  fontStyle: "italic",
                  fontSize: "16px",
                  color: "lightgray"
                }}
              >
                Still building for the love of building, and seeking knowledge
                for the love of discovery and sharing.
              </div>
            </div>
          </div>
        </header>
        <div>
          <Typography variant="h5" align="left" className={classes.section}>
            Experience
          </Typography>
          <div className={classes.jobs}>
            {data.jobs.map((ele, index) => (
              <div className={classes.job}>
                <div
                  style={{
                    display: "flex",
                    flexFlow: "row"
                  }}
                >
                  <div className={classes.tag}>{index + 1}</div>
                  <div className={classes.jobContent}>
                    <div
                      style={{
                        display: "flex",
                        flexFlow: "row",
                        alignItems: "center"
                      }}
                    >
                      <Typography variant="h6" style={{ padding: "0 10px" }}>
                        {ele.company}
                      </Typography>
                      <Typography variant="caption">{ele.time}</Typography>
                    </div>
                    <Typography variant="subtitle2">{ele.title}</Typography>
                    <Typography variant="p" style={{ padding: "5px" }}>
                      {" "}
                      {ele.description}
                    </Typography>
                  </div>
                  <img
                    src={require(`../assets/${ele.logo}.png`)}
                    alt="logo"
                    style={{ height: "5em" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <Typography variant="h5" align="left" className={classes.section}>
            Projects
          </Typography>
          <div className={classes.projects}>
            {data.projects.map(ele => (
              <div className={classes.videoContainer}>
                <iframe
                  src={ele.src}
                  height="auto"
                  width="100%"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            ))}
          </div>

          <Typography variant="h5" align="left" className={classes.section}>
            Blog Posts
          </Typography>
          <Typography variant="h5" align="left" className={classes.section}>
            Extra curriculars
          </Typography>

          <Typography variant="h5" align="left" className={classes.section}>
            About
          </Typography>
          <div style={{ display: "flex", flexFlow: "row", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "300px" }}>
              {data.aboutme.map(ele => (
                <Typography variant="body1" align="left" paragraph>
                  {ele}
                </Typography>
              ))}
            </div>
            <div
              style={{
                width: "fit-content",
                height: "fit-content",
                minWidth: "300px"
              }}
            >
              <img src={require(`../assets/lgPie.png`)} />
              <Typography variant="caption">
                Languages used as reported by Github account.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(App);

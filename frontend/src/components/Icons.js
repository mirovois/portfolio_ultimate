import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Avatar, Typography, Box } from "@material-ui/core";
import iconJS from "../images/iconJS.svg";
import iconReact from "../images/iconReact.svg";
import iconHTML from "../images/iconHtml.svg";
import iconCSS from "../images/iconCss.svg";
import iconNode from "../images/iconNodejs.svg";
import iconBootstrap from "../images/iconBootstrap.svg";
import iconNpm from "../images/iconNpm.svg";
import iconFirebase from "../images/iconFireBase.svg";
import iconMysql from "../images/iconMysql.svg";
import iconAdobe from "../images/adobe.svg";
import iconGithub from "../images/iconGithub.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      flexWrap: "wrap",
      margin: "auto",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "auto",
      padding: "0 1rem",
      justifyContent: "center",
    },
    [theme.breakpoints.up("md")]: {
      margin: "auto",
      padding: "0 1rem ",
    },
  },
  avatar: {
    [theme.breakpoints.up("xs")]: {
      width: "3rem",
      height: "3rem",
    },
    [theme.breakpoints.up("md")]: {
      width: "3.5rem",
      height: "3.5rem",
    },
    [theme.breakpoints.up("md")]: {
      width: "4rem",
      height: "4rem",
    },
  },
  icon__name: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.7rem",
    },
  },
}));

const icons = [
  { icon: iconHTML, name: "HTML5" },
  { icon: iconCSS, name: "CSS3" },
  { icon: iconJS, name: "JavaScript" },
  { icon: iconReact, name: "React" },
  { icon: iconNode, name: "NodeJS" },
  { icon: iconBootstrap, name: "Bootstrap" },
  { icon: iconNpm, name: "NPM" },
  { icon: iconFirebase, name: "FireBase" },
  { icon: iconMysql, name: "MySQL" },
  { icon: iconAdobe, name: "AdobeXD" },
  { icon: iconGithub, name: "GitHub" },
];

const Icons = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        variant="h3"
        align="center"
        style={{
          color: "beige",
          fontFamily: "Vidaloka",
          margin: "2rem 1.5rem",
        }}
      >
        Skills
      </Typography>
      <Grid
        container
        alignItems="center"
        justify="center"
        spacing={2}
        gutterBottom
        style={{ margin: "auto" }}
      >
        {icons.map((icon) => (
          <Grid
            style={{ marginBottom: "2rem", color: "beige", fontWeight: 500 }}
            item
            xs={6}
            md={4}
            lg={4}
            gutterBottom
          >
            <Box className={classes.box}>
              <Avatar className={classes.avatar} src={icon.icon} />
              <Typography className={classes.icon__name}>
                {icon.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Icons;

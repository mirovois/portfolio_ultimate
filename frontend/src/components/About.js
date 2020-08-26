import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0.5rem",
  },
  title: {
    color: "beige",
    fontFamily: "Vidaloka",
    fontSize: "calc(2rem + 2vw)",
    marginBottom: "1.4rem",
  },
  text: {
    paddingLeft: "5%",
    textIndent: "0.5rem",
    fontSize: "calc(0.7rem + 0.8vw)",
    lineHeight: "125%",
    color: "beige",
    fontFamily: "Bebas",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} align="center">
        About me
      </Typography>
      <Grid gutterBottom>
        <Grid item xs={12} md={10} lg={8}>
          <Typography align="justify" paragraph className={classes.text}>
            Hello! I am front-end developer currently located in Montreal. I am
            pursuing the opportunity to begin my careeer in web development.
          </Typography>
          <Typography align="justify" paragraph className={classes.text}>
            From my professional background as an engineer I aquired solid
            technical skills, learnt to work in a team and managed to finalize
            tasks depending on their priority and deadlines.
          </Typography>
          <Typography align="justify" paragraph className={classes.text}>
            Therefore, when I developed an interest for programming I did not
            hesitate to turn my interest into a possible career.
          </Typography>
          <Typography align="justify" paragraph className={classes.text}>
            I enjoy learning about new technologies and a keen interest for web
            development with time has turned into a real passion.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;

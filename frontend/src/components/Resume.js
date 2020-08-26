import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Grid,
  IconButton,
  Divider,
  Icon,
} from "@material-ui/core";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import pdf from "../resume_MyroslavVoysovych.pdf";
import Icons from "../components/Icons";
import About from "../components/About";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1,
    marginLeft: "25%",
    marginRight: "8%",
    marginTop: "6rem",
    marginBottom: "2rem",
    background: "-webkit-linear-gradient(to right, #4b6cb7, #182848)",
    background: "linear-gradient(to right, #4b6cb7, #182848)",
  },

  about: {
    marginBottom: "2rem",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  desc: {
    flex: "2 15rem",
  },

  text: {
    padding: "0 1rem",
    textAlign: "justify",
    textIndent: "1rem",
    fontSize: "calc(0.7rem + 0.8vw)",
    lineHeight: "130%",
    color: "beige",
    fontFamily: "Bebas",
    marginBottom: "1rem",
  },
}));
const Resume = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <IconButton href={pdf} target="_blank" variant="raised">
        <PictureAsPdfIcon style={{ width: 60, height: 60 }} />
      </IconButton>
      <Typography
        variant="h4"
        display="inline"
        align="center"
        style={{ color: "beige", fontSize: "calc(1rem + 1vw" }}
      >
        Download Resume
      </Typography>

      <About />
      <Divider variant="middle" height={10} />
      <Icons />
    </Box>
  );
};

export default Resume;

import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Avatar,
  CardHeader,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import data from "../cards-data";
import iconjs from "../images/iconJS.svg";

const useStyles = makeStyles((theme) => ({
  card: {
    background: "#4286f4",
    marginBottom: "3rem",
    maxWidth: 305,
    zIndex: 10,
    [theme.breakpoints.down("lg")]: {
      maxWidth: 280,
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 230,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 200,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 260,
    },
  },
  header: {
    height: "5rem",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  },
  cardMedia: {
    height: 180,
  },
  button: {
    display: "flex",
    alignItems: "center",
  },
}));

function CardProject(props) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card} shadow={5} spacing={2}>
        <CardHeader
          className={classes.header}
          title={<Typography variant="h5">{props.name}</Typography>}
          avatar={<Avatar src={props.icon} sizes="sm" />}
        />
        <CardActionArea height="330" className={classes.action__area}>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            alt="Banking App"
            height="100%"
            width="100%"
            image={props.image}
            title="JS project"
          />
          <CardContent spacing={2} style={{ width: "100%", height: 200 }}>
            <Typography variant="body1" color="textSecondary" align="justify">
              {props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="primary"
            href={props.source}
          >
            <Typography>Source</Typography>
            <GitHubIcon className={classes.gitIcon} />
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            href={props.link}
          >
            <Typography>Demo</Typography>
            <CodeIcon className={classes.gitIcon} />
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default CardProject;

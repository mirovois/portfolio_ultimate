import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid, Button } from "@material-ui/core";
import CardProject from "./CardProject";
import { makeStyles } from "@material-ui/core/styles";
import cardsInfo from "../cards-data";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "6rem",
    background: "transparent",
    zIndex: 6,
    [theme.breakpoints.down("xs")]: {
      margin: "auto",
      paddingLeft: "2rem ",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "9rem",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "9rem",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "10rem",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    const mydata = cardsInfo;
    setData(mydata);
    console.log(data);
  }, []);

  return (
    <Box component="div" className={classes.root}>
      <Grid container gutter justify="center" className={classes.grid__main}>
        {data.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <CardProject
              name={card.name}
              desc={card.desc}
              image={card.image}
              source={card.source}
              link={card.link}
              icon={card.icon}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

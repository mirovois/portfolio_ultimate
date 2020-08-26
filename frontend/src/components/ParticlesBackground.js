import React from "react";
import { makeStyles } from "@material-ui/styles";
import Particles from "react-particles-js";

const useStyles = makeStyles({
  screen: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});

const ParticlesBackground = () => {
  const classes = useStyles();
  return (
    <>
      <Particles
        canvasClassName={classes.screen}
        params={{
          particles: {
            number: {
              value: 85,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            size: {
              value: 5,
              random: true,
            },
            shape: {
              type: "star",
              stroke: {
                width: 1,
                color: "red",
              },
            },
          },
        }}
      />
    </>
  );
};

export default ParticlesBackground;

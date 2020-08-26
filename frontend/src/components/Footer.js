import React, { Component } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { IconButton, Button } from "@material-ui/core";

export class Footer extends Component {
  render() {
    return (
      <div style={{ display: "flex", marginTop: "3rem" }}>
        <IconButton
          variant="contained"
          style={{ color: "white" }}
          href="https://www.linkedin.com/in/myroslavvoysovych/"
        >
          <LinkedInIcon style={{ color: "#4286f4", width: 48, height: 48 }} />
        </IconButton>

        <IconButton href="https://github.com/">
          <GitHubIcon
            style={{ color: "#4286f4", width: 40, height: 40 }}
            fontSize="18"
          />
        </IconButton>
      </div>
    );
  }
}

export default Footer;

import React, { Component } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Button,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";

const styles = (theme) => ({
  root: {
    zIndex: 1,
    width: "65%",
    marginLeft: "25%",
    marginRight: "8%",
    marginTop: "5rem",
    marginBottom: "1rem",
    paddingBottom: "1rem",
    background: "-webkit-linear-gradient(to right, #4b6cb7, #182848)",
    background: "linear-gradient(to right, #4b6cb7, #182848)",
    textAlign: "center",
  },
  title: {
    color: "beige",
    fontFamily: "Vidaloka",
    fontSize: "calc(2rem + 2vw)",
  },
  input__block: {
    marginTop: "2rem",
    background: "white",
  },
  text__area: {
    margin: "2rem 0 0.2rem 0",
    background: "white",
    width: "14rem",
  },
  error_message: {
    fontSize: 12,
    color: "red",
  },
  confirmation_message: {
    textAlign: "center",
    color: "white",
  },
});

const validate = (firstName, lastName, email, message) => {
  const errors = {};
  if (!firstName) {
    errors.firstName = "First name can't be empty";
  }
  if (!lastName) {
    errors.lastName = "Last name can't be empty";
  }

  if (typeof email !== "undefined") {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(email)) {
      errors.email = "Please enter valid email address.";
    }
  }

  return errors;
};

class ContactPage extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    sent: false,
    errors: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, message } = this.state;

    const errors = validate(firstName, lastName, email);
    if (Object.values(errors).length > 0) {
      this.setState({ errors: errors });
      return;
    }
    let data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      message: this.state.message,
    };
    axios
      .post("/api/form", data)
      .then((res) => {
        this.setState({
          sent: true,
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          errors: {},
        });
        console.log(this.state.sent);
        console.log("Your message has been sent!");
        e.target.reset();
      })
      .catch(() => {
        console.log("Data not sent");
      });
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => console.log(this.state));
  };

  render() {
    const { errors } = this.state;
    const { classes, children } = this.props;

    return (
      <div className={classes.root}>
        <Typography className={classes.title} align="center">
          Contact me
        </Typography>

        <form onSubmit={this.handleSubmit} ren>
          {this.state.sent && (
            <h2 className="confirmation_message">
              Your message has been sent.
              <br />
              Tnank you for your interest!
            </h2>
          )}
          <Grid
            container
            spacing={3}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <TextField
              name="firstName"
              type="text"
              className={classes.input__block}
              label="First Name"
              variant="filled"
              onChange={this.handleChange}
            />
            {"firstName" in errors && (
              <span className={classes.error_message}>{errors.firstName}</span>
            )}
            <TextField
              className={classes.input__block}
              name="lastName"
              type="text"
              label="Last Name"
              variant="filled"
              onChange={this.handleChange}
            />
            {"lastName" in errors && (
              <span className={classes.error_message}>{errors.lastName}</span>
            )}
            <TextField
              name="email"
              type="text"
              className={classes.input__block}
              label="E-mail "
              variant="filled"
              onChange={this.handleChange}
            />
            {"email" in errors && (
              <span className={classes.error_message}>{errors.email}</span>
            )}
            <TextareaAutosize
              name="message"
              type="text"
              rowsMin={4}
              className={classes.text__area}
              multiline
              placeholder="your message..."
              onChange={this.handleChange}
            />
            {"message" in errors && (
              <span className={classes.error_message}>{errors.message}</span>
            )}
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(ContactPage);

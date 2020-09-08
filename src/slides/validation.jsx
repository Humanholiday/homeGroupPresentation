import React from "react";
import { theme, template, validCodeBlock } from "../theme";
import ProgressButton from "react-progress-button";
import ToggleButton from "react-bootstrap/ToggleButton";
import "../App.scss";
import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Markdown,
  Notes,
  OrderedList,
  Progress,
  Slide,
  SpectacleLogo,
  Stepper,
  Text,
  UnorderedList,
  indentNormalizer,
} from "spectacle";

export default class Validation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: "",
        password: "",
      },
      errors: {
        email: "",
        password: "",
      },
    };
  }

  // Email validation with regex.
  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase()))
      this.setErrors({ email: "Email is invalid" });
    else this.setErrors({ email: "" });
  };

  //Password validation - 8 characters min.
  validatePassword = (password) => {
    if (password.length < 8)
      this.setErrors({
        password: "Password must have at least 8 characters",
      });
    else this.setErrors({ password: "" });
  };

  //Function applied in validation function to assign error to state.
  setErrors = (error) =>
    this.setState({
      errors: { ...this.state.errors, ...error },
    });

  //On change function to check validation only if user has inputted text, left then returned.
  //this enables the error message to disappear without the user needing to exit the input.
  handleInputChange = (e) => {
    if (e.target.name === "email" && this.state.errors.email.length > 0) {
      this.validateEmail(e.target.value);
    }
    if (e.target.name === "password" && this.state.errors.password.length > 0) {
      this.validatePassword(e.target.value);
    }
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <Heading>Validation</Heading>

        <CodePane fontSize={18} language="javascript" autoFillHeight="true">
          {validCodeBlock}
        </CodePane>

        <div className="inputs">
          <div className="inputs-group">
            <label htmlFor="username">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.values.email}
              onChange={this.handleInputChange}
              onBlur={(e) => this.validateEmail(e.target.value)}
              title="Email"
              required
            />
            <p class="error">{this.state.errors.email}</p>
          </div>
          <div className="inputs-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.values.password}
              onChange={this.handleInputChange}
              onBlur={(e) => this.validatePassword(e.target.value)}
              title="password"
              required
            />
            <p class="error">{this.state.errors.password}</p>
          </div>
        </div>
      </div>
    );
  }
}

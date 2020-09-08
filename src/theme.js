import React from "react";
import "./App.scss";
import logo from "./logo.svg";
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

// SPECTACLE_CLI_THEME_START
export const theme = {
  fonts: {
    header: '"Trueno", Helvetica, Arial, sans-serif',
    text: '"Trueno", Helvetica, Arial, sans-serif',
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
export const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <img className="logo" src={logo} />
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

export const formidableLogo =
  "https://avatars2.githubusercontent.com/u/5078602?s=280&v=4";

export const initialCodeBlock = indentNormalizer(`
**React** 

import React from "react";
import Header from "./header";
import SignInForm from "./sign-in-form";
import Contact from "./contact";
import "../App.scss";

export default class Layout extends React.Component {
  render() {
    return (
      <div className="content">
        <Header />
        <SignInForm />
        <Contact />
      </div>
    );
  }
}

**SASS**

//Login Main Container
.login {
  max-width: 40em;
  width: 100%;
  max-height: 40em;
  height: 100%;
  //min-height: 44em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $white;
  box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.2);
  border-radius: 2em;
  position: relative;
  padding: 17px 10px;
}`);

export const interCodeBlock = indentNormalizer(`
**Link to homepage** 

  <div className="image">
    <a href="https://www.homegroup.org.uk/">
      <img src={logo} />
    </a>
  </div>

**Dynamic greeting** 

  //change greeting depending on time of day.
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  if (currentTime < 12) {
    greeting = "morning";
  } else if (currentTime < 18) {
    greeting = "afternoon";
  } else {
    greeting = "evening";
  }

  **Contact Us** 

  <div className="contact">
    <p>
      Having Issues?&nbsp;
      <a href="https://www.homegroup.org.uk/get-in-touch/">Talk to us.</a>
    </p>
  </div>

  **Hover**

  input {
          box-shadow: 0 0 1px 0.3px $border;
          transition: all 250ms ease-in-out;
          &:hover {
            background-color: $white;
            box-shadow: 0 0 4px 0.3px $light-green;
          }
          &:focus {
            outline: none;
            box-shadow: 0 0 4px 0.8px $base-green;
          }
        }
`);

export const submitCodeBlock = indentNormalizer(`
render() {
    return (
      <div className="button">
        <ProgressButton
          type="submit"
          onClick={this.handleClick}
          state={this.state.buttonState}
        >
          Sign In
        </ProgressButton>
      </div>
    );
  }
`);

export const validCodeBlock = indentNormalizer(`

 // Email validation with regex.
  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase()))
      this.setErrors({ email: "Email is invalid" });
    else this.setErrors({ email: "" });
  };

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

    //Password validation - 8 characters min.
  validatePassword = (password) => {
    if (password.length < 8)
      this.setErrors({
        password: "Password must have at least 8 characters",
      });
    else this.setErrors({ password: "" });
  };


`);

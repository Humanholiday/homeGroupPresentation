import React from "react";
import {
  theme,
  template,
  formidableLogo,
  interCodeBlock,
  submitCodeBlock,
} from "../theme";
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

export default class AnimatedSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttonState: "" };
    this.state = { checked: true };
    this.handleClick = this.handleClick.bind(this);
  }

  //onClick function to call the button animation depending on the result of email and password validation. Valid entry = green tick. Invalid entry = red cross.
  handleClick() {
    this.setState({ buttonState: "loading" });
    // make asynchronous call
    setTimeout(() => {
      this.setState({ buttonState: "success" });
    }, 1500);
  }

  render() {
    return (
      <div>
        <Heading>Animated Submit</Heading>

        <CodePane fontSize={18} language="javascript" autoFillHeight="true">
          {submitCodeBlock}
        </CodePane>

        <Heading margin="10px 62px" color="quaternary" fontSize="40px">
          The react-progress-button component adds animation
        </Heading>

        <div className="button">
          <ProgressButton
            type="submit"
            onClick={this.handleClick}
            state={this.state.buttonState}
          >
            Sign In
          </ProgressButton>
        </div>
        <Notes>
          <p>
            I found an animated progress button that i thought would work well
            in place of back-end validation so I npm installed the relevant
            package, copied the associated css and worked it into my app. I
            adjusted some of the css to ensure the button fitted with my basic
            styling.
          </p>
        </Notes>
      </div>
    );
  }
}

import React from "react";
import {
  theme,
  template,
  formidableLogo,
  interCodeBlock,
  responseCodeBlock,
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

export default class Responsive extends React.Component {
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
        <Heading>Responsive</Heading>

        <CodePane fontSize={18} language="css" autoFillHeight="true">
          {responseCodeBlock}
        </CodePane>

        <Heading margin="10px 62px" color="quaternary" fontSize="40px">
          Use chrome dev tools to ensure form is responsive
        </Heading>
      </div>
    );
  }
}

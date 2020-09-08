import React from "react";
import { theme, template, formidableLogo, initialCodeBlock } from "../theme";
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

export default class InitialDesign extends React.Component {
  render() {
    return (
      <div>
        <Heading>Initial Design</Heading>

        <CodePane fontSize={18} language="cpp" autoFillHeight>
          {initialCodeBlock}
        </CodePane>

        <Heading margin="10px 62px" color="quaternary" fontSize="40px">
          I created the main login container, then added the component files I
          thought were needed. I started with a basic header and form and did
          some basic styling.
        </Heading>
      </div>
    );
  }
}

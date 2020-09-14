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
        <Notes>
          <p>
            MY first step was to create the main login container in my App.js
            file. I styled this so that the basic positioning and format was in
            place.
          </p>
          <p>
            After that i created the component file structure of the layout,
            header, sign in form, sign in button and contact components. I
            entered some starter code into these component files and did some
            basic styling so that the layout framework was in place.
          </p>
        </Notes>
      </div>
    );
  }
}

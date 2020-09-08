import React from "react";
import { theme, template, formidableLogo, interCodeBlock } from "../theme";
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

export default class AddInteractive extends React.Component {
  render() {
    return (
      <div>
        <Heading>Add Interactivity</Heading>

        <CodePane fontSize={18} language="javascript" autoFillHeight="true">
          {interCodeBlock}
        </CodePane>

        <Text>Link to homepage, dynamic greeting, contact us, hover</Text>
      </div>
    );
  }
}

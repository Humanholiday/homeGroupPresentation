import React from "react";
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

export default class Improvements extends React.Component {
  render() {
    return (
      <div>
        <Heading>Improvements</Heading>
        <UnorderedList color="quaternary">
          <ListItem>
            <CodeSpan>More refactoring</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>Some redundant css</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>Design for accessibility</CodeSpan>
          </ListItem>
        </UnorderedList>
      </div>
    );
  }
}

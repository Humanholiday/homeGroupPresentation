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

export default class Positives extends React.Component {
  render() {
    return (
      <div>
        <Heading>Positives</Heading>
        <UnorderedList color="quaternary">
          <ListItem>
            <CodeSpan>So much fun!</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>Primary objective achieved</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>Pleased with the additional interactivity</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>A great learning experience</CodeSpan>
          </ListItem>
        </UnorderedList>
      </div>
    );
  }
}

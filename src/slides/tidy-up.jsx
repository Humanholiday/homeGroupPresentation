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

export default class TidyUp extends React.Component {
  render() {
    return (
      <div>
        <Heading>Tidying Up</Heading>
        <UnorderedList>
          <ListItem>
            <CodeSpan>Code Refactor</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>Tweak styling</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>Update README</CodeSpan>
          </ListItem>
        </UnorderedList>
      </div>
    );
  }
}

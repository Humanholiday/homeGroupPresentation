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

export default class PresPositives extends React.Component {
  render() {
    return (
      <div>
        <Heading>Presentation Positives</Heading>
        <UnorderedList>
          <ListItem>
            <CodeSpan>More coding fun</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>Ability to live demo code and components</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>Built in presenter mode</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>Another great learning experience</CodeSpan>
          </ListItem>
        </UnorderedList>
      </div>
    );
  }
}

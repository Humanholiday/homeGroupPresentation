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

export default class Intro extends React.Component {
  render() {
    return (
      <div>
        <FlexBox height="100%" flexDirection="column">
          <Heading margin="0px" fontSize="150px">
            ✨<i>Spectacle</i> ✨
          </Heading>
          <Heading margin="0px" fontSize="h2">
            A ReactJS Presentation Library
          </Heading>
          <Heading margin="0px 32px" color="primary" fontSize="h3">
            Where you can write your decks in JSX, Markdown, or MDX!
          </Heading>
        </FlexBox>
        <Notes>
          <p>
            Notes are shown in presenter mode. Open up
            localhost:3000/?presenterMode=true to see them.
          </p>
        </Notes>
      </div>
    );
  }
}

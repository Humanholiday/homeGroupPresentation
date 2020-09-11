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

export default class Final extends React.Component {
  render() {
    return (
      <div>
        <FlexBox height="100%" flexDirection="column">
          <Heading margin="100px" fontSize="70px">
            <i>Thank You</i>
          </Heading>
          <Heading margin="0px" fontSize="h2">
            Source code for both projects is available on my GitHub profile
            (github.com/Humanholiday)
          </Heading>
        </FlexBox>
      </div>
    );
  }
}

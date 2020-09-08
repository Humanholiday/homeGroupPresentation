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

export default class Title extends React.Component {
  render() {
    return (
      <div>
        <FlexBox height="100%">
          <Heading margin="0px" fontSize="120px">
            <div>Design to Reality Login Screen</div>
          </Heading>
        </FlexBox>
        <Heading color="primary" fontSize="45px">
          Presented by Jack Healy
        </Heading>
      </div>
    );
  }
}

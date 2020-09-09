import React from "react";
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

export default class Title extends React.Component {
  render() {
    return (
      <div>
        <FlexBox height="100%">
          <Heading margin="-2px" fontSize="80px">
            <div>Login Screen</div>
          </Heading>
        </FlexBox>
        <Heading className="PresentedBy" color="quaternary" fontSize="45px">
          Presented by Jack Healy
        </Heading>
      </div>
    );
  }
}

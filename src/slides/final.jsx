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
          <Heading margin="0px" fontSize="70px">
            <i>Thank You</i>
          </Heading>
          <Heading margin="0px" fontSize="h2">
            Source code for both projects is available on my GitHub profile
            (github.com/Humanholiday)
          </Heading>
          <Heading margin="0px 32px" color="primary" fontSize="45px">
            Spectacle - A React.js based library for creating presentations
            using JSX syntax that gives you the ability to live demo your code.
          </Heading>
        </FlexBox>
        <Notes>
          <p>
            Built with React Sass My Objective To create a Login screen with a
            clean, attractive, responsive and interactive UI. To add
            interactivity where possible, with cursor highlighting, form
            validation and an animated Sign In button. Use a sympathetic colour
            palette. Packages - Outside of the standard dependencies created by
            create-react-app and installing Sass I used - react-progress-button
          </p>
        </Notes>
      </div>
    );
  }
}

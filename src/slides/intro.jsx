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
          {/* <Heading margin="0px" fontSize="150px">
            ✨<i>Spectacle</i> ✨
          </Heading> */}
          <Heading margin="0px" fontSize="h2">
            The Objective
          </Heading>
          <Heading margin="0px 32px" color="primary" fontSize="45px">
            To put into practice my knowledge of React and Sass.
          </Heading>
          <Heading margin="0px 32px" color="primary" fontSize="45px">
            Create a Login screen with a clean, attractive, responsive and
            interactive UI.
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

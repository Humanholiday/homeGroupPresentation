import React from "react";
import reactLogo from "../React.svg";
import sassLogo from "../Sass.svg";
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
          <div>
            <img className="reactLogo" src={reactLogo} />
            <img className="sassLogo" src={sassLogo} />
          </div>
        </FlexBox>
        <Notes>
          <p>
            I had been learning React and Sass as part of an online course,
            following along with the instructor. I knew i was making good
            progress but felt that i needed to step away from the hand holding
            of the course and test what i had learned in a small project of my
            own devising. I chose to create a login screen using React and Sass.
            While my other courses have been largely a mix of front end and back
            end, this project would be front end focused only.
          </p>
          <p>
            My Objective To create a Login screen with a clean, attractive,
            responsive and interactive UI. To add interactivity where possible,
            with cursor highlighting, form validation and an animated Sign In
            button. Use a sympathetic colour palette. Packages - Outside of the
            standard dependencies created by create-react-app and installing
            Sass I used - react-progress-button
          </p>
        </Notes>
      </div>
    );
  }
}

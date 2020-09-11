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

export default class Improvements extends React.Component {
  render() {
    return (
      <div>
        <Heading>Improvements</Heading>
        <UnorderedList color="quaternary">
          <ListItem>
            <CodeSpan>More refactoring</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>Some redundant css</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>Design for accessibility</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>Add sliding component for new user sign up</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>
              Slight div height increase with OnClick animation
            </CodeSpan>
          </ListItem>
        </UnorderedList>

        <Notes>
          <p>
            I could simplify the code more, and could likely improve the
            component structure. within that refactoring i could work through
            the css and remove some redundant parts. i didnt do this as i wanted
            to stick to my original deadline and also move onto other areas of
            learning.
          </p>
          <p>
            This task was aesthetically focused so i didnt consider the impact
            of users with acessibility needs. I would like to include this
            thinking in my work in the future.
          </p>
        </Notes>
      </div>
    );
  }
}

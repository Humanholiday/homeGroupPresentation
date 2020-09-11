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

export default class Positives extends React.Component {
  render() {
    return (
      <div>
        <Heading>Positives</Heading>
        <UnorderedList color="quaternary">
          <ListItem>
            <CodeSpan>So much fun!</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>Primary design objective achieved</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>Increased understanding of React and Sass</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>Pleased with the additional interactivity</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>A great developmental experience</CodeSpan>
          </ListItem>
        </UnorderedList>
        <Notes>
          <p>
            As my first solo front end project i was very happy with the result
            and also really motivated by the experience. I loved every minute of
            it, including the parts when io was pulling my hair out.
          </p>
        </Notes>
      </div>
    );
  }
}

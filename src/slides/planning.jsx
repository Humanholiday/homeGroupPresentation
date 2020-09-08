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

export default class Planning extends React.Component {
  render() {
    return (
      <div>
        <Heading>Planning & Set Up</Heading>
        <UnorderedList>
          <ListItem>
            <CodeSpan>Research login screens</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>What design? simple, clean, modern, responsive</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>
              What functionality? validation, animation, interactivity
            </CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>Set a deadline & progress tracking</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>Set up- create-react-app, git repo, dev server</CodeSpan>
          </ListItem>
        </UnorderedList>
      </div>
    );
  }
}

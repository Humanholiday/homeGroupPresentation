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

export default class PresImprovements extends React.Component {
  render() {
    return (
      <div>
        <Heading>Presentation Improvements</Heading>
        <UnorderedList color="quaternary">
          <ListItem>
            <CodeSpan>Component-based approach limits functionality</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>Styling tweaks</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>
              Would have liked to have added some more features
            </CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>
              I would like to explore other libraries e.g. WebSlides, Bespoke.js
            </CodeSpan>
          </ListItem>
        </UnorderedList>
      </div>
    );
  }
}

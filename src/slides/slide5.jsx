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

export default class Slide5 extends React.Component {
  render() {
    return (
      <div>
        <Heading>Animated Elements</Heading>
        <OrderedList>
          <Appear elementNum={0}>
            <ListItem>Elements can animate in!</ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem>
              Just identify the order with the prop{" "}
              <CodeSpan>elementNum</CodeSpan>!
            </ListItem>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>Out of order</ListItem>
          </Appear>
        </OrderedList>
        ?
      </div>
    );
  }
}

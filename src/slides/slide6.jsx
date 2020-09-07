import React from "react";
import { theme, template, formidableLogo, cppCodeBlock } from "../theme";
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

export default class Slide6 extends React.Component {
  render() {
    return (
      <div>
        <FlexBox>
          <Text>These</Text>
          <Text>Text</Text>
          <Text color="secondary">Items</Text>
          <Text fontWeight="bold">Flex</Text>
        </FlexBox>
        <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
          <Box backgroundColor="primary">
            <Text color="secondary">Single-size Grid Item</Text>
          </Box>
          <Box backgroundColor="secondary">
            <Text>Double-size Grid Item</Text>
          </Box>
        </Grid>
        <Grid
          gridTemplateColumns="1fr 1fr 1fr"
          gridTemplateRows="1fr 1fr 1fr"
          alignItems="center"
          justifyContent="center"
          gridRowGap={1}
        >
          {Array(9)
            .fill("")
            .map((_, index) => (
              <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
                <Image src={formidableLogo} width={100} />
              </FlexBox>
            ))}
        </Grid>
      </div>
    );
  }
}

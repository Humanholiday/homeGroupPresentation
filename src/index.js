import React from "react";
import ReactDOM from "react-dom";
import Title from "./slides/title";
import Intro from "./slides/intro";
import { theme, template, formidableLogo, cppCodeBlock } from "./theme";
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

const Presentation = () => (
  <Deck theme={theme} template={template} transitionEffect="fade">
    <Slide>
      <Title />
    </Slide>

    <Slide>
      <Intro />
    </Slide>

    <Slide
      backgroundColor="tertiary"
      backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/beau.jpg?raw=true)"
      backgroundOpacity={0.5}
    >
      <Heading>Custom Backgrounds</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>backgroundColor</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundImage</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundOpacity</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundSize</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundPosition</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundRepeat</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide transitionEffect="slide">
      <Heading>Code Blocks</Heading>
      <Stepper
        defaultValue={[]}
        values={[
          [1, 1],
          [23, 25],
          [40, 42],
        ]}
      >
        {(value, step) => (
          <Box position="relative">
            <CodePane
              highlightStart={value[0]}
              highlightEnd={value[1]}
              fontSize={18}
              language="cpp"
              autoFillHeight
            >
              {cppCodeBlock}
            </CodePane>

            <Box
              position="absolute"
              bottom="0rem"
              left="0rem"
              right="0rem"
              bg="black"
            >
              {/* This notes container won't appear for step 0 */}

              {step === 1 && (
                <Text fontSize="1.5rem" margin="0rem">
                  This is a note!
                </Text>
              )}

              {step === 2 && (
                <Text fontSize="1.5rem" margin="0rem">
                  You can use the stepper state to render whatever you like as
                  you step through the code.
                </Text>
              )}
            </Box>
          </Box>
        )}
      </Stepper>
      <Text>
        Code Blocks now auto size and scroll when there is an overflow of
        content! They also auto-wrap longer lines.
      </Text>
    </Slide>
    <Slide>
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
    </Slide>
    <Slide>
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
    </Slide>
    <Slide>
      <Markdown>
        {`
          # Layout Tables in Markdown
          | Browser         | Supported | Versions |
          |-----------------|-----------|----------|
          | Chrome          | Yes       | Last 2   |
          | Firefox         | Yes       | Last 2   |
          | Opera           | Yes       | Last 2   |
          | Edge (EdgeHTML) | No        |          |
          | IE 11           | No        |          |
        `}
      </Markdown>
    </Slide>
    <Markdown containsSlides>
      {`
        ### Even write multiple slides in Markdown
        > Wonderfully formatted quotes
        1. Even create
        2. Lists in Markdown
        - Or Unordered Lists
        - Too!!
        Notes: These are notes
        ---
        ### This slide was also generated in Markdown!
        \`\`\`jsx
        const evenCooler = "is that you can do code in Markdown";
        // You can even specify the syntax type!
        \`\`\`
        ### A slide can have multiple code blocks too.
        \`\`\`c
        char[] someString = "Popular languages like C too!";
        \`\`\`
        Notes: These are more notes
      `}
    </Markdown>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));

import React from "react";
import "./App.scss";
import ReactDOM from "react-dom";
import Title from "./slides/title";
import Intro from "./slides/intro";
import Planning from "./slides/planning";
import InitialDesign from "./slides/initial-design";
import AddInteractive from "./slides/add-interactive";
import Slide3 from "./slides/slide3";
import Slide4 from "./slides/slide4";
import Slide5 from "./slides/slide5";
import Slide6 from "./slides/slide6";
import Slide7 from "./slides/slide7";
import { theme, template, cppCodeBlock } from "./theme";
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

    <Slide>
      <Planning />
    </Slide>

    <Slide>
      <InitialDesign />
    </Slide>

    <Slide>
      <AddInteractive />
    </Slide>

    <Slide
      backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/beau.jpg?raw=true)"
      backgroundOpacity={0.5}
    >
      <Slide3 />
    </Slide>

    <Slide transitionEffect="slide">
      <Slide4 />
    </Slide>

    <Slide>
      <Slide5 />
    </Slide>

    <Slide>
      <Slide6 />
    </Slide>

    <Slide>
      <Slide7 />
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

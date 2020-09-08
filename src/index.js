import React from "react";
import "./App.scss";
import ReactDOM from "react-dom";
import Title from "./slides/title";
import Intro from "./slides/intro";
import Planning from "./slides/planning";
import InitialDesign from "./slides/initial-design";
import AddInteractive from "./slides/add-interactive";
import AnimatedSubmit from "./slides/animated-submit";
import Validation from "./slides/validation";
import Responsive from "./slides/responsive";
import TidyUp from "./slides/tidy-up";
import Positives from "./slides/positives";
import Improvements from "./slides/improvements";
import BonusIntro from "./slides/bonus-intro";
import PresPositives from "./slides/pres-positives";
import PresImprovements from "./slides/pres-improve";
import Final from "./slides/final";
import "./images/HGLoginFull.png";
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
    <Slide
      backgroundImage="src(./images/HGLoginFull.png)"
      backgroundOpacity={0.8}
      backgroundSize="50%"
    >
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

    <Slide>
      <AnimatedSubmit />
    </Slide>

    <Slide>
      <Validation />
    </Slide>

    <Slide
      backgroundImage="url(https://www.acidgreen.com.au/wp-content/uploads/2020/05/iStock-612224522.jpg)"
      backgroundOpacity={0.1}
      backgroundSize="100%"
    >
      <Responsive />
    </Slide>

    <Slide>
      <TidyUp />
    </Slide>

    <Slide>
      <Positives />
    </Slide>

    <Slide>
      <Improvements />
    </Slide>

    <Slide
      backgroundImage="url(https://raw.githubusercontent.com/FormidableLabs/spectacle/main/docs/src/assets/logo_spectacle.png)"
      backgroundOpacity={0.1}
      backgroundSize="50%"
    >
      <BonusIntro />
    </Slide>

    <Slide
      backgroundImage="url(https://raw.githubusercontent.com/FormidableLabs/spectacle/main/docs/src/assets/logo_spectacle.png)"
      backgroundOpacity={0.1}
      backgroundSize="50%"
    >
      <PresPositives />
    </Slide>

    <Slide
      backgroundImage="url(https://raw.githubusercontent.com/FormidableLabs/spectacle/main/docs/src/assets/logo_spectacle.png)"
      backgroundOpacity={0.1}
      backgroundSize="50%"
    >
      <PresImprovements />
    </Slide>

    <Slide>
      <Final />
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));

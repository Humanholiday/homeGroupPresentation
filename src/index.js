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
import Positives from "./slides/positives";
import Improvements from "./slides/improvements";
import BonusIntro from "./slides/bonus-intro";
import PresPositives from "./slides/pres-positives";
import PresImprovements from "./slides/pres-improve";
import Final from "./slides/final";
import "./images/HGLoginFull.png";
import { theme, template } from "./theme";
import { Deck, Slide } from "spectacle";

const Presentation = () => (
  <Deck theme={theme} template={template} transitionEffect="fade">
    <Slide
      backgroundImage="url(https://github.com/Humanholiday/homeGroupPresentation/blob/master/src/images/HGLoginFull.png?raw=true)"
      backgroundOpacity={0.4}
      backgroundSize="100%"
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

    <Slide
      backgroundImage="url(https://github.com/Humanholiday/homeGroupPresentation/blob/master/src/images/HGLoginFull.png?raw=true)"
      backgroundOpacity={0.15}
      backgroundSize="100%"
    >
      <Positives />
    </Slide>

    <Slide
      backgroundImage="url(https://github.com/Humanholiday/homeGroupPresentation/blob/master/src/images/HGLoginFull.png?raw=true)"
      backgroundOpacity={0.15}
      backgroundSize="100%"
    >
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

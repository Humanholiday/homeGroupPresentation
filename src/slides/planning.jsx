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
        <Notes>
          <p>
            1. I researched other login screens online and found examples that i
            liked. I made notes about what i wanted to incorporate into my
            design and feature set.
          </p>
          <p>
            2. I decided on the overall aesthetic and decide on a clean, modern
            and simple look. I also wanted to make sure it was responsive to
            varying screen sizes.
          </p>
          <p>
            3. I thought about what features i wanted to include. I definitely
            wanted to include some front end email and password validation and a
            method to simulate a successful or invalid login attempt - as i was
            not using any backend technology or submitting the form. I also
            wanted to include as much useful interactivity as possible.
          </p>
          <p>
            4. I wanted to set a firm 3 day deadline for the project, so i could
            practice working to a deadline and so i didnt get too bogged down by
            minor details. I am used to using GitHub so i would regularly push
            my commits and include detailed messages, this would mean i could
            track my progress efficiently.
          </p>
          <p>
            5. Once the initial planning was done, i created the react app,
            created the git repo, made my first commit and launched my local
            server.
          </p>
        </Notes>
      </div>
    );
  }
}

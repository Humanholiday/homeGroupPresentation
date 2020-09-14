import React from "react";
import { interCodeBlock } from "../theme";
import { CodePane, Heading, Notes } from "spectacle";

export default class AddInteractive extends React.Component {
  render() {
    return (
      <div>
        <Heading>Add Interactivity</Heading>
        <CodePane fontSize={18} language="javascript" autoFillHeight="true">
          {interCodeBlock}
        </CodePane>

        <Heading margin="10px 62px" color="quaternary" fontSize="40px">
          Link to homepage, dynamic greeting, contact us, hover
        </Heading>
        <Notes>
          <p>
            Once the basic structure was in place, i wrote the code for the form
            and began to add the detail in.
          </p>
          <p>
            I then added, with javascript and css, some of the interactivity i
            wanted. but in a basic form. this included the dynamic greeting in
            the header. I googled this and found some examples of how to change
            the greeting depending on the time of day using the date() and
            gethours() javascript methods.
          </p>
          <p>
            I also added the company logo, anchor tags to relevant web pages and
            some hover and focus css styling to the form, tags, button and
            checkbox.
          </p>
        </Notes>
      </div>
    );
  }
}

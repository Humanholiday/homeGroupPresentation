import React from "react";
import { interCodeBlock } from "../theme";
import { CodePane, Heading } from "spectacle";

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
      </div>
    );
  }
}

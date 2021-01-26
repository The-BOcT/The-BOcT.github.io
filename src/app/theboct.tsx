import React from "react";
import AboutPanel from "../components/aboutpanel";
import BoctHead from "../components/bocthead";
import ChatBoct from "../components/chatboct";

class TheBoct extends React.Component {
  render(): JSX.Element {
    let x: JSX.Element = (
      <>
        <BoctHead />
        <ChatBoct />
        <AboutPanel />
      </>
    );
    return x;
  }
}

export default TheBoct;
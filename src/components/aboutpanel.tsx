import React from "react";
import "../styles/aboutpanel.css";

class AboutPanel extends React.Component {
  render() {
    return (
      <div className="about">
        <fieldset>
          <legend>About BOcT</legend>
          <div className="aboutbtns">
            <button id="settingBtn" title="Settings">
              <svg viewBox="0 0 512 512">
                <path id="svg2" />
              </svg>
            </button>
            <button id="infoBtn" title="Info">
              <svg viewBox="0 0 512 512">
                <path id="svg3" />
              </svg>
            </button>
            <button id="ThemeBtn" data-themenow="dark" title="Toggle Dark/Light Mode">
              <svg viewBox="0 0 512 512">
                <path id="svg4" />
              </svg>
            </button>
          </div>
          <p id="releaseVer">Version 4.0 | Jan 2021</p>
          <button id="pwaInstallBtn">install</button>
          <hr />
          <p>BOcT is a Static Browser Chatbot</p>
          <p>It's currently in Lazy Development</p>
          <p>Future Updates to BOcT can make it perform basic Maths, Maybe suggest you some Movies...</p>
        </fieldset>
      </div>
    );
  }
}

export default AboutPanel;

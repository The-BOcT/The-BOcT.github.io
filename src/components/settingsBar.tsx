import React from "react";
import "../styles/settingsBar.css"

class SettingsSideBar extends React.Component {
  render() {
    return (
      <aside className="settingbar">
        <h2>BOcT Settings</h2>
        <label className="stg_contain">
          Open Chatbox by Default: <input type="checkbox" id="stg_chat_open_default" />
        </label>

        <label className="stg_contain">
          Disable Load Screen: <input type="checkbox" id="stg_disable_load" />
        </label>

        <button className="stg_btn">Clear your Settings</button>

        <button id="stg_clearchat" className="stg_btn">
          Clear the Chat
        </button>
      </aside>
    );
  }
}
export default SettingsSideBar;

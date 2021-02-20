import React from "react";
import { svg1 } from "../lib/svg-render";
import { storageClass } from "../lib/";
import chat_process from "../lib/chat-evalutor";
import "../styles/chatBox.css";
import { Interface } from "readline";

//for default chat-reply templates. for custom boct replies see other_components.tsx
class TemplateChat extends React.Component<{ attr: [string, string] }, {}> {
  render() {
    let [c, t] = this.props.attr;
    return (
      <div className={c}>
        <p>{t}</p>
      </div>
    );
  }
}


interface IExternalReply {
  cElem: JSX.Element;
  replyBy: "cb" | "b" | "e";
  cText: string | null;
}

let chatStorage = new storageClass();
class ChatBoct extends React.Component<{ externalReplies: IExternalReply }, { chatstore: JSX.Element[] }> {
  chatInputElem: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.state = {
      chatstore: chatStorage.onlyElems,
    };
    this.chatInputElem = React.createRef();
    this.onChatSubmit = this.onChatSubmit.bind(this);
    this.OnHumanReply = this.OnHumanReply.bind(this);
  }

  onChatSubmit(e: any) {
    e.preventDefault();
    let cText = this.chatInputElem.current?.value as string;
    let cElem = <TemplateChat key={chatStorage.numOfReplies} attr={["human_talk", cText]} />;

    chatStorage.pushit(cElem, "h", cText);
    this.setState({ chatstore: chatStorage.onlyElems });

    setTimeout(this.OnHumanReply, 600);
  }

  OnHumanReply() {
    if (chatStorage.isRecentReplyHuman) {
      let humanReplies = chatStorage.onlyHumanReplies;
      let cLength = humanReplies.length;
      let input = humanReplies[cLength - 1]?.replyString as string;
      let cText = chat_process(input);
      let cElem = <TemplateChat key={cLength} attr={["boct_talk", cText]} />;

      chatStorage.pushit(cElem, "b", cText);
      this.setState({ chatstore: chatStorage.onlyElems });
    }
  }

  customReply(reply: JSX.Element) {
    console.log("dada");
  }

  render() {
    if(this.props.externalReplies.replyBy != "e"){

    }
    return (
      <div id="Chatter">
        <div className="talk_box" id="chatspace">
          {this.state.chatstore}
        </div>
        <div className="type_box">
          <form className="type_box-inner" onSubmit={this.onChatSubmit}>
            <input ref={this.chatInputElem} id="typespace" type="text" placeholder="Wanna talk with BOcT? Then type here..!" autoComplete="off" maxLength={120} />
            <button id="typespace-enter" type="submit">
              <svg viewBox="0 0 448 512">
                <path id="svg1" d={svg1} />
              </svg>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ChatBoct;

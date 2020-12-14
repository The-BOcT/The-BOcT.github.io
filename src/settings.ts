//Settings----------------------------------------------------------
//1.open chatbox by default
const stg_chatbox = <HTMLInputElement>(
  document.getElementById("stg_chat_open_default")
);
if (localStorage.getItem("chatbox") == "open") {
  stg_chatbox.checked = true;
  ElemList.boct_head.style.animation = "none";
  ElemList.Chatter.style.display = "block";
} else {
  stg_chatbox.checked = false;
  ElemList.Chatter.style.display = "none";
}

stg_chatbox.addEventListener("click", () => {
  if (stg_chatbox.checked == true) {
    ElemList.boct_head.style.animation = "none";
    ElemList.Chatter.style.display = "block";
    localStorage.setItem("chatbox", "open");
  } else {
    localStorage.setItem("chatbox", "close");
  }
});

//2.Diable Loading Screen
const stg_load = <HTMLInputElement>document.getElementById("stg_disable_load");
if (localStorage.getItem("loading") == "no") {
  stg_load.checked = true;
  stopLoading();
} else {
  stg_load.checked = false;
}

stg_load.addEventListener("click", () => {
  stg_load.checked == true
    ? localStorage.setItem("loading", "no")
    : localStorage.setItem("loading", "yes");
});

//0. Clear LocalStorage
const stg_cokieClear = <HTMLButtonElement>(
  document.getElementsByClassName("stg_btn")[0]
);
stg_cokieClear.addEventListener("click", () => {
  localStorage.removeItem("theme");
  localStorage.removeItem("chatbox");
  localStorage.clear();
});

//0a. Clear all the conversation
document.getElementById("stg_clearchat").addEventListener("click", () => {
  ElemList.theChat.innerHTML = "";
  setTimeout(() => {
    talk_div_boct("Hoi");
  }, 1000);
});

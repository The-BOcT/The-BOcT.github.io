console.log("I'm 'The BOcT' v1.2.3, created by @The-UCS-Variable");
window.onload = setTimeout(stopLoading, 2713);
/*------------------------------------------------------------------------------*/
function stopLoading() {
  document.getElementById("loader").style.display="none";
}

//scroll to bottom after a new message
function scroll_update() {
  const chat_scroll = document.getElementById("chatspace");
  chat_scroll.scrollTop = chat_scroll.scrollHeight;
}


var click_count = 0;
const CLICK_BOT = document.getElementById('BOcT');
CLICK_BOT.addEventListener("click", BOcT_open);

function BOcT_open() {
  document.getElementById("content-div-bot").style.margin="10px auto 20px";
  document.getElementById("chatter").style.display="block";
  CLICK_BOT.removeEventListener("click", BOcT_open);
  CLICK_BOT.addEventListener("click", BOcT_annoy_clicks);
}

function talk_div_boct(talkContent) {
  const newDIV = document.createElement("div");
  const attr = document.createAttribute("class");
  const talk_create = document.createElement("p");
  const talk_matter = document.createTextNode(talkContent);
  attr.value = "boct_talk recent_talk";
  newDIV.setAttributeNode(attr);
  document.getElementById("chatspace").appendChild(newDIV);
  talk_create.appendChild(talk_matter);
  newDIV.appendChild(talk_create);
  scroll_update();
}



talk_div_boct("Hoi, What's your name? \nDon't type nothing");


const SEND_MSG_TO_BOCT = document.getElementById("typespace-enter-id");
SEND_MSG_TO_BOCT.addEventListener("click", talk_div_hooman);

function talk_div_hooman() {
  const chat_boxx = document.querySelector(".typespace");
  var chat_content = chat_boxx.value;
  const newDIV = document.createElement("div");
  const attr = document.createAttribute("class");
  const talk_create = document.createElement("p");
  const talk_matter = document.createTextNode(chat_content);
  attr.value = "human_talk";
  newDIV.setAttributeNode(attr);
  document.getElementById("chatspace").appendChild(newDIV);
  talk_create.appendChild(talk_matter);
  newDIV.appendChild(talk_create);
  chat_boxx.value = "";
  scroll_update();
  setTimeout(proto_boct_study_chat, 800, chat_content);
  return chat_content;
}
//61 is proto

var boct_study_chat = () =>{

}

function BOcT_annoy_clicks() {
   click_count += 1;
   if (click_count === 10) {
     click_count = 0;
     talk_div_boct("Stop annoying me!");
   }
}



/* PROTOTYPING or TESTING ARENA -------------------------*/
const read_age = {
  num_words: 2,
  words: ['age','how long'],
  reply: function() {
    var birthdate = new Date("05/06/2020");
    var Difference_In_Time = Date.now() - birthdate.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    talk_div_boct(`Approx, ${Difference_In_Days} days`);
  }
}
const read_empty = {
  words: [''],
  reply: function() {
    talk_div_boct('Oh! Come on. Reply Something Sensible');
  }
}



function proto_boct_study_chat(studycontent) {
  for(let i = 0; i < read_age.num_words; i++) {
    if(studycontent === read_age.words[i]){
      read_age.reply();
    }
  }
  for(let i = 0; i < read_empty.words.length; i++) {
    if(studycontent === read_empty.words[i]){
      read_empty.reply();
    }
  }
}







/*


function boct_study_chat(studycontent) {
  if (studycontent === "annoy me") {
    for (var i = 0; i < 20; i++) {
      talk_div_boct("You're a IDIOT");
    }
  }
  if(studycontent != null) {var letters = studycontent.length; }
  let notnum = isNaN(studycontent);


   else if (studycontent === 'no') { talk_div_boct('You are basically NOTHING!!!'); }
   else if (letters < 4) { talk_div_boct(`I dont believe your name is ${studycontent}`); }
   else if (studycontent.indexOf('name') !== -1 ) { talk_div_boct('My name is BOcT'); }
   else if (notnum === true) { talk_div_boct(`So ${studycontent}, You will have a Bright Future`); }
}


if (notnum === false) { talk_div_boct('Type a name, YOU FOOL'); }

else if (studycontent === "age") {
  var birthdate = new Date("05/06/2020");
  var Difference_In_Time = Date.now() - birthdate.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  talk_div_boct("Approx, " + Difference_In_Days + " days");
}



const read_google = {
  words: ['google '],
  reply: function() {

  }
}


*/
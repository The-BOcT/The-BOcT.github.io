console.log("I'm 'The BOcT' v1.2.3, created by @The-UCS-Variable");
window.onload = function () {
  document.getElementById("loader").style.display="none";
}
/*------------------------------------------------------------------------------*/

//scroll to bottom after a new message
function scroll_update() {
  var chat_scroll = document.getElementById("chatspace");
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
  var newDIV = document.createElement("div");
  var attr = document.createAttribute("class");
  var talk_create = document.createElement("p");
  var talk_matter = document.createTextNode(talkContent);
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
  var chat_boxx = document.querySelector(".typespace");
  var chat_content = chat_boxx.value;
  var newDIV = document.createElement("div");
  var attr = document.createAttribute("class");
  var talk_create = document.createElement("p");
  var talk_matter = document.createTextNode(chat_content);
  attr.value = "human_talk";
  newDIV.setAttributeNode(attr);
  document.getElementById("chatspace").appendChild(newDIV);
  talk_create.appendChild(talk_matter);
  newDIV.appendChild(talk_create);
  chat_boxx.value = "";
  scroll_update();
  setTimeout(boct_study_chat, 600, chat_content);
}


function boct_study_chat(studycontent) {
  if (studycontent === "annoy me") {
    for (var i = 0; i < 20; i++) {
      talk_div_boct("You're a IDIOT");
    }
  }
  if(studycontent != null) {var letters = studycontent.length; }
  let notnum = isNaN(studycontent);

   if (notnum === false) { talk_div_boct('Type a name, YOU FOOL'); }
   else if (studycontent === "age") {
     var birthdate = new Date("05/06/2020");
     var Difference_In_Time = Date.now() - birthdate.getTime();
     var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
     talk_div_boct("Approx, " + Difference_In_Days + " days");
   }
   else if (studycontent === 'no') { talk_div_boct('You are basically NOTHING!!!'); }
   else if (letters < 4) { talk_div_boct('I dont believe your name is "' + studycontent + '"'); }
   else if (studycontent.indexOf('name') !== -1 ) { talk_div_boct('My name is BOcT'); }
   else if (notnum === true) { talk_div_boct('So ' + studycontent + ', You will have a Bright Future'); }
}


function BOcT_annoy_clicks() {
   click_count += 1;
   if (click_count === 10) {
     click_count = 0;
     talk_div_boct("Stop annoying me!");
   }
}




/*
--list of functions here--
_____________________
- scroll_update
- BOcT_open
- talk_div_boct
- talk_div_hooman
- boct_study_chat
- BOcT_annoy_clicks


_____________________

--list of Variables here--
_____________________
-


/*
console.log('working success');
---------------DUMP-------------------

//old boct function


    const name = prompt("Hoi, What's your name? \nDon't type nothing");
     if(name != null) {var letters = name.length; }
     let notnum = isNaN(name);

      if(name === null) { alert('YOU LEGENDARY IDIOT!'); }
      else if (name === 'nothing' || 'no') { alert('You are basically NOTHING!!!'); }
      else if (notnum === false) { alert('Type a name, YOU FOOL'); }
      else if (letters < 4) { alert('I dont believe your name is "' + name + '"'); }
      else if (name.indexOf('name') !== -1 ) {alert('My name is BOcT'); }
      else if (notnum === true) {
         alert('So ' + name + ', You will have a Bright Future');
    }

    document.getElementById('typespace-id').focus();



  function random(number) {
    return Math.floor(Math.random() * (number+1));
  }

//The Annoy me! function
function annoyer() {  setInterval(function(){ alert("You are a IDIOT");}, 2000);  }

click counter
type Writer Effect
_____________________
var i = 0;
var speed = 40;

function typeWriter() {
  if (i < talkContent.length) {
    document.getElementById("demo").innerHTML += talkContent.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
_____________________
unit convertors
*/

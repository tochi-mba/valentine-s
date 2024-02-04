var question = document.getElementById("question");
var text = "Mary, Will you be my Valentine?";
var noBtn = document.getElementById("noBtn")
var yesBtn = document.getElementById("yesBtn")
var sound = document.getElementById("audio");
var sound_effects = document.getElementById("audio_effects")
var bouncing = false;
var successVideo = document.getElementById("successContainer");
var successScale = 1;

var btnScale = 20
var btnFontSize = 13
var index = 0
var alerts = ["wrong answer🤓",
"stop being a h8r🤬", 
"rethink ur options 🔫",
 "pleeeeaaseeee im on my knees begging😫😓",
  "my name is skyler white YO!👎🏿",
   "i will cry💀",
    "u think im joking?? i will cry rn😐",
     "now im crying😭",
      "crying sm i will vomit🤢",
       "are you just tryna see how big the button can get?😑",
       "thats it. no more music for u >:(",
       "i feel bad. here have it back🙄",
       "alas. time for the farts💨",
    "click it again and i will start goofy ah productions™",
"welcome to goofy ah production™🤯"
]

async function displayText() {
    for (var i = 0; i < text.length; i++) {
        question.innerHTML += text[i];
        await new Promise(r => setTimeout(r, 100));
    }
}

function bounceElement(elementId) {
    var element = document.getElementById(elementId);
    var x = 0;
    var y = 0;
    var xDirection = 1;
    var yDirection = 1;

    element.style.position = "absolute";

    function updatePosition() {
      x += 5 * xDirection;
      y += 5 * yDirection;

      element.style.left = x + 'px';
      element.style.top = y + 'px';

      if (x >= window.innerWidth - 50 || x <= 0) {
        xDirection *= -1;
      }

      if (y >= window.innerHeight - 50 || y <= 0) {
        yDirection *= -1;
      }
    }

    setInterval(updatePosition, 50);
  }

function noClick(){
    sound.play()
    btnScale += 5
    btnFontSize += 5
    yesBtn.style.padding = btnScale+"px"
    yesBtn.style.fontSize = btnFontSize+"px"
    alert(alerts[index])
    if (index == 4){
        sound_effects.src = "assets/sounds/skylarWhiteYo.mp3"
        sound_effects.play()
    }else if(index == 7){
        //cry
        sound_effects.src = "assets/sounds/cryBaby.mp3"
        sound_effects.play()
    }else if(index == 10){
        sound.pause()
    }else if(index == 11){
        sound.play()
    }else if(index == 12){
        //farts
        sound_effects.src = "assets/sounds/fart.mp3"
        sound_effects.play()
    }else if(index == 14){
        //goofy ah
        sound_effects.src = "assets/sounds/goofyAh.mp3"
        sound_effects.play()
    }
    if (index < alerts.length-1){
        index++
    }else{
        index = 0
    }
    if (!bouncing){
        bounceElement('noBtnContainer');

    }
    bouncing = true

}

function yesClick(){
    sound.pause()
    sound_effects.pause()
    var all = document.getElementById("preAnswer")
    all.style.display = "none"
    document.body.style.background = 'url("https://www.inquirer.com/resizer/DBJPU9Nam3kTDfzqiYcnUqz9ItI=/arc-anglerfish-arc2-prod-pmn/public/DCJFGPCJUNGL7EJTURZ3JO34TQ.gif")';
    document.body.style.backgroundSize = 'cover';
    var interval = 100;

    var scaleInterval = setInterval(function() {
        successScale += 0.01;
    
        if (successScale >= 3.5) {
            clearInterval(scaleInterval);
        }

        successVideo.style.transform = "scale(" + successScale + ")";
        successVideo.style.visibility = "visible";
        document.querySelector("#successContainer > video").play()
    }, interval);

}

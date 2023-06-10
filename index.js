 //if we will use parenthesis in function then when we load page then it is triggered as it will be function call straight. 

var length = document.querySelectorAll("button").length; //var length = document.querySelectorAll(".drum").length; (to target specific button)

for (var i = 0; i < length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
function handleClick (){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}
document.addEventListener("keypress", function(event){
    makeSound(event.key)           //key is property inside keypress addeventlistener 
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
          case "w":
          var wsound = new Audio('sounds/crash.mp3');
          wsound.play();
          break;
          case "a":
          var asound = new Audio('sounds/kick-bass.mp3');
          asound.play(); 
          break;
          case "s":
          var ssound = new Audio('sounds/snare.mp3');
          ssound.play();
          break;
          case "d":
          var dsound = new Audio('sounds/tom-1.mp3');
          dsound.play();
          break;
          case "j":
          var jsound = new Audio('sounds/tom-2.mp3');
          jsound.play();
          break;
          case "k":
          var ksound = new Audio('sounds/tom-3.mp3');
          ksound.play();
          break;
          case "l":
          var lsound = new Audio('sounds/tom-4.mp3');
          lsound.play();
          break;
}
}

function buttonAnimation(currentKey) {
       var activeButton = document.querySelector("."+ currentKey)
        activeButton.classList.add("pressed");
        setTimeout(function (){
            activeButton.classList.remove("pressed");
        }, 100);
}
   //document.addEventListener("keypress" , function (event) {console.log(event);})

    // var audio = new Audio('sounds/crash.mp3');
    // audio.play();
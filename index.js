// *******************Combined Press & Click & Button Animation******************************//
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
});
}
  document.addEventListener("keydown", function(){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
      case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
      break;
      case "a":
          var audio = new Audio('sounds/tom-2.mp3');
          audio.play();
      break;
      case "s":
          var audio = new Audio('sounds/tom-3.mp3');
          audio.play();
      break;
      case "d":
          var audio = new Audio('sounds/tom-4.mp3');
          audio.play();
      break;
      case "j":
          var audio = new Audio('sounds/snare.mp3');
          audio.play();
      break;
      case "k":
          var audio = new Audio('sounds/crash.mp3');
          audio.play();
      break;
      case "l":
          var audio = new Audio('sounds/kick-bass.mp3');
          audio.play();
      break;


    default:

  }
};

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("."+currentKey)
  activeButton.classList.add("pressed")
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 100);
}




// ****************************Call back functions on Keypress part 1***************************************//

// function anotherAddEventListener (typeOfEvent, callback) {
//   // Detect code that happened
// var eventThatHappened = {
//   eventType: "keypress",
//   key: "p",
//   durationOfKeypress: 2
// }
//
// if (eventThatHappened.eventType === typeOfEvent) {
//   callback(eventThatHappened);
// }
// }


// ****************************Call back functions on Keypress part 2***************************************//
//
// anotherAddEventListener("keypress", function(event){
//   console.log(event);
// })


// ****************************Part 1 -- Create Object***************************************//

// var houseKeeper = {
//     name: "Jane" ,
//     yearsOfExperience: 25,
//     cleaningRepertoire: ["bathroom", "lobby", "bedrooms"],
// }

//----------------------------- Part 2 -- Create Constructor Object--------------------------------------------//

//
// function HouseKeeper (name, age, cleaningRepertoire){
//     this.name = name;
//     this.yearsOfExperience = age;
//     this.cleaningRepertoire = cleaningRepertoire;
//     this.clean = function Clean () {
//       alert("Cleaning in Progress...");
//     };
// }
//
// var houseKeeper2 = new HouseKeeper("Kristie", 25, ["laxundry", "lobby", "bedrooms", "vacuuming"]);




// *********************Have all Buttons play the same sound******************************//

// var audio = document.getElementById("myAudio");
//
// var x = document.getElementById("myAudio");
//
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function (){
//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
//   });
// }

// *******************Have aLL buttons play their sound******************************//

  //
  // document.addEventListener("keydown", function(e){
  //   alert(e.key + " key was pressed");
  // }
  // );

  // ***************************************************************************************************//


  // *******************Buttons play when buttons are pressed on web page ******************************//

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//   var buttonInnerHTML = this.innerHTML;
//   switch (buttonInnerHTML) {
//       case "w":
//         var audio = new Audio('sounds/tom-1.mp3');
//         audio.play();
//       break;
//       case "a":
//           var audio = new Audio('sounds/tom-2.mp3');
//           audio.play();
//       break;
//       case "s":
//           var audio = new Audio('sounds/tom-3.mp3');
//           audio.play();
//       break;
//       case "d":
//           var audio = new Audio('sounds/tom-4.mp3');
//           audio.play();
//       break;
//       case "j":
//           var audio = new Audio('sounds/snare.mp3');
//           audio.play();
//       break;
//       case "k":
//           var audio = new Audio('sounds/crash.mp3');
//           audio.play();
//       break;
//       case "l":
//           var audio = new Audio('sounds/kick-bass.mp3');
//           audio.play();
//       break;
//
//
//     default:
//
//   }
//   });
// }
// *******************Buttons play when key is pressed from keyboard******************************//

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.addEventListener("keydown", function(e){
//   switch (event.key) {
//       case "w":
//         var audio = new Audio('sounds/tom-1.mp3');
//         audio.play();
//       break;
//       case "a":
//           var audio = new Audio('sounds/tom-2.mp3');
//           audio.play();
//       break;
//       case "s":
//           var audio = new Audio('sounds/tom-3.mp3');
//           audio.play();
//       break;
//       case "d":
//           var audio = new Audio('sounds/tom-4.mp3');
//           audio.play();
//       break;
//       case "j":
//           var audio = new Audio('sounds/snare.mp3');
//           audio.play();
//       break;
//       case "k":
//           var audio = new Audio('sounds/crash.mp3');
//           audio.play();
//       break;
//       case "l":
//           var audio = new Audio('sounds/kick-bass.mp3');
//           audio.play();
//       break;
//
//
//     default:
//
//   }
//   });
// }
// ************************************************************************//

// ***************************************************************************************************//
// function handleClick(){
// alert("I've been clicked!");
// }
// ************************************************************************//

// document.querySelectorAll(".drum")[i].addEventListener("click", function (){
// alert("I've been clicked!");
// });
// ************************************************************************//

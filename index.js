"use strict";

// Elements //
const drumContainer = document.querySelector(".set");
// End of Elements //

// Functions //
const makeSound = (e) => {
  switch (e) {
    case "w":
      const tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      const tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      const tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      const tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      const snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      const crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      const kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
  }
};

const drumAnimation = (e) => {
  const keyToClass = {
    w: "w",
    a: "a",
    s: "s",
    d: "d",
    j: "j",
    k: "k",
    l: "l",
  };
  const className = keyToClass[e];
  if (!className) return;
  const activeButton = document.querySelector(`.${className}`);
  activeButton.classList.add("pressed");
  setTimeout(() => activeButton.classList.remove("pressed"), 100);
};
// End of Functions //

// Event Handlers //
drumContainer.addEventListener("click", (e) => {
  const btnInnerHTML = e.target.innerHTML;
  makeSound(btnInnerHTML);
  drumAnimation(btnInnerHTML);
});

document.addEventListener("keydown", (e) => {
  const key = e.key;
  makeSound(key);
  drumAnimation(key);
});
// End of Event Handlers //

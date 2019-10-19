// document.getElementsByClassName("item-0")

x = document.getElementById("desk-lamp");

// x.addEventListen("click", () => (document.body.style.background = "red"));

function hover(element) {
  x.setAttribute("src", "desk2.png");
}

function unhover(element) {
  x.setAttribute("src", "desk.png");
}

// TEST

const lines = [
  "Code",
  "Projects",
  "Experience",
  "Fun",
  "Me",
  "Music",
  "Philoshopy",
  "Science"
];

changeLine = () => {
  document.getElementById("customtext").innerText =
    lines[Math.floor(Math.random() * 8)];
  setTimeout(changeLine, 2000);
};

changeLine();

//
//
// When the user scrolls the page, execute myFunction

// window.onscroll = function() {
//   myFunction();
// };

// Get the navbar
// var navbar = document.getElementById("wall");

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky + 500) {
//     navbar.style.width = "30%";
//   } else if (window.pageYOffset < sticky + 150) {
//     navbar.style.width = "0%";
//   }
// }

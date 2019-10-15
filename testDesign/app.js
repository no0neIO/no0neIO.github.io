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
  "Philoshopy"
];

changeLine = () => {
  document.getElementById("customtext").innerText =
    lines[Math.floor(Math.random() * 8)];
  setTimeout(changeLine, 2000);
};

changeLine();

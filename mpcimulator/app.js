function mpc() {
  addGrid();
  addPads();
}

addGrid = () => {
  node = document.createElement("div");
  node.className = "grid-16";
  document.body.appendChild(node);
};

addPads = () => {
  for (i = 0; i < 16; i++) {
    pad = document.createElement("div");
    pad.id = "pad" + i;
    pad.className = "pads";
    pad.innerText = `PAD - ${i}`;
    pad[i] = document.getElementsByClassName("grid-16")[0].appendChild(pad);
    document.getElementById("pad" + i).addEventListener("click", ps);
    console.log("DONE");
    console.log(pad.id);
  }
};

ps = () => {
  var audio = new Audio(
    "https://freesound.org/data/previews/410/410514_5121236-lq.mp3"
  );
  audio.play();
  console.log("BEEP");
};

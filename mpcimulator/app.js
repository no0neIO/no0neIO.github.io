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
    document.getElementsByClassName("grid-16")[0].appendChild(pad);
    console.log("DONE");
  }
};

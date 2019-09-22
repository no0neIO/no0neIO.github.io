sounds = ['sounds/Kick2.wav', 'sounds/Perc2.wav', 'sounds/Snare1.wav', 'sounds/Kick3.wav',
  'sounds/Brash_Shaker.wav', 'sounds/Brutal_Hi_Hat.wav', 'sounds/Mafio_Snare.wav', 'sounds/kick.wav',
  'sounds/boom.wav', 'sounds/snare.wav', 'sounds/hihat.wav', 'sounds/clap.wav',
  'sounds/tom.wav', 'sounds/tink.wav', 'sounds/openhat.wav', 'sounds/ride.wav'
];

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
    document.getElementById("pad" + i).addEventListener("mousedown", ps);
    console.log("DONE");
    console.log(pad.id);
  }
};

ps = (j) => {
  const str = j.srcElement.id;
  console.log(str);
  for (let i = 0; i < 16; i++)
    if (str === `pad${i}`) {
      const audio = new Audio(sounds[i]);
      audio.currentTime = 0;
      audio.play();
    }
};
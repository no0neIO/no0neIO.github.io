document.getElementById("btn").addEventListener("click", getPhoto);

function getPhoto() {
  let url = document.getElementById("url").value;
  url += "?__a=1";
  i = 0;
  fetch(url)
    .then(resp => resp.json())
    .then(function(data) {
      let profilePicHD = data.graphql.user.profile_pic_url_hd;
      let res = data.graphql.user.edge_owner_to_timeline_media.edges;
      res.forEach(element => {
        console.log(element.node.display_url);
        document.getElementById(`gd${i}`).src = element.node.display_url;
        // document.getElementById(`l${i}`).href = element.node.display_url;
        i++;
      });
      console.log(res);
      document.getElementById("dl").innerText = "DOWNLOAD NOW!";
      document.getElementById("dl").href = profilePicHD;
      document.getElementById("profImg").src = profilePicHD;
    });
  document.getElementById("url").value = "";
}

// Lightbox Modal

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll(".grid12 img");
images.forEach(image => {
  image.addEventListener("click", e => {
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener("click", e => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
  lightbox.innerHTML = "";
});

//
// function getPhoto() {
//   let url = document.getElementById("url").value;
//   url += "?__a=1";
//   fetch(url)
//     .then(resp => resp.json())
//     .then(function(data) {
//       let test = data.graphql.hashtag.profile_pic_url;
//       console.log(test);
//       document.getElementById("dl").innerText = "DOWNLOAD NOW!";
//       document.getElementById("dl").href = test;
//     });
//   document.getElementById("url").value = "";
// }

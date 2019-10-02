document.getElementById("btn").addEventListener("click", getPhoto);

function getPhoto() {
    let url = document.getElementById("url").value;
    url += "?__a=1";
    let i = 0;
    fetch(url)
        .then(resp => resp.json())
        .then(function (data) {
            let profilePicHD = data.graphql.user.profile_pic_url_hd;
            let res = data.graphql.user.edge_owner_to_timeline_media.edges;
            res.forEach(element => {
                console.log(element.node.display_url);
                document.getElementById(`gd${i}`).src = element.node.thumbnail_src;
                let imgLink = element.node.shortcode;
                imgLink = "https://www.instagram.com/p/" + imgLink;
                document.getElementById(`l${i}`).href = imgLink;
                i++;
            });
            console.log(res);
            document.getElementById("dl").href = profilePicHD;
            document.getElementById("profImg").src = profilePicHD;
        });
    document.getElementById("url").value = "";
}

// Lightbox Modal


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
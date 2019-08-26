function bringCat() {
  var url = "https://api.thecatapi.com/v1/images/search";
  fetch(url)
    .then(resp => resp.json())
    .then(function(data) {
      let cat = data[0].url;
      document.getElementById("cata").src = cat;
      console.log(cat);
    });
}

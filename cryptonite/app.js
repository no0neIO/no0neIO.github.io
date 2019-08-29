apiKey = "c848ca0a7a5422a691f26d85cafa5be8ce08ebf4d33a2ba6d929507ad0e5de69";
url =
  "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&api_key=" +
  apiKey;
url2 =
  "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD&api_key=" +
  apiKey;

function refreshPrice() {
  this.timer = setInterval(() => this.getPrice(), 500);
}

btcStatus = document.getElementById("btcusd");
ethStatus = document.getElementById("ethusd");

oldbtcusdprice = 0;
oldethusdprice = 0;

function getPrice() {
  fetch(url2)
    .then(resp => resp.json())
    .then(function(data) {
      let btcusdprice = data.BTC.USD;
      let ethusdprice = data.ETH.USD;
      btcStatus.innerText = btcusdprice;
      ethStatus.innerText = ethusdprice;
      if (btcusdprice > oldbtcusdprice) {
        btcStatus.setAttribute("style", "color:green;");
        setTimeout(function() {
          btcStatus.setAttribute("style", "color:black;");
        }, 1500);
      } else if (btcusdprice < oldbtcusdprice) {
        btcStatus.setAttribute("style", "color:red;");
        setTimeout(function() {
          btcStatus.setAttribute("style", "color:black;");
        }, 1500);
      }

      if (ethusdprice > oldethusdprice) {
        ethStatus.setAttribute("style", "color:green;");
        setTimeout(function() {
          ethStatus.setAttribute("style", "color:black;");
        }, 1500);
      } else if (ethusdprice < oldethusdprice) {
        ethStatus.setAttribute("style", "color:red;");
        setTimeout(function() {
          ethStatus.setAttribute("style", "color:black;");
        }, 1500);
      }
      oldbtcusdprice = btcusdprice;
      oldethusdprice = ethusdprice;
    });
}

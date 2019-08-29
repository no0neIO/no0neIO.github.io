url = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD";
url2 =
  "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD";

function refreshPrice() {
  this.timer = setInterval(() => this.getPrice(), 500);
}

function getPrice() {
  fetch(url2)
    .then(resp => resp.json())
    .then(function(data) {
      let btcusdprice = data.BTC.USD;
      let ethusdprice = data.ETH.USD;
      document.getElementById("btcusd").innerText = btcusdprice;
      document.getElementById("ethusd").innerText = ethusdprice;
      console.log(btcusdprice);
      console.log(ethusdprice);
    });
}

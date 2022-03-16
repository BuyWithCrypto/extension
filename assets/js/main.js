function isAuthenticated() {
  //verify web3 authentication
}

function saveOrders() {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      var domain = new URL(tabs[0].url).hostname;
      //Amazon
      if(domain.includes("www.amazon") == true) {
        var product_url = tabs[0].url;
        if(product_url.includes("?") == true && product_url.includes("dp") == true) {
          var product_id = product_url.split("dp")[1].replace("/","").replace("/","");
          if(product_id.includes("?")) {
            product_id = product_id.split("?")[0];
            if(product_id.includes("ref=") == true) {
              product_id = product_id.split("ref=")[0]
            }
            alert(product_id)
          }
        } else {
          alert("Product not found...")
        }
      }
      //AliExpress
      if(domain.includes("aliexpress.com") == true) {
        var product_url = tabs[0].url;
        if(product_url.includes(".html") == true && product_url.includes("/item/") == true) {
          var product_id = product_url.split("item")[1].split(".html")[0].replace("/","");
          alert(product_id)
        } else {
          alert("Product not found...")
        }
      }
  });
  //save to localstorage with JSON structure
  //Amazon short url : https://www.amazon.fr/dp/B07PHPXHQS/
  //AliExpress short url : https://fr.aliexpress.com/item/1005003463410974.html
}

function getBalance() {
  //show balance of wallet
}

function quickPay() {
  //fast pay with DePay
  //<script type="text/javascript" src="https://integrate.depay.fi/widgets/v6.js"></script>
}

window.addEventListener('load', async () => {
  document.querySelector("#addToCart").addEventListener("click", saveOrders);
});

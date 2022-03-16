function isAuthenticated() {
  //verify web3 authentication
}

function saveOrders() {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      var domain = new URL(tabs[0].url).hostname;
      //Amazon
      if(domain.includes("www.amazon") == true) {
        var product_url = tabs[0].url;
        if (product_url.includes("?") && product_url.includes("dp")) {
          var product_id = product_url.split("dp")[1].replace("/","").replace("/","");
          if (product_id.includes("?")) {
            product_id = product_id.split("?")[0];
            if(product_id.includes("ref=")) {
              product_id = product_id.split("ref=")[0]
            }
            alert(product_id)
          }
        } else {
          alert("Product not found...")
        }
      } else {
        alert("Domain not found...")
      }
  });
  //save to localstorage with JSON structure
  //Amazon short url : https://www.amazon.fr/dp/B07PHPXHQS/
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

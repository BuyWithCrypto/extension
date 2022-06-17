function isAuthenticated() {
  //verify web3 authentication
}

function saveOrders() {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      var domain = new URL(tabs[0].url).hostname;
      //Amazon
      try {
        if(domain.includes("www.amazon") == false || domain.includes("aliexpress.com") == false ) {
          document.getElementById("statusHostname").innerHTML = "Marketplace not recognized."
        }
        if(domain.includes("www.amazon") == true) {
          document.getElementById("statusHostname").innerHTML = "Amazon.com"
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
            document.getElementById("statusHostname").innerHTML = "Amazon.com"
            alert("Product not found...")
          }
        }
        //AliExpress
        if(domain.includes("aliexpress.com") == true) {
          document.getElementById("statusHostname").innerHTML = "AliExpress.com"
          var product_url = tabs[0].url;
          if(product_url.includes(".html") == true && product_url.includes("/item/") == true) {
            var product_id = product_url.split("item")[1].split(".html")[0].replace("/","");
            alert(product_id)
          } else {
            document.getElementById("statusHostname").innerHTML = "AliExpress.com"
            alert("Product not found...")
          }
        }
      } catch {
        document.getElementById("statusHostname").innerHTML += "An error has occurred."
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

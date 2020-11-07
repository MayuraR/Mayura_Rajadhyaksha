function flipCoin() {
    if (Math.random() < 0.5) {
      return("Heads");
    } else {
      return("Tails");
    }
  }
  
function numHeads(flips) {
    var numHeads = 0;
    for(var i=0; i<flips; i++) {
      if (flipCoin() == "Heads") {
        numHeads++;
      }
    }
    return(numHeads);
  }
  
function headsRatio() {
    var flips = parseInt(document.getElementById("flipNumber").value);
    var result = (numHeads(flips)/flips);
    document.getElementById("message").innerHTML = "The ratio is "+ result;
  }

  

  
  
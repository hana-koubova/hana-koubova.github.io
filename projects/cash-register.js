function checkCashRegister(price, cash, cid) {

    // initialize the currencies
    const penny = 0.01;
    const nickel = 0.05;
    const dime = 0.1;
    const quarter = 0.25;
    const dollar = 1;
    const fiveDollars = 5;
    const tenDollars = 10;
    const twentyDollars = 20;
    const oneHundredDollars = 100;
    const changeArray = [penny, nickel, dime, quarter, dollar, fiveDollars, tenDollars, twentyDollars, oneHundredDollars];
    const changeArrayNames = ["PENNY", "NICKEL", "DIME", "QUARTER", "ONE", "FIVE", "TEN", "TWENTY", "ONE HUNDRED"];
  
    // cid
    const pennyMax = cid[0][1];
    const nickelMax = cid[1][1];
    const dimeMax = cid[2][1];
    const quarterMax = cid[3][1];
    const oneMax = cid[4][1];
    const fiveMax = cid[5][1];
    const tenMax = cid[6][1];
    const twentyMax = cid[7][1];
    const oneHundredMax = cid[8][1];
    const changeMaxArray = [pennyMax, nickelMax, dimeMax, quarterMax, oneMax, fiveMax, tenMax, twentyMax, oneHundredMax];
  
  
    // to return to the customer
    let toReturn = cash - price;
    console.log(toReturn)
    // the first number that is bigger than change
    const currencyMatchIndex = changeArray.findIndex(num => {
      return num > toReturn;
    });
  
    // the currency to start with
    let currencyToStartWith = currencyMatchIndex - 1;
    
  
    let refferenceArr = [];
    let refferenceSums = [];
    let isThereChange = changeMaxArray[currencyToStartWith];
    let cashStatus = "";
  
    // loop to match the change
    while (toReturn != 0) {
      toReturn -= changeArray[currencyToStartWith];
      // round the numbers
      toReturn = Math.round(toReturn * 100) / 100;
      // decreasing money from the register
      isThereChange -= changeArray[currencyToStartWith];
      isThereChange = Math.round(isThereChange * 100) / 100; 
      //console.log(isThereChange);
      changeMaxArray[currencyToStartWith] = isThereChange;
      refferenceArr.push(changeArrayNames[currencyToStartWith]);
      //console.log(toReturn);
      console.log(refferenceArr);
      console.log(refferenceArr[0]);
      if (toReturn < 0 || isThereChange < 0) {
        //console.log("is There Change: " + isThereChange)
        // make field empty of funds
        if (isThereChange < 0) {
          changeMaxArray[currencyToStartWith] = 0;
          //console.log("this currency is empty");
        };
        if (toReturn < 0) {
          changeMaxArray[currencyToStartWith] += changeArray[currencyToStartWith];
        }
        toReturn += changeArray[currencyToStartWith];
        isThereChange = changeMaxArray[currencyToStartWith - 1];
        //changeMaxArray[currencyToStartWith] += changeArray[currencyToStartWith];
        refferenceArr.pop();
        currencyToStartWith--;
        //console.log(changeMaxArray);
      };
  
      // possible to change
      if (toReturn === 0) {
        console.log("It's done")
        cashStatus = "OPEN";
      };
  
      const summedLeftFunds = changeMaxArray.reduce ((accumulator, currentValue) => {
        return accumulator + currentValue;
      });
      console.log(changeMaxArray)
      console.log("SUM: " + summedLeftFunds);
  
      if (summedLeftFunds < toReturn) {
        console.log("not enough funds");
        cashStatus = "INSUFFICIENT_FUNDS";
        break;
      }
  
      if (summedLeftFunds === 0) {
        cashStatus = "CLOSED";
        console.log("no more funds")
        break;
      }
      
    }
    // creating final change sheet
    let finalChange = [
    ["ONE HUNDRED", 0],
    ["TWENTY", 0],
    ["TEN", 0],
    ["FIVE", 0],
    ["ONE", 0],
    ["QUARTER", 0],
    ["DIME", 0],
    ["NICKEL", 0],
    ["PENNY", 0]];
  
    
    
    for (let i = 0; i < refferenceArr.length; i++) {
      let changeElement = refferenceArr[i];
      if (changeElement === "PENNY") {
        finalChange[8][1] += 0.01;
      } else if (changeElement === "NICKEL") {
        finalChange[7][1] += 0.05;
      } else if (changeElement === "DIME") {
        finalChange[6][1] += 0.1;
      } else if (changeElement === "QUARTER") {
        finalChange[5][1] += 0.25;
      } else if (changeElement === "ONE") {
        finalChange[4][1] += 1;
      } else if (changeElement === "FIVE") {
        finalChange[3][1] += 5;
      } else if (changeElement === "TEN") {
        finalChange[2][1] += 10;
      } else if (changeElement === "TWENTY") {
        finalChange[1][1] += 20;
      } else if (changeElement === "ONE HUNDRED") {
        finalChange[0][1] += 100;
        }
    } 
  
    //console.log("the result array: " + finalChange);
  
  
    const object = {
      status: cashStatus,
      change: finalChange
  
    }; 
    
    console.log(object);
    return object;
    //return currencyMatchIndex;
    //console.log(currencyMatchIndex)
  }
  
  //checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  
  //checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
  //checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  
  checkCashRegister(16.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
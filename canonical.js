calculate = function(expression) {
    let len = expression.length;

    const operators = ["+", "-", "*", "/"];

    myArray = expression.split("");

    for (let i = 0; i < myArray.length; i++) {
        if (!operators.includes(myArray[i])) {
            myArray[i] = Number(myArray[i]);
        }
    }


    for (let i =len-1; i > -1; i--) {
        if (operators.includes(myArray[i]) && typeof(myArray[i+1]) === 'number' && typeof(myArray[i+2]) === 'number') {
            const midResult = [myArray[i+1], myArray[i], myArray[i+2]];
            const result = eval(midResult.join(''));
            myArray.splice(i, 3, result);
            console.log(myArray);
            len = myArray.length;
            console.log(len);

        }
    }

    if (myArray.length > 1) {
        for (let i = myArray.length - 1; i > -1; i--) {
            console.log(myArray[i]);
            if (operators.includes(myArray[i]) && typeof(myArray[i+1]) === 'number' && typeof(myArray[i+2]) === 'number') {
                console.log("yep")
                const midResult = [myArray[i+1], myArray[i], myArray[i+2]];
                const result = eval(midResult.join(''));
                myArray.splice(i, 3, result);
                console.log(myArray);
                len = myArray.length;
                console.log(len);
    
            }
        }
    }

    console.log(myArray);

    return myArray;
  }
  

  calculate("-3*45")
  
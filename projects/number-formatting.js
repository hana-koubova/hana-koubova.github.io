const formatNumber = number => {
    // converting number to reversed array
    const string = Math.floor(number).toString();
    const array = string.split("");
    let reversed = array.reverse();

    // calculate highest portion of three
    const lenPortion = ((Math.floor(reversed.length / 3)) * 3);
    
    // adding coma every three digits
    for (let i = 0; i < lenPortion; i+=3) {
      reversed.splice(i+3, 0, ",");
      i++;
    }

    // deleting coma if at start
    if (reversed[reversed.length - 1] === ",") {
        reversed.pop();
    }
    // converting array back to reversed string
    const reversedBack = reversed.reverse();
    const stringBack = reversedBack.join("");
    return stringBack;
}

console.log(formatNumber(1234));
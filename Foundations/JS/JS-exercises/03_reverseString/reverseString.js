const reverseString = function(str) {
    let reversed = ""
    for(let i=str.length - 1; str>=0; i-- ){
        reversed+=str[i]
    }
    return str 
};

// Do not edit below this line
module.exports = reverseString;


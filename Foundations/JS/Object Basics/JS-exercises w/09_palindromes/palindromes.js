const palindromes = function (str) {
    let no_punc= "";
    for (let i =0; i<str.length; i++){
        if (str[i].toUpperCase() !== str[i].toLowerCase() || (str[i] >= '0' && str[i] <= '9')){
            no_punc+=str[i].toLowerCase()
        }
    }
    let reversed = "";
    for (let i =no_punc.length -1; i>=0; i--){
        reversed+=no_punc[i];
    }
    return reversed === no_punc;
};

// Do not edit below this line
module.exports = palindromes;

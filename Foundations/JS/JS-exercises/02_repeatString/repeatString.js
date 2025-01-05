const repeatString = function(text, num) {
    if (num<0){
        return "ERROR";
    }
    let out= "";
    for (let i=0; i<num; i++){
        out += text;
    }
    return out;
};

// Do not edit below this line
module.exports = repeatString;


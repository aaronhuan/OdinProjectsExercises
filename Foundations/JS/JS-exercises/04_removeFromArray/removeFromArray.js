const removeFromArray = function(arr, ele) {
    const arr_filtered = [];
    for (let i=0; i<arr.length; i++){
        if(arr[i] != ele){
            arr_filtered.push(arr[i]);
        }
    }
    return arr_filtered
}

// Do not edit below this line
module.exports = removeFromArray;

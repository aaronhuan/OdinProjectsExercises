const palindromes = function (str) {
    const alphanumer= "abcedfghijklmnopqrstuvwxyz0123456789";
    const no_space = str.split(" ") //splits string with space and creates an array ie car par -> ['car', 'par']
                    .reduce((complete, part) =>complete + part )
                    .toLowerCase();
    const filtered_an= Array.from(no_space)
                        .filter((char)=> alphanumer.includes(char))
                        .join('');
    const reversed = filtered_an.split('')
                        .reverse()
                        .join('');

    return reversed === filter_an;
    
};

// Do not edit below this line
module.exports = palindromes;

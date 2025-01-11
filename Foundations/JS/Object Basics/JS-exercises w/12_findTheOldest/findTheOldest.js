const calcAge =function (birth, death){
    if(!death){
        let age = new Date().getFullYear();
        return age - birth;
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, person) =>{ //oldest= acc, person = currperson
        const oldest_age = calcAge(oldest.yearOfBirth, oldest.yearOfDeath)
        const cur_per_age = calcAge(person.yearOfBirth, person.yearOfDeath)
        return cur_per_age > oldest_age ? person : oldest;  
   }, people[0]);
};



// Do not edit below this line
module.exports = findTheOldest;

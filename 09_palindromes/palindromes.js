const palindromes = function (string) {
    const reversed = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    return reversed.split("").reverse().join("") === reversed;
};

// Do not edit below this line
module.exports = palindromes;
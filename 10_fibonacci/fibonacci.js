const fibonacci = num => {
    num = Number(num);
    if (num > 0) {
        let arr = [];
        let previousNumber = 0;
        let currentNumber = 1;

        for (let i = 0; i < num; i++) {
            arr.push(currentNumber);
            [currentNumber, previousNumber] = [currentNumber + previousNumber, currentNumber];
        }

        return arr[arr.length - 1];
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;

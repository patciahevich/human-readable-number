module.exports = function toReadable (number) {
    let num = number.toString()
    let  obj = {
        0 : "zero",
        1 : "one",
        2 : "two",
        3 : "three",
        4 : "four",
        5 : "five",
        6 : "six",
        7 : "seven",
        8 : "eight",
        9 : "nine",
        10 : "ten",
        11 : "eleven",
        12 : "twelve",
        13 : "thirteen",
        14 : "fourteen",
        15 : "fifteen",
        16 : "sixteen",
        17 : "seventeen",
        18 : "eighteen",
        19 : "nineteen",
        20 : "twenty",
        30 : "thirty",
        40 : "forty",
        50 : "fifty",
        60 : "sixty",
        70 : "seventy",
        80 : "eighty",
        90 : "ninety"
    }
    let result;
    if (num.length === 3) {
        let a = num[1] + num[2];
        if (a in obj == true ) {
            result = obj[num[0]] + " hundred " + obj[a]
        } else if (num[1] == 0 && num[2] == 0) {
            result = obj[num[0]] + " hundred";   
        } else  if (num[1] == 0) {
            result = obj[num[0]] + " hundred " + obj[num[2]]
        } else {
            result = obj[num[0]] + " hundred " + obj[num[1] + "0"]  +  " " + obj[num[2]]
        }
    } else if (num.length === 2) {
        if (num in obj == true) {
            result = obj[num]
        } else {
            let s = num[0] + "0";
            result = obj[s] + " " + obj[num[1]];
        }
    } else {
        result = obj[num[0]]
    }
    return result
}

const outputElement = document.getElementById('output');
console.log = function (message) {
    if (typeof message === 'object') {
        outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
    } else {
        outputElement.innerHTML += message + '\n';
    }
};

let number = 135;

function facNum(num) {
    if (num >= 1) {
        return num * facNum(num - 1);
    } else {
        return 1;
    }


}

// let result = facNum(number);
// console.log(result);

function fibNum(num) {
    if (num >= 3) {
        return fibNum(num - 1) + fibNum(num - 2);
    } else {
        return 1;
    }


}

// let result1 = fibNum(number);
// console.log(result1);

let trackingArr = [];

function hapNum(num) {
    if (num >= 1) {
        //Convert number into array
        let numArr = Array.from(String(num), n => Number(n));
        let sum = 0;
        numArr.map(res => {
            sum += res * res;
        });

        if (sum == 1) {
            return number + ' is an Happy number';
        } else if (sum > 1) {

            if (sum == number) {
                return number + ' is an Unhappy number';
            } else {
                let length = trackingArr.length;
                if (length > 0) {
                    for (let i = 0; i < length; i++) {
                        if (sum == trackingArr[i]) {
                            return number + ' is an Unhappy number';
                        }
                    }
                }

                trackingArr.push(sum);
                return hapNum(sum)
            }
        }
    } else {
        return 'Please input an number >= 1';
    }
}

// let result = hapNum(number);
// console.log(result);


//Convert number into array
// Method:1
let myArr1 = Array.from(String(number), n => Number(n));
// console.log(myArr1);

// Method:2
let myArr2 = String(number).split("").map((num) => {
    return Number(num)
});
//   console.log(myArr2)

// Method:3
let myArr3 = [...String(number)].reduce((acc, n) => acc.concat(+n), []);
// console.log(myArr3)


function returnNewSeriesSum(n) {
    let sum = 0;
    for (let i = 10; i <= n; i += 10) {
        let numStr = i.toString().split('').reverse().join('');

        for (let val of numStr) {
            if (val === '0') {
                sum += 1
            } else {
                break
            }
        }
    }
    return sum;
}



// let result = returnNewSeriesSum(number);
// console.log(result);

function palidromNumber() {
    let count = 0;

    for (let i = 10000; i <= 99999; i++) {
        let numStr = i.toString();
        let numStrRev = i.toString().split('').reverse().join('');
        if (numStr === numStrRev) {
            console.log('numStr: ' + numStr + 'numStrRev: ' + numStrRev);
            count += 1;
        }

    }
    return count;
}


let result = palidromNumber();
console.log(result);
// const express = require('express');
// const app = express();

// // app.use((err, req, res, next) => {
// //     res.status(err.status || 500);

// //     return res.json({
// //       error: err.message,
// //     });
// // });

// app.get('/', (req, res) => {
//     res.send('HEY')
// })

// app.get('/mean', (req, res) => {
//     res.send(`${mean(req.query.nums)}`);
// })

// app.get('/median', (req, res) => {
//     res.send(`${median(req.query.nums)}`)
// })

// function formatNums(query) {
//     return query.split('').filter(c => c !== ',').map(x => parseInt(x));
// }

// function mean(nums) {
//     const arr = formatNums(nums)
//     const sum = arr.reduce((a, b) => a+b);
//     return sum/arr.length;
// }

// function median(nums) {
//     const arr = formatNums(nums).sort((a, b) => a-b);
//     return arr[Math.floor(arr.length/2)];
// }

// function mode(arr) {
//     let obj = {};
//     for(num of arr) {
//         if(obj[num]) {
//             obj[num]++;
//         } else {
//             obj[num] = 1;
//         }
//     }
//     let top = 0;
//     for(k in obj) {
//         if(obj[k] > top) {
//             top = k
//         }
//     }
//     return top;
// }

function mostFreq(arr) {
    arr = arr.sort();
    let mostFreq;
    let currChar = arr[0]
    let tempCount = 0;
    let maxCount = 0;
    for([idx, char] of arr.entries()) {
        if(currChar === char) {
            tempCount++;
            if(tempCount > maxCount) {
                maxCount = tempCount;
                mostFreq = char;
            }
            tempCount = 0;
        }
        currChar = char;
    }
    return mostFreq;
}

let x =['a', 'a', 'a', 1, 1, 3,1, 1,1,1,1,1,1,1, true, true, true, true, true];

console.log(mostFreq(x))

    //so the array is sorted
    //i store the item i am counting as well as a temp count
    //[a, a, 1, 4, 4 4, b, d, 0]
    //so the:
    //char = a;
    //tempCount = if(char === arr[i])++
    //it(tempCount > maxCount) char=arr[i]


// module.exports = app;
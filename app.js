console.log('1. Написати функцію яка прийматиме в параметри масив та повертатиме оброблений масив без ' +
    'однакових елементів..');

function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

let strings = [1, 2, 1, 3, 4, 4, 5];

console.log(unique(strings));
console.log(` `);
// --------------------------

console.log('2. Написати функцію яка буде приймати в параметри 2 масиви і повертатиме boolean значення ' +
    '- ідентичні масиви чи ні.');

function isEqual(a, b) {
    if (a instanceof Array && b instanceof Array) {
        if (a.length !== b.length) {
            return false;
        }

        for (let i = 0; i < a.length; i++) {
            if (!isEqual(a[i], b[i])) {
                return false;
            }
        }

        return true;
    }

    return a === b;
}

const first = [1, 2, 3, 4, 5];
const second = [1, 2, 3, 4, 6];

let res = isEqual(first, second);
console.log(res);
console.log(` `);
// --------------------------

console.log('3. Написати функцію яка прийматиме в параметри масив та літеру та буде виводити імена ' +
    'які починаються з тої літери яку ви передали в параметри.');

const student = ["Alina", "Ali", "Bodja", "Liza", "Vasja"];
let resArr = [];

function mitLet(arr, symb) {
    for (let key in arr) {
        if (arr[key].startsWith(symb)) {
            resArr.push(arr[key]);
        }
    }
    return (resArr);
}

console.log(mitLet(student, 'A'));
console.log(` `);
// --------------------------

console.log('4. Написати базову функцію пошуку яка повертатиме Речення в якому було знайдено співпадіння ' +
    'з словом яке ви передали в функцію.');

const sentense = ["Lorem ipsum", "ipsum dolor", "adipiscing elit", "consectetur adipiscing elit",
    "dolor sit amet", "Lorem ipsum dolor sit amet" ];
let resSen = [];

function mitSen(arr1, word) {
    for (let key1 in arr1) {
        if (arr1[key1].includes(word)) {
            resSen.push(arr1[key1]);
        }
    }
    return (resSen);
}

console.log(mitSen(sentense, 'ipsum'));
console.log(` `);
// --------------------------

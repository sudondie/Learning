
/*Третья задачка из раздела функций в "Выразительном JS"
let countChar = (str, letter) => {
    let i = 0;
    let counter = 0;
    while (i <= str.length) {
        if (str[i] === letter) {
            counter++;
        }
        i++;
    }
    return counter;
}

let countBs = (str) => {
    return countChar(str, 'B');
}
console.log(countBs("Begemot are so big and Bengamin is too small"));
console.log(countChar("Begemot are so big and Bengamin is too small", 'i'));*/

//----------------------Учусь работать с массивами---------------------//
/*let myFaults = {
    one: "Started to leart JS",
    two: "Started too late",
    three: "I'm fat"
}
console.log(myFaults);
myFaults["that's a fourth"] = "wow";
delete myFaults.three;  //удаляет определенное свойство
console.log(Object.keys(myFaults)); //выдает все свойства объекта

let myNewFaults = Object.assign(myFaults, { five: "Im'suka" }, { six: "you're suka" }) //дополняет объект
console.log(myNewFaults);
let five = [5];
let extraNewFaults = [{ "not so strong": "fat" }, { "strong enough": "lazy" }, { "very strong": "bitch" }, five, [5], 5]
console.log(extraNewFaults.indexOf(5), extraNewFaults.slice(0, 4)); //выдает индекс конкретного элемента,не может найти объекты так-как не бывает 2 одинаковых объектов
let stroka = "A gribochki vkusniye:\n";
let words = stroka.split(" ");
console.log(words.join(". "));
function min(...numbers) {
    let results = Infinity;
    for (let number of numbers) {
        if (number < results) results = number;
    }
    return results;
}
console.log(min(2, 3, 4, 5, 6, -5));

//----------Упражнение 4.1 функция range and sum-------------------------//
function range(start, end, step = start < end ? 1 : -1) {
    let array = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
    } else {
        for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
}
console.log(range(2, 5, 2));

let sum = (arr) => {
    let sum = 0;
    for (let value of arr) {
        sum += value;
    }
    return sum;
}
//----------Упражнение 4.2 функция reverseArray and everseArrayInPlace-------------------------//
let reverseArray = (arr) => { //суть в том чтобы собзавала НОВЫЙ перевернутый массив
    let revarr = [];
    let i = arr.length - 1; //длинна на 1 меньше из-за того как мы считаем индекс массива
    while (i >= 0) {
        revarr.push(arr[i]);
        i--;
    }
    return revarr;
}
console.log(reverseArray([1, 2, 3, 4, 5, 6]));

let reverseArrayInPlace = (arr) => { //суть в том чтобы ПЕРЕВЕРНУТЬ имеющийся массив
    let i = arr.length - 1;//длинна на 1 меньше из-за того как мы считаем индекс массива
    while (i >= 0) {
        arr.push(arr[i]);
        i--;
    }
    return arr.slice((arr.length + 1) / 2, arr.length + 1);
}
console.log(reverseArrayInPlace(["1", "2", "3"]));

//----------Упражнение 4.3 функции arrayToList and listToArray and others----------//
let arrayToList = (arr) => {
    let list = {};
    for (let i = arr.length - 1; i >= 0; i--) {
        list = { value: arr[i], rest: list };
    }
    return list;
}

let list = (arrayToList([1, 2, 3, 4, '5', 6]));

let listToArray = (list) => {
    let array = [];
    for (let node = list; node.rest != undefined || null; node = node.rest) {
        array.push(node.value);
    }
    return array;
}
console.log(listToArray(list));

let prepand = (list, value) => {
    return { value, rest: list };
}

let nth = (list, value) => {
    if (list.value == undefined) return undefined;
    else if (value == 0) return list.value;
    //else return nth(list.rest, value - 1); //это рекурсивный случай
    else {
        for (let node = list; node.value <= value; node = node.rest) { //это обычный случай
            if (node.value == value) return node;
        }
    }
}
console.log(nth(list, 5));

//----------Упражнение 4.4 DeepEqual----------------//
let deepEqual = (a, b) => {
    if (a == null || b == null) {
        return "Невозможно сравнить,возвращаем: " + null;
    } else if ((typeof (a) && typeof (b) == 'object')) {
        return (JSON.stringify(a) === JSON.stringify(b)) ? true : false;  //лучший способ сравнить объекты
    } else {
        return (a === b) ? true : false;
    }
}
console.log(deepEqual(5,"воу"));

----------Конец 4 главы--------------------------------------------------------------------------------- */

//----------Глава 5.Функции высшего проядка--------------------------------------------------------------//
/* let dict = [{ value: "true", lang: "ru" }, { value: "false", lang: "ru" }, { value: "sredne", lang: "ru" }];
console.log(dict.reduce((a, b) => a.lang + b.lang)); */

//----------Упражнение 5.1 "Свертка"-------------------------//

/* let arr = [[1, 2, 3, 4, 5], ["6", "7", 8, 9, 10]];
console.log(arr.reduce((a, b) => a.concat(b), [])); */

//----------Упражнение 5.2 "Собственный цикл"-------------------------//

/* let loop = (start, condition, update, body) => {
    for (let value = start; condition(value); value = update(value)) {
        body(value);
    }
}
loop(3, n => n > 0, n => n - 1, console.log); */

//----------Упражнение 5.3 "аналог метода every"-------------------------//
/* let every = (array, test) => {
    for (let value of array) {
        if (test(value)) return true;  //типо через цикл
    }
    return false;
}
console.log(every([1, 2, 3, 4], (n) => typeof (n) == 'number')); */

/* let every = (array, test) => {
    return !array.some(element => !test(element));  //типо через метод some
}
console.log(every([1, 3, 5], n => n < 10)); */

let reducer = (arr, test) => {
    return arr.reduce((sum, elem) => (test(elem)) ? (sum + elem) : false, 0);  //не забывай сука нач.знач
}
console.log(reducer([1, 2, 3, 4], n => n > 3));
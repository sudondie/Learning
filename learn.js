console.log("suka");
class Person {
  constructor(name, email, birthyear) {
    this.name = name;
    this.email = email;
    this.birthyear = birthyear;
  }
  returnBirthYear() {
    return this.birthyear;
  }
}
let Ilia = new Person("Ilia", "ilia.skakov@gmail.com", 1999);
console.log(Ilia);
class PersonExt extends Person {
  constructor(surname, name, email, birthyear) {
    super(name, email, birthyear);
    this.surname = surname;
  }
}
let iliaNickname = new PersonExt(
  "sudondie",
  "Ilia",
  "ilia.skakov@gmail.com",
  1999
);
console.log(iliaNickname);
let num = 625;
let octnum = Number(num.toString(8));
console.log(octnum.toFixed(2));

function checkNum(num) {
  return isFinite(num) == true ? `вы ввели: ${num}` : "Вы ввели не число";
}
console.log(checkNum(545));
let stroka = "15px";
console.log(parseInt(stroka)); //выводит все символы Юникода вроде как //let str1 = "lol"; //let str2 = "LOL"; //alert(str2.localeCompare(str1)); //1 если str2 < str1, 0 если равны и 1 если str2 > str1

/* let str = '';
for (let i = 65; i<=220; i++) {
    str +=String.fromCodePoint(i);
}
alert(str); */ let guests = [
  "Dima",
  "Lesha",
  1,
  2,
  3,
  0,
];
console.log(guests);
//console.log(guests.filter(s => typeof s == 'string')); //чтобы проверить на тип нужен typeof
Array.prototype.addItem = function (pos, item) {
  //возвращает массив с новым значением
  let arr1 = this.slice(0, pos);
  arr1.push(item);
  let arr2 = this.slice(pos);
  let arr = arr1.concat(arr2);
  for (let i of arr) {
    this.push(i);
  }
  return this.splice(0, this.length - arr.length);
};
console.log(guests.addItem(2, "Brat"));
console.log(guests);
console.log(guests.sort()); // сортирует. Внутрь можно передать функцию которая будет говорить КАК
let numbers = [1, 15, 16, 5, 7, 8];
console.log(numbers.sort((a, b) => a - b));
//console.log(guests.join(', '));
//console.log(guests.reduce((sum,current) => sum + current,0));

//Задачки к теме методы массивво
function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}
console.log(camelize("-webkit-transition"));
let arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
  return arr.slice(a, b - 1);
}
console.log(filterRange(arr, 1, 4));
console.log(filterRange(guests, 1, 4));

let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  //Symbol.iterator - метод для добавления итерации в объект
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

/* for (let sum of range) {
  //console.log(sum);
}итератор отделен от итерируемого объекта!!! */
//Явный вызов итератора
let string = "test";
let iterator = string[Symbol.iterator]();
// eslint-disable-next-line no-constant-condition
while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value);
}
let arrayLike = {
  0: 'world',
  1: 'matters',
  length: 2,
}
let arrayTrue = Array.from(arrayLike);
arrayTrue.push(' ,bitch');
console.log(arrayTrue);

//задача 1 из Map и Set
let superArr = ['suka','suka','bitch','please','bitch','kill'];
function unique(arr) {
  return Array.from(new Set(arr));
}
alert( unique(superArr) );

function aclean(arr) {
  let map = new Map();
  for ( let word of arr) {
    let sortedWord = word.toLowerCase().split('').sort().join('');
    map.set(sortedWord,word);
  }
  return Array.from(map.values());
}

let anoArr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(anoArr) );

let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj,'value');
obj = null;
console.log(weakMap.get(obj));
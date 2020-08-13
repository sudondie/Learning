/* console.log("suka");
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
  0: "world",
  1: "matters",
  length: 2,
};
let arrayTrue = Array.from(arrayLike);
arrayTrue.push(" ,bitch");
console.log(arrayTrue);

//задача 1 из Map и Set
let superArr = ["suka", "suka", "bitch", "please", "bitch", "kill"];
function unique(arr) {
  return Array.from(new Set(arr));
}
//alert( unique(superArr) );

function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    let sortedWord = word.toLowerCase().split("").sort().join("");
    map.set(sortedWord, word);
  }
  return Array.from(map.values());
}

let anoArr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

//alert( aclean(anoArr) );

let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "value");
obj = null;
console.log(weakMap.get(obj));

/* function sumAll(...args) {
  //остаточные параметры,всегда указываются в конце
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
console.log(sumAll(2, 3, 4)); */
//оператор расширения по сути то же что и остаточные операторы но чекай как че
/* let numbersAgain = [1, 2, 6, 7, 25];
console.log(Math.max(...numbersAgain)); */
//этот оператор можно использовать для слияния массивов просто типо let combined = [1,...arr1,...arr2];
//он так же переводид строку в массив символов */

/* function inBetween(a, b) {
  return function (x) {
    return (x >= a) & (x <= b);
  };
}
let arrBetween = [1, 2, 3, 4, 5, 6, 7];
alert(arrBetween.filter(inBetween(3, 6))); // 3,4,5,6

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

let arrIn = [1, 2, 3, 4, 5, 6, 7];
alert(arrIn.filter(inArray([1, 2, 10]))); // 1,2 */

/* function sayHello() {
  alert(this.name);
}
let objHello = { name: "Ilia" };

sayHello.call(objHello); */

function ask(question, ...handlers) {
  let isYes = confirm(question);
  for (let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }
}

//ask('Вы гей?', () => alert("вы ответили что вы гей!"), result => alert(result));

function makeCounter() {
  function counter() {
    return counter.count++; //вот это вот замыкание функции на внешних переменных
  }
  counter.set = (value) => (counter.count = value);
  counter.decreese = () => --counter.count;
  return counter;
}
let counter = makeCounter();

function sum(a) {
  let current = a;
  function f(b) {
    current += b;
    return f;
  }
  f.toString = function () {
    return current;
  };
  return f;
}

//Named Function Expression
let sayHi2 = function func(who) {
  if (who) {
    alert(`Hello ${who}`);
  } else {
    func("guest"); //здесь если не задан аргумент who можно сослаться на имя функции и вызвать ее
  } //func недоступен за пределами sayHi2, в этом и прикол
}; //если бы мы написали вместо func sayHi2 то могли бы возникнуть проблемы

/* let worker = {
  slow(min, max) {
    alert(`Called with ${min},${max}`);
    return min + max;
  },
};
 */
/* function cacheDecorator(func, hash) {
  //функция декоратор которая добавляет кеширование
  let cache = new Map();
  return function (x) {
    let key = hash(arguments);
    if (cache.has(key)) {
      return cache.get(key);
    }
    let result = func.apply(this, arguments);
    cache.set(key, result);
    return result;
  };
}
/* function hash() { */
  //хэширующая функция которая знает, как сделать одно значение из многих.
 // return [].join.call(arguments); //если бы написали просто arguments.join() то получили бы ошибку
 //ибо arguments это псевдомассив а join такое не хавает
//то что мы написали называется "заимствованием метода" */

/* worker.slow = cacheDecorator(worker.slow, hash); */
/* alert(worker.slow(3, 5)); // работает
alert("Again " + worker.slow(3, 5)); // аналогично (из кеша) */

/* function work(a, b) {
  alert(a + b); // произвольная функция или метод
}

function spy(func) {
  function wrapper(...args) {
    //можно запушить потому что ...args это реальный массив
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }
  wrapper.calls = [];
  return wrapper;
} */

/* work = spy(work);
/* for (let args of work.calls) {
  alert("call:" + args.join()); // "call:1,2", "call:4,5"
} */

/* function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}
let f1000 = delay(console.log, 1000);

f1000("test"); // показывает "test" после 1000 мс

function debounce(f, ms) {
  let isCoolDown = false;
  return function () {
    if (isCoolDown) return;
    f.apply(this, arguments);
    isCoolDown = true;
    setTimeout(() => (isCoolDown = false), ms);
  };
}

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован
 */
function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;
  function wrapper() {
    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    func.apply(this, arguments); // (1)
    isThrottled = true;
    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }
  return wrapper;
}
function f(a) {
  console.log(a)
}
let f10000 = throttle(f, 1000);

/* f10000(1); // показывает 1
f10000(2); // (ограничение, 1000 мс ещё нет)
f10000(3); // (ограничение, 1000 мс ещё нет) */

//декоратор который добавляет время вызова в консоль
console.group('Моя функция:');
function nameAlert(arg) {
  alert('Привет ' + arg);
}

function nameAlertDecorator(f) {
  return function() {
    let date = new Date();
    let minutes = date.getMinutes();
    console.log('Время вызова: ' + date.getHours() +':'+ minutes.toString().padStart(2,'0'));
    f.bind(this,arguments[0],arguments[1])();
  }
}
let nameAlertDecorator1 = nameAlertDecorator(nameAlert);
/* nameAlertDecorator1('Саша');
nameAlertDecorator1('Илья'); */
console.groupEnd();

//задачи из раздела о декораторах 
// №1 задача о "шпионе"
/* function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}

function spy(f) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return f.apply(this,arguments);
  }
  wrapper.calls = [];
  return wrapper;
}
// eslint-disable-next-line no-func-assign
work = spy(work);
work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
} */

//№2 "Задерживающий декоратор"
/* function f(x) {
  alert(x);
}

function delay(f,ms) {
  return function() {
    setTimeout(() => f.apply(this,arguments),ms);
  }
}

let f1000 = delay(alert, 1000);
f1000("test"); // показывает "test" после 1000 мс */


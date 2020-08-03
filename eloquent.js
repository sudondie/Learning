/* Третья задачка из раздела функций в "Выразительном JS"
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

let sum = arr => {
    let sum = 0;
    for (let value of arr) {
        sum += value;
    }
    return sum;
}
//----------Упражнение 4.2 функция reverseArray and reverseArrayInPlace-------------------------//
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

/* let reducer = (arr, test) => {
    return arr.reduce((sum, elem) => (test(elem)) ? (sum + elem) : false, 0);  //не забывай сука нач.значение
}
console.log(reducer([1, 2, 3, 4], n => typeof(n) =='number')); */

//----------Упражнение 6.1 "Класс Vec"-------------------------//
/* class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }
  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }
  get length() {
    return Math.floor(Math.sqrt(this.x * this.x + this.y * this.y)); //длинна вектора
  }
}
let newVec = new Vec(4, 4);
console.log(newVec.plus(new Vec(4, 4))); */

//----------Упражнение 6.2 "Реализация групп"-------------------------//
/* class Group {
  constructor() {
    this.gruppa = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.gruppa.push(value);
    }
  }
  delete(value) {
    this.gruppa = this.gruppa.filter((val) => val !== value);
  }
  has(value) {
    return this.gruppa.includes(value);
  }
  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}
class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }
  next() {
    if (this.position >= this.group.gruppa.length) {
      return { done: true };
    } else {
      let result = {
        value: this.group.gruppa[this.position],
        done: false,
      };
      this.position++;
      return result;
    }
  }
}
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
} */

//----------Проект "Робот"-------------------------//

let roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

function buildGraph(edges) {
  //Строим массив дорог
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map((r) => r.split("-"))) {
    //разделяем наш массив черточкой
    //переход от одной строки к двум типо соединяя их
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}
const roadGraph = buildGraph(roads); //переменная дорог
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}
let first = new VillageState("Post Office", [
  { place: "Post Office", address: "Alice's House" },
]);

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

VillageState.random = function (parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({ place, address });
  }
  return new VillageState("Post Office", parcels);
};

var mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office",
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some((w) => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}
function countSteps(state, robot, memory) {
  for (let steps = 0; ; steps++) {
    if (state.parcels.length == 0) return steps;
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let total1 = 0,
    total2 = 0;
  for (let i = 0; i < 100; i++) {
    let state = VillageState.random();
    total1 += countSteps(state, robot1, memory1);
    total2 += countSteps(state, robot2, memory2);
  }
  console.log(`Robot 1 needed ${total1 / 100} steps per task`);
  console.log(`Robot 2 needed ${total2 / 100}`);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);

// 8.bugs and debugging
/* try {
  azaa;
} catch(err) {
  alert("Название ошибки: "+ err.name);
  alert(err.message);
  console.log(err.stack);
} */

class InputError extends Error {}
function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "Л";
  if (result.toLowerCase() == "right") return "П";
  throw new InputError("Неверное направление: " + result);
}
promptDirection("В каком направлении?");

//Упражнение повторная попытка
class MultiplicatorUnitFailure extends Error {}
function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Дичь");
  }
}

function proverkaMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiplay(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) throw e;
    }
  }
}
//Упражнение че-то с закрытым ящиком из раздела 8
const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [], //приватная переменная содержания ящика
  get content() {
    if (this.locked) throw new Error("Закрыто!");
    return this._content;
  },
};

function withBoxUnlocked(body) {
  let locked = box.locked;
  if (!locked) {
    return body();
  }
  box.unlock();
  try {
    return body();
  } finally {
    box.lock();
  }
}
withBoxUnlocked(function () {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function () {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);

//Регулярные выражения
console.log(/abc/.test("abcoc"));

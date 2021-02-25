function incrementString(strng) {
  let stringArr = Array.from(strng);
  for (let i = 0; i <= stringArr.length; i++) {
    if (Number.isInteger(Number(stringArr[i]))) {
      let newstring = stringArr.slice(0, i);
      let number = (Number(stringArr.slice(i, stringArr.length).join("")) + 1)
        .toString()
        .padStart(stringArr.length - i, "0");
      newstring.push(number);
      return newstring.join("");
    }
  }
  stringArr.push("1");
  return stringArr.join("");
}

function removeSmallest(numbers) {
  let minIndex = numbers.indexOf(Math.min(...numbers));
  let newnumbers = numbers.slice(0, minIndex);
  let otherArr = numbers.slice(minIndex + 1, numbers.length);
  return newnumbers.concat(otherArr);
}

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? odd.shift() : x));
}

function high(x) {
  let arr = x.split(" ");
  console.log(arr);
  let result = 0;
  let counter = 0;
  let word = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      counter += arr[i][j].charCodeAt() - 96;
    }
    if (counter > result) {
      result = counter;
      word.push(arr[i]);
      counter = 0;
    } else {
      counter = 0;
    }
  }
  return word[word.length - 1];
}

let obj = Object.create({
  calculateAge() {
    return new Date().getFullYear() - this.birthYear;
  },
}, {
  name: {
    value: "Ilia",
    enumerable: true,
    writable: true,
  },
  birthYear: {
    value: 1999,
    writable: true,
    enumerable: true,
  },
  age: {
    get() {
      return new Date().getFullYear() - this.birthYear;
    },
    set(value) {
      this.birthYear = value;
      console.log("setted obj.age to: " + value);
    },
  },
});

class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("White Rabbit");

let rabbit2 = new rabbit.constructor("Black Rabbit");
console.log((rabbit2.name = "not a black"));
console.log(Object.getPrototypeOf(rabbit));

function findOdd(A) {
  let odd = new Set();
  A.forEach((elem) => {
    ((A.filter((e) => e === elem).length) % 2 != 0) ? odd.add(elem): 0
  })
  return Number([...odd]);
}

class Car {
  constructor(name, slogan) {
    this._name = name; // срабатывает сеттер который создает переменную setname и через геттер возвращает, 
    this.slogan = slogan; //если бы в сеттере было this.name = "BMW is suck" то получилась бы рекурсия ибо сеттер вызывает сеттер
  }
  get name() {
    return this._name;
  }
  set name(name) {
    (name.length <= 4) ? alert('Слишком которкое имя'): this._name = name.trim().toLowerCase();

  }
  getSlogan() {
    return (this.name + ` slogan: ${this.slogan}`)
  }
}
let mazda = new Car('mazda', 'zoom-zoom');
let bmw = new Car('BMW', 'we make it better');
console.log(mazda.getSlogan());
console.log(bmw.getSlogan());
console.log(mazda)
class CrazyCar extends Car {
  crazySlogan() {
    return this.slogan = (`${super.getSlogan() + ' but crazy'}`)
  }
}

let crazyBmw = new CrazyCar('CrazyBmw', 'still BMW buts')
console.log(crazyBmw)

class CoffeeMachine {
  constructor(power) {
    this._power = power;
    this._waterAmount = 100;
  }

  get waterAmount() {
    return this._waterAmount;
  }

}

// создаём кофеварку
let coffeeMachine = new CoffeeMachine(100);

console.log(`Мощность: ${coffeeMachine.waterAmount}W`); // Мощность: 100W

let array = {
  name: "ilia",
  age: 21,
  get nameAge() {
    return `${this.name} ${this.age}`;
  },
  set setName(value) {
    this.name = value;
  }
}

/* let myPromise = new Promise((resolve) => {
  let count = Number(prompt("Введите число: "));
  console.log(count)
  setTimeout(() => {
    resolve(count += 100);
  }, 1000);
}).then((succsessMessage) => {
  console.log('Итого ' + succsessMessage)
})
const delay = (ms) => {
  return new Promise(resolve => setTimeout(() => {
    resolve();
  }, ms))
} */

/* let url = 'https://jsonplaceholder.typicode.com/todos';
async function showSmth() {
  try {
    console.log('Loading data from server...')
    await delay(3000); //Взовращает промис
    const response = await fetch(url); //Взовращает промис
    const data = await response.json(); //Взовращает промис
    console.log("Data: ", data);
  } catch (e) {
    console.error(e);
  }
}
showSmth(); */

/* function fetchTodos() {
  console.log('Загружаем данные...')
  return delay(2000)
    .then(() => fetch(url))
    .then(response => response.json());
}
fetchTodos()
  .then(data => {
    console.log(data)
  })
  .catch(e => console.error(e)); */ // Это другой способ через промисы, в целом предыдущий это тоже самое ибо бабель его превращает
//в такой пример
const userURL = 'https://jsonplaceholder.typicode.com/users';
//Через XmlHttpRequest
/* function sendRequests(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', "application/json");
    xhr.onload = () => {
      xhr.status >= 400 ? reject(xhr.response) : resolve(xhr.response);
    }
    xhr.onerror = () => {
      reject(xhr.response);
    }
    xhr.send(JSON.stringify(body));
  })
}
const body = {
  name: "ilia",
  age: 21
}
sendRequests("POST", userURL, body) //Можно и GET запрос тогда посылать не нужно JSON
  .then(data => console.log(data))
  .catch(e => console.error(e)) */

//Теперь тоже самое только через суперновый fetch 
function sendRequestsFetch(method, url, body = null) {
  const headers = {
    'Content-type': 'application/json'
  }
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => { //Так же можно и для GET тогда нужно оставить только url
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then(error => {
        const e = new Error("Something went wrong");
        e.data = error;
        throw e;
      })
    }
  })
}
/* sendRequestsFetch("GET", userURL) //Можно и POST запрос
  .then(data => console.log(data))
  .catch(e => console.error(e)) */
const body = {
  name: "ilia",
  age: 21
}
sendRequestsFetch("POST", userURL, body) //Можно и POST запрос
  .then(data => console.log(data))
  .catch(e => console.error(e))

let obj1 = {
  name1: 'ilia',
  age1: 21
}
let obj2 = {
  name2: 'sasha',
  age2: 21
}
/* let massiv = ['51', '554', 53]
let massiv2 = ['511', '55324', 534]
let massiv3 = [...massiv, ...massiv2]
console.log({
  ...obj1
}) //Клон obj1 при помощи оператора spread */
let numbers = [1, 2, 3, 4, 5]
console.log(Math.max(...numbers))

function summa(a, b, ...args) {
  return a + b + args.reduce((a, b) => a + b, 0)
}
console.log(summa(...numbers)) //spread
const [, , c, ...rest] = numbers;
console.log(c, rest);

const message = 'Hello localstorage';
localStorage.setItem('message', message)
console.log(localStorage.getItem('message'))
localStorage.removeItem('message')
console.log(localStorage.getItem('message'))
localStorage.setItem('obj1', JSON.stringify(obj1))

class Human {
  constructor(name, age, birthday) {
    this.name = name,
      this.age = age,
      this.birthday = birthday
  }
  speak() {
    return (console.log(`Hi,my name is ${this.name} and I am ${this.age} years old`));
  }
  get birthYear() {
    return this.birthday.getFullYear() - this.age
  }
  set birthYear(newage) {
    this.age = newage;
  }
}
const sasha = new Human('Sasha', 21, new Date(Date.now()))
console.log(sasha)

class Citizen extends Human {
  constructor(name, age, birthday, city) {
    super(name, age, birthday),
      this.city = city
  }
  get home() {
    return this.city
  }
  set home(city) {
    this.city = city
  }
}
const Ilia = new Citizen('Ilia', 21, new Date(Date.now()), 'Rostov-on-Don')
console.log(Ilia)

async function something(question) {
  try {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(question);
      }, 1000);
    });
    let result = await promise;
    let check = prompt(result);
    (check !== '') ? alert(check): alert(new Error('Вы ввели пустую строку'));
  } catch (err) {
    throw new Error(err);
  }
}
/* something('Как вам?'); */

/* async function* fetchCommits(repo) { //Ассинхронный генератор
    let url = `https://api.github.com/repos/${repo}/commits`;
    while (url) {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Our script'
        },
      });
      const body = await response.json();
      // (3) Ссылка на следующую страницу находится в заголовках, извлекаем её
      let nextpage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
      nextpage = nextpage && nextpage[1];
      url = nextpage;
      for (let commit of body) {
        yield commit;
      }
    }
  }
  (async () => {
    let count = 0;
    for await (const commit of fetchCommits('javascript-tutorial/en.javascript.info')) {
      console.log(commit.author.login);
      if (++count == 50) {
        break;
      }
    }
  })(); */

let dictionary = {
  'Hello': 'hola',
  'say': 'sola',
  'broken': 'slomano'
}
let proxy = new Proxy(dictionary, {
  get(target, phrase) {
    for (let i = 0; i <= Object.keys(target).length - 1; i++) {
      if (phrase.toUpperCase() == Object.keys(target)[i].toUpperCase()) {
        return Object.values(target)[i];
      }
    }
    return phrase;
  }
});
console.log(proxy['hello']);

const withDefaultValue = (target,
  defaultValue = 0) => {
  return new Proxy(target, {
    get: (target, prop) => (prop in target ? target[prop] : defaultValue) //Если нет такого ключа то дефолт
  })
}
const pos = withDefaultValue({
    x: 24,
    y: 40
  },
  0)

const withHiddenProperties = (target, prefix = '_') => {
  return new Proxy(target, {
    has: (target, prop) => (prop in target && !prop.startsWith(prefix)), //Не даст показать приватные свойства
    ownKeys: target => Reflect.ownKeys(target).filter(p => !p.startsWith(prefix)), //не даст их перебрать 
    get: (target, prop, receiver) => (prop in receiver) ? target[prop] : void 0
  })
}
const withHid = withHiddenProperties({
  name: 'ilia',
  age: 25,
  _uid: '144545'

})

//Optimization 
const IndexedArray = new Proxy(Array, {
  construct(target, [args]) { //ловушка на создание класса через new
    const index = {};
    args.forEach(item => (index[item.id] = item))
    return new Proxy(new target(...args), {
      get(target, prop) {
        switch (prop) {
          case 'push':
            return item => {
              index[item.id] = item;
              target[prop].call(target, item);
            }
          case 'findById':
            return id => index[id]
          default:
            return target[prop];
        }
      }
    })
  }
})
const users = new IndexedArray([{
  id: 11,
  name: 'Ilia',
  age: 21
}])
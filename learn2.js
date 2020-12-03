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

let obj = Object.create(
  {
    calculateAge() {
      return new Date().getFullYear() - this.birthYear;
    },
  },
  {
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
  }
);

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
  A.forEach((elem)=> {((A.filter((e) => e === elem).length) %2!= 0) ? odd.add(elem) : 0})
  return Number([...odd]);
}

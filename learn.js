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
console.log(parseInt(stroka)); //выводит все символы Юникода вроде как

/* let str = '';
for (let i = 65; i<=220; i++) {
    str +=String.fromCodePoint(i);
}
alert(str); */ //let str1 = "lol";
//let str2 = "LOL";
//alert(str2.localeCompare(str1)); //1 если str2 < str1, 0 если равны и 1 если str2 > str1
let guests = ["Dima", "Lesha", 1, 2, 3, 0];
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
  return this.splice(0,this.length-arr.length);
};
console.log(guests.addItem(2, "Brat"));
console.log(guests.addItem(3, "suka"));
console.log(guests);

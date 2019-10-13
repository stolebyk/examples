"use strict";

/*function checkAge(age) {
	return(age > 18) ? true : confirm('Родители разрешили?');
}*/

/*function min(a, b) {
	return(a < b) ? a : b;
	
}
alert( min(83,2) );
*/
/*let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
*/
/*function isEmpty(obj) {
	for (let key in obj)
		return false;
	return true;
}
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
*/
/*let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
	for (let key in obj)
		(typeof(obj[key])==="number") ? obj[key]*=2 : 0;
}
multiplyNumeric(menu);
alert(menu.width);
alert(menu.height);
alert(menu.title);
*/
/*
let user={
    name: "Джон",
    ref() {
		return this;
	}
  };


alert( user.ref().name);*/
/*function Calculator() {
	this.read = function() {
		this.a = +prompt('введите первое значение');
		this.b = +prompt('введите второе значение');
	};	
	this.sum = () => this.a + this.b;
	this.mul = () => this.a * this.b;
}
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/
/*function Accumulator(startingValue) {
	this.value = startingValue;
		
	this.read = () => this.value += +prompt("число =");
}
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений*/
/*function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Число: ${readNumber()}`);
*/
/*
function getMaxSubSum(mas) {
	let max = 0;
	let buf = 0;
	
	for (let item of mas) {
		buf += item;
		max = Math.max(max,buf);
		if (buf < 0)
		buf = 0;	
	}
	return max;	
}
alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0*/
/*
function filterRangeInPlace(arr, a, b) {
for (let i = 0; i < arr.length; i++) {
	if (arr[i] < a || arr[i] > b) {
    arr.splice(i,1);
    i--;
	}
}	
}
let arr = [5,8, 3, 8, 1,4,39];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]
*//*
let arr = [5, 2, 1, -10, 8,57];

arr.sort( (a, b) => b-a );

alert( arr );*/
/*
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("6 / 3");
alert( result ); // 8
*/
/*
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => ({
	fullName : `${item.name} ${item.surname}`,
	id : item.id,
	}));

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин*/
/*
function sortByAge(arr) {
	arr.sort( (a,b) => a.age- b.age);
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя*/
/*
function unique(arr) {
  let set = new Set(arr);
  return Array.from(set.keys());
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values)); // Hare, Krishna, :-O
*/
/*
let dictionary = {
  'Hello': 'Hola',
  'Bye': 'Adiós'
};
dictionary = new Proxy(dictionary, {
	get(target, prop) {
	  if (prop in target)
		return  target[prop]; 
	else return prop;
	}
})
alert( dictionary['Hello'] ); // Hola
alert( dictionary['Welcome'] ); // undefined*/
/*
let user = {
  name: "Вася",
};

user = new Proxy(user, {
  get(target, prop, receiver) {
    alert(`GET ${prop}`);
    return Reflect.get(target, prop, receiver); // (1)
  },
  set(target, prop, val, receiver) {
    alert(`SET ${prop}=${val}`);
    return Reflect.set(target, prop, val, receiver); // (2)
  }
});

alert(user.name); // выводит "GET name"
user.name = "Петя"; // выводит "SET name=Петя"
*/
/*
let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop, receiver) {
      if (prop in target) {
        return Reflect.get(target, prop, receiver);
      } else {
        throw new ReferenceError(`Свойство не существует: "${prop}"`)
      }
    }
  });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // Ошибка: такого свойства не существует*/
/*
let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    if (prop < 0) {
      // даже если обращение к элементу идёт как arr[1]
      // prop является строкой, нужно преобразовать её к числу
      prop = +prop + target.length;
    }
    return Reflect.get(target, prop, receiver);
  }
});


alert(array[-1]); // 3
alert(array[-2]); // 2*/
/*
let str = prompt("Введите выражение");
alert(window.eval(str));
*/
/*
let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator(undefined, {
	sensitivity : "base",
});

animals.sort( (a, b) => collator.compare(a, b) ) ;

alert( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК
*/
/*
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// Два сообщения были прочитаны
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages содержит 2 элемента

// ...давайте снова прочитаем первое сообщение!
readMessages.add(messages[0]);
// readMessages до сих пор содержит 2 элемента

// Вопрос: было ли сообщение message[0] прочитано?
alert("Read message 0: " + readMessages.has(messages[2])); // true

messages.shift();
*/
/*
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function sumSalaries(obj) {
	let sum = 0;
	for (let val of Object.values(obj))
		sum += val;
	return sum;
}
alert( sumSalaries(salaries) ); // 650
*/
/*
function count(obj) {
	return Object.keys(obj).length;
}
let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
*//*
let user = {
  name: "John",
  years: 30
};
let {name, years : age, isAdmin = false} = 	user;
alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false*/
/*
function topSalary(salaries) {
	let res = 0;
	let key = null;
	for (let [key, val] of Object.entries(salaries)) {
	if (val > res) {
		res = val;
		name = key;
	}
	}
	return name;
}
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
alert(topSalary(salaries));*/
/*
function getWeekDay(date) {
	switch (date.getDay()) {
	case 0 : return "ВС";
	break;
	case 1 : return "ПН";
	break;
	case 2 : return "ВТ";
	break;
	case 3 : return "СР";
	break;
	case 4 : return "ЧТ";
	break;
	case 5 : return "ПТ";
	break;
	case 6 : return "СБ";
	break;
	}
}
function getWeekDay2(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

function bench(f,date) {
 
  let start = Date.now();
  for (let i = 0; i < 1000000; i++) f(date);
  return Date.now() - start;
}
let date = new Date(2014, 0, 3);

let time1 = 0;
let time2 = 0;

// bench(upperSlice) и bench(upperLoop) поочерёдно запускаются 10 раз
for (let i = 0; i < 100; i++) {
  time1 += bench(getWeekDay, date);
  time2 += bench(getWeekDay2, date);
}

 alert( 'Итоговое время switch: ' + time1 );
alert( 'Итоговое время mass: ' + time2 );
*/
/*
function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
*/
/*
function getLastDayOfMonth(year, month) {
	let date = new Date(year, month + 1, 0);
	return date.getDate();
	}
	alert(getLastDayOfMonth(2012, 1));
	alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) );
*/
/*
function getSecondsToday() {
  let now = new Date();

  return now.getHours()*now.getMinutes()*now.getSeconds(); // получаем секунды
}

alert( getSecondsToday() );
*/
/*
let user = {
  name: "Василий Иванович",
  age: 35
};
let str = JSON.stringify(user);
alert(str);
let obj = JSON.parse(str);
alert(obj.name);
*/
/*
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Здорово, скрипт ${script.src} загрузился`);
  alert( _ ); // функция, объявленная в загруженном скрипте
});
*/
/*
function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
  });
}


 let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => alert(`${script.src} загружен!`),
  error => alert(`Ошибка: ${error.message}`)
);

//promise.then(script => alert('Ещё один обработчик...'));
*/
/*
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));
alert("jfg");
*/
/*
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert( fib(3) ); // 2
alert( fib(7) ); // 13
alert( fib(77) ); // 5527939700884757*/

/*let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
function printList(list) {
	
	   // выводим текущий элемент

  if (list.next) {
    printList(list.next); // делаем то же самое для остальной части списка
  }
alert(list.value);
  }
printList(list);*/
/*
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // функция shooter
      alert( i ); // должна выводить порядковый номер
	};
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...*/
/*
function makeCounter() {

  function counter() {
    return counter.count++;
  };
  counter.set = (val) => counter.count = val;
  counter.count = 0;
  counter.decrease = () => counter.count--;
  return counter;
}
  let counter = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  counter.set(10); // установить новое значение счётчика
  
  alert( counter() ); // 10
  
  counter.decrease(); // уменьшить значение счётчика на 1
  
  alert( counter() ); // 10 (вместо 11)*/
  /*
 let res=0;
  function sum(a) {
	  res +=a;
	  return sum;
  }
  sum.toString = function() {
    return res;
  };
  alert(sum(3)(1)(5));
 // alert(res);*/
 /*function printNumbers(frm, to) {
	 if (frm > to)
		 return;
	 alert(frm);
	 setTimeout(printNumbers(frm++, to) ,1000 );
 }
  function printNumbers1(frm, to) {
setInterval( () => (frm <= to) ? alert(frm++) : clearInterval, 1000);
  }
  //printNumbers(3,9);
 printNumbers(1,5);*/

/*function slow(x) {
  // здесь могут быть ресурсоёмкие вычисления
  alert(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {    // если кеш содержит такой x,
      return cache.get(x); // читаем из него результат
    }

    let result = func(x); // иначе, вызываем функцию

    cache.set(x, result); // и кешируем (запоминаем) результат
    return result;
  };
}

slow = cachingDecorator(slow);

alert( slow(1) ); // slow(1) кешируем
alert( "Again: " + slow(1) ); // возвращаем из кеша

alert( slow(2) ); // slow(2) кешируем
alert( "Again: " + slow(2) ); // возвращаем из кеша
*/
/*
function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}
  function spy(func) {
  
    function wrapper(...args) {
      wrapper.calls.push(args);
      return func.apply(this, arguments);
    }
  
    wrapper.calls = [];
  
    return wrapper;
  }

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}*/
/*
function f(x) {
  alert(x);
}
function delay(func, ms) {
	return function() {
	setTimeout(() => func.apply(func, arguments),ms );
	};
} 
// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс*/

/*function f() {
  alert(this.name);
}

let a = f.bind( {name: "Вася"} );
let l = f.bind( {name: "Петя"} );
a();
//f(); // Вася
l();
*/
/*
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
*/
/*
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?
*/
/*
let a = "privet";
let prom = new Promise(function(resolve,reject){
		
	setTimeout( () => resolve( alert("sana") ),2000);
});
prom.then(() => alert("xyz"));
alert(a);*/
/*
function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
  });
}*/
/*
function delay(ms) {
 return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));*/
/*
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 4000); // (*)

}).then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});
*/
async function loadJson(url) { // (1)
  let response = await fetch(url); // (2)

  if (response.status == 200) {
    let json = await response.json(); // (3)
    return json;
  }

  throw new Error(response.status);
}
loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404